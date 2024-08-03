'use client'

import React, { useState, useRef } from 'react';
import { Grid, TextField, Button, Dialog, DialogTitle, DialogContent, DialogActions, CircularProgress } from '@mui/material';
import { Camera } from 'react-camera-pro';
import { uploadImage } from '@/app/_firebase/storage/utils';
import Image from 'next/image';

export function AddItemDialog({ open, onClose, newItem, errors, onInputChange, onAddItem, useCamera = false }) {
  const [capturedImage, setCapturedImage] = useState(null);
  const [isCameraOpen, setIsCameraOpen] = useState(useCamera);
  const [isLoading, setIsLoading] = useState(false);
  const cameraRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (capturedImage) {
      await handleImageUploadAndAnalysis(capturedImage);
    } else {
      console.log("Form submitted with item:", newItem);
      onAddItem(newItem);
    }
    onClose();
  };

  const handleCapture = () => {
    const imageSrc = cameraRef.current.takePhoto();
    setCapturedImage(imageSrc);
    setIsCameraOpen(false);
  };

  const handleImageUploadAndAnalysis = async (imageSrc) => {
    setIsLoading(true);
    try {
      const downloadURL = await uploadImage(imageSrc);

      const response = await fetch('/api/analyze-image', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ imageUrl: downloadURL }),
      });

      if (!response.ok) {
        throw new Error('Failed to analyze image');
      }

      const analysisResult = await response.json();

      const newItemData = {
        name: analysisResult.name,
        quantity: 1,
        expirationDate: analysisResult.expirationDate,
        imageUrl: downloadURL,
      };

      onAddItem(newItemData);
    } catch (error) {
      console.error('Error processing image:', error);
      // Handle error (e.g., show error message to user)
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{useCamera ? 'Add Item with Camera' : 'Add New Item'}</DialogTitle>
      <form onSubmit={handleSubmit}>
        <DialogContent>
          {isLoading ? (
            <CircularProgress />
          ) : useCamera && isCameraOpen ? (
            <Camera ref={cameraRef} />
          ) : useCamera && capturedImage ? (
            // <Image src={capturedImage} alt="Captured" style={{ maxWidth: '100%', maxHeight: '200px' }} />
            <Image src={capturedImage} alt="Captured" width={540} height={675} />
          ) : (
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Item Name"
                  value={newItem.name}
                  onChange={(e) => onInputChange('name', e.target.value)}
                  error={!!errors.name}
                  helperText={errors.name}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  type="number"
                  label="Quantity"
                  value={newItem.quantity}
                  onChange={(e) => onInputChange('quantity', parseInt(e.target.value))}
                  error={!!errors.quantity}
                  helperText={errors.quantity}
                  required
                  InputProps={{ inputProps: { min: 1 } }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  type="date"
                  label="Expiration Date"
                  value={newItem.expirationDate}
                  onChange={(e) => onInputChange('expirationDate', e.target.value)}
                  error={!!errors.expirationDate}
                  helperText={errors.expirationDate}
                  required
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
            </Grid>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          {useCamera && isCameraOpen && (
            <Button onClick={handleCapture} color="primary">
              Capture
            </Button>
          )}
          {(!useCamera || (useCamera && !isCameraOpen)) && !isLoading && (
            <Button type="submit" variant="contained" color="primary">
              Add Item
            </Button>
          )}
        </DialogActions>
      </form>
    </Dialog>
  );
}

// import React from 'react';
// import { Grid, TextField, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';

// export function AddItemDialog({ open, onClose, newItem, errors, onInputChange, onAddItem }) {
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted with item:", newItem);
//     onAddItem(newItem);
//     onClose();
//   };

//   return (
//     <Dialog open={open} onClose={onClose}>
//       <DialogTitle>Add New Item</DialogTitle>
//       <form onSubmit={handleSubmit}>
//         <DialogContent>
//           <Grid container spacing={2}>
//             <Grid item xs={12}>
//               <TextField
//                 fullWidth
//                 label="Item Name"
//                 value={newItem.name}
//                 onChange={(e) => onInputChange('name', e.target.value)}
//                 error={!!errors.name}
//                 helperText={errors.name}
//                 required
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 fullWidth
//                 type="number"
//                 label="Quantity"
//                 value={newItem.quantity}
//                 onChange={(e) => onInputChange('quantity', parseInt(e.target.value))}
//                 error={!!errors.quantity}
//                 helperText={errors.quantity}
//                 required
//                 InputProps={{ inputProps: { min: 1 } }}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 fullWidth
//                 type="date"
//                 label="Expiration Date"
//                 value={newItem.expirationDate}
//                 onChange={(e) => onInputChange('expirationDate', e.target.value)}
//                 error={!!errors.expirationDate}
//                 helperText={errors.expirationDate}
//                 required
//                 InputLabelProps={{ shrink: true }}
//               />
//             </Grid>
//           </Grid>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={onClose}>Cancel</Button>
//           <Button type="submit" variant="contained" color="primary">
//             Add Item
//           </Button>
//         </DialogActions>
//       </form>
//     </Dialog>
//   );
// }