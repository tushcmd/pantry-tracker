'use client'

import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button } from '@mui/material';

export function EditItemForm({ item, onSave, onCancel }) {
  const [editedItem, setEditedItem] = useState(item);

  const handleChange = (field, value) => {
    setEditedItem(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    onSave(item.id, editedItem);
  };

  return (
    <Dialog open={true} onClose={onCancel}>
      <DialogTitle>Edit Item</DialogTitle>
      <DialogContent>
        <TextField
          fullWidth
          margin="dense"
          label="Item Name"
          value={editedItem.name}
          onChange={(e) => handleChange('name', e.target.value)}
        />
        <TextField
          fullWidth
          margin="dense"
          type="number"
          label="Quantity"
          value={editedItem.quantity}
          onChange={(e) => handleChange('quantity', parseInt(e.target.value))}
        />
        <TextField
          fullWidth
          margin="dense"
          type="date"
          label="Expiration Date"
          value={editedItem.expirationDate}
          onChange={(e) => handleChange('expirationDate', e.target.value)}
          InputLabelProps={{ shrink: true }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onCancel}>Cancel</Button>
        <Button onClick={handleSave}>Save</Button>
      </DialogActions>
    </Dialog>
  );
}