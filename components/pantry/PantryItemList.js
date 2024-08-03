'use client'

import { List, ListItem, ListItemText, ListItemSecondaryAction, Button } from '@mui/material';
import React, { useState } from 'react';
import { EditItemForm } from './EditItemForm';

export default function PantryItemList({ items, onEditItem, onRemoveItem }) {
    const [editingItem, setEditingItem] = useState(null);

    const handleEditClick = (item) => {
        setEditingItem(item);
    };

    const handleEditSave = (id, updatedItem) => {
        onEditItem(id, updatedItem);
        setEditingItem(null);
    };

    const handleEditCancel = () => {
        setEditingItem(null);
    };

    return (
        <div>
            <List>
            {/* sx={{ overflowX: 'scroll' }} */}
                {items.map((item) => (
                    <ListItem key={item.id}>
                        <ListItemText 
                            primary={item.name} 
                            secondary={`Quantity: ${item.quantity} | Expires: ${item.expirationDate}`}
                        />
                        <ListItemSecondaryAction>
                            <Button
                                variant='outlined'
                                size='small'
                                onClick={() => handleEditClick(item)}
                            >
                                Edit
                            </Button>
                            <Button 
                                variant="outlined" 
                                size="small" 
                                onClick={() => onRemoveItem(item.id)}
                            >
                                Remove
                            </Button>
                        </ListItemSecondaryAction>
                    </ListItem>
                ))}
            </List>
            {editingItem && (
                <EditItemForm
                    item={editingItem}
                    onSave={handleEditSave}
                    onCancel={handleEditCancel}
                />
            )}
        </div>
    );
}