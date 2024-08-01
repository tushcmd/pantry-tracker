import React from 'react';
import { List, ListItem, ListItemText, ListItemSecondaryAction, Button, Paper, Typography } from '@mui/material';

export function ExpiringItemsList({ items, onMarkConsumed }) {
  return (
    <div>
      {/* <Typography variant="h5" gutterBottom>
        Expiring Soon
      </Typography> */}
      <List>
        {items.length > 0 ? (
          items.map((item) => (
            <ListItem key={item.id}>
              <ListItemText
                primary={item.name}
                secondary={`Quantity: ${item.quantity} | Expires: ${item.expirationDate}`}
              />
              <ListItemSecondaryAction>
                <Button 
                  variant="outlined" 
                  size="small" 
                  onClick={() => onMarkConsumed(item.id)}
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
    </div>
  );
}