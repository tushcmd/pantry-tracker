import React from 'react';
import { Grid, TextField, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';

export function AddItemDialog({ open, onClose, newItem, errors, onInputChange, onAddItem }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with item:", newItem);
    onAddItem(newItem);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add New Item</DialogTitle>
      <form onSubmit={handleSubmit}>
        <DialogContent>
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
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button type="submit" variant="contained" color="primary">
            Add Item
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}