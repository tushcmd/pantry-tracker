import { Paper, Typography, List, ListItem, ListItemText, ListItemSecondaryAction, Button } from '@mui/material';



export default function PantryItemList() {
    return (
        <Paper elevation={3} style={{ padding:'16px' }} >
            <Typography variant='h5' gutterBottom>
                Pantry Items
            </Typography>
            <List>
                {items.map((item) => (
                    <ListItem key={item.id} >
                        <ListItemText 
                            primary={item.name} 
                            secondary={`Quantity: ${item.quantity} | Expires: ${item.expirationDate}`}
                        />
                        <ListItemSecondaryAction>
                            <Button
                                variant='outlined'
                                size='small'
                                onClick={() => onEditItem(item.id, {
                                    name: "Edited item",
                                    quantity: 5,
                                    expirationDate: "2024-12-31",
                                })}
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
                )                
                )}
            </List>
        </Paper>
    )
}