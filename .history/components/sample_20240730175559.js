'use client'

import React, { useState } from 'react';
import { 
  Grid, Paper, Typography, TextField, Button, 
  List, ListItem, ListItemText, ListItemSecondaryAction
} from '@mui/material';

export function PantryManager() {
  const [pantryItems, setPantryItems] = useState([
    {
      id: 1,
      name: "Canned Tomatoes",
      quantity: 3,
      expirationDate: "2024-07-31",
    },
    // ... other initial items
  ]);

  const [newItem, setNewItem] = useState({
    name: "",
    quantity: 1,
    expirationDate: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    quantity: "",
    expirationDate: "",
  });

  // ... keep the same handleAddItem, handleEditItem, handleRemoveItem, 
  // handleMarkConsumed, and expiringItems logic

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={8}>
        <Paper elevation={3} style={{ padding: '16px' }}>
          <Typography variant="h5" gutterBottom>
            Pantry Items
          </Typography>
          <List>
            {pantryItems.map((item) => (
              <ListItem key={item.id}>
                <ListItemText
                  primary={item.name}
                  secondary={`Quantity: ${item.quantity} | Expires: ${item.expirationDate}`}
                />
                <ListItemSecondaryAction>
                  <Button 
                    variant="outlined" 
                    size="small" 
                    // onClick={() => handleEditItem(item.id, {
                    //   name: "Edited Item",
                    //   quantity: 5,
                    //   expirationDate: "2024-12-31",
                    // })}
                  >
                    Edit
                  </Button>
                  <Button 
                    variant="outlined" 
                    size="small" 
                    // onClick={() => handleRemoveItem(item.id)}
                  >
                    Remove
                  </Button>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
          <Grid container spacing={2} style={{ marginTop: '16px' }}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Item Name"
                value={newItem.name}
                onChange={(e) => setNewItem(prev => ({ ...prev, name: e.target.value }))}
                error={!!errors.name}
                helperText={errors.name}
              />
            </Grid>
            <Grid item xs={6} sm={3}>
              <TextField
                fullWidth
                type="number"
                label="Quantity"
                value={newItem.quantity}
                onChange={(e) => setNewItem(prev => ({ ...prev, quantity: parseInt(e.target.value) }))}
                error={!!errors.quantity}
                helperText={errors.quantity}
              />
            </Grid>
            <Grid item xs={6} sm={3}>
              <TextField
                fullWidth
                type="date"
                label="Expiration Date"
                value={newItem.expirationDate}
                onChange={(e) => setNewItem(prev => ({ ...prev, expirationDate: e.target.value }))}
                error={!!errors.expirationDate}
                helperText={errors.expirationDate}
              />
            </Grid>
            <Grid item xs={12}>
              <Button 
              variant="contained" 
              color="primary" 
              onClick={handleAddItem}>
                Add Item
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={12} md={4}>
        <Paper elevation={3} style={{ padding: '16px', marginBottom: '16px' }}>
          <Typography variant="h5" gutterBottom>
            Expiring Soon
          </Typography>
          <List>
            {expiringItems.length > 0 ? (
              expiringItems.map((item) => (
                <ListItem key={item.id}>
                  <ListItemText
                    primary={item.name}
                    secondary={`Quantity: ${item.quantity} | Expires: ${item.expirationDate}`}
                  />
                  <ListItemSecondaryAction>
                    <Button 
                      variant="outlined" 
                      size="small" 
                      onClick={() => handleMarkConsumed(item.id)}
                    >
                      Mark as Consumed
                    </Button>
                  </ListItemSecondaryAction>
                </ListItem>
              ))
            ) : (
              <Typography variant="body2" color="textSecondary">
                No items expiring soon.
              </Typography>
            )}
          </List>
        </Paper>
        <Paper elevation={3} style={{ padding: '16px' }}>
          <Typography variant="h5" gutterBottom>
            Pantry Overview
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Typography variant="body2" color="textSecondary">
                Total Items
              </Typography>
              <Typography variant="h6">
                {pantryItems.length}
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body2" color="textSecondary">
                Total Quantity
              </Typography>
              <Typography variant="h6">
                {pantryItems.reduce((total, item) => total + item.quantity, 0)}
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body2" color="textSecondary">
                Expiring Soon
              </Typography>
              <Typography variant="h6">
                {expiringItems.length}
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}