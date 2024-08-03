'use client'

import React, { useState, useEffect } from 'react';
import { Grid, Paper, Tabs, Tab, Box, Button, Stack } from '@mui/material';
import PantryItemList from './pantry/PantryItemList';
// import { AddItemForm } from './pantry/AddItemForm';
import { ExpiringItemsList } from './pantry/ExpiringItems';
import { PantryOverview } from './pantry/PantryOverview';
import { addPantryItem, updatePantryItem, deletePantryItem, getPantryItems, getExpiringItems } from '@/app/_firebase/firestore/utils';
import { AddItemDialog } from './pantry/AddItemDialog';

import { CameraAlt } from '@mui/icons-material';


export default function PantryManager() {
    const [pantryItems, setPantryItems] = useState([]);
    const [expiringItems, setExpiringItems] = useState([]);
    const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
    const [isCameraDialogOpen, setIsCameraDialogOpen] = useState();

    useEffect(() => {
        fetchPantryItems();
        fetchExpiringItems();
    }, []);


    const fetchPantryItems = async () => {
        const items = await getPantryItems();
        setPantryItems(items);
    }

    const fetchExpiringItems = async () => {
        const items = await getExpiringItems();
        setExpiringItems(items);
    }

    // const handleAddItem = async (newItem) => {
    //     await addPantryItem(newItem);
    //     fetchPantryItems()
    //     fetchExpiringItems()
    // }

    // const handleAddItem = async (newItem) => {
    //     console.log("handleAddItem called with:", newItem);
    //     await addPantryItem(newItem);
    //     await fetchPantryItems();
    //     await fetchExpiringItems();
    //     console.log("States updated after adding item");
    //   }


    // const handleEditItem = async (id, updates) => {
    //     await updatePantryItem(id, updates);
    //     fetchPantryItems()
    //     fetchExpiringItems()
    // }
    const handleEditItem = async (id, updates) => {
        console.log("Editing item with ID:", id, "Updates:", updates);
        try {
            await updatePantryItem(id, updates);
            await fetchPantryItems();
            await fetchExpiringItems();
            console.log("Item updated successfully");
        } catch (error) {
            console.error("Error updating item:", error);
        }
    }

    const handleRemoveItem = async (id) => {
        await deletePantryItem(id);
        fetchPantryItems();
        fetchExpiringItems();
    };

    const handleMarkConsumed = async (id) => {
        await deletePantryItem(id);
        fetchPantryItems();
        fetchExpiringItems();
    };

    const [activeTab, setActiveTab] = useState(0);
    // const [drawerOpen, setDrawerOpen] = useState(false);
    // const [addItemDrawerOpen, setAddItemDrawerOpen] = useState(false);
    const [newItem, setNewItem] = useState({
        name: "",
        quantity: 1,
        expirationDate: "",
    })
    const [errors, setErrors] = useState({
        name: "",
        quantity: "",
        expirationDate: "",
    })


    const handleInputChange = (field, value) => {
        setNewItem(prev => ({ ...prev, [field]: value }));
        // Clear error for this field when user types
        setErrors(prev => ({ ...prev, [field]: '' }));
    };

    const validateForm = () => {
        let newErrors = {};
        if (!newItem.name.trim()) newErrors.name = 'Name is required';
        if (!newItem.quantity || newItem.quantity < 1) newErrors.quantity = 'Quantity must be at least 1';
        if (!newItem.expirationDate) newErrors.expirationDate = 'Expiration date is required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    const handleAddItem = async (newItemToAdd) => {
        console.log("handleAddItem called with:", newItemToAdd);
        if (validateForm()) {
            try {
                await addPantryItem(newItemToAdd);
                await fetchPantryItems();
                await fetchExpiringItems();
                console.log("Item added successfully");
                // Reset form after successful addition
                setNewItem({
                    name: "",
                    quantity: 1,
                    expirationDate: "",
                });
            } catch (error) {
                console.error("Error adding item:", error);
                // Optionally set an error state to display to the user
            }
        } else {
            console.log("Form validation failed");
        }
    }



    const handleTabChange = (event, newValue) => {
        setActiveTab(newValue);
    };

    return (
        <>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <Paper elevation={3} style={{ padding: '16px', marginBottom: '16px' }}>
                        <PantryOverview
                            totalItems={pantryItems.length}
                            totalQuantity={pantryItems.reduce((total, item) => total + item.quantity, 0)}
                            expiringItemsCount={expiringItems?.length || 0}
                        />
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper elevation={3} style={{ padding: '16px', marginBottom: '16px' }} spacing={3}>
                        {/* <AddItemForm
                        newItem={newItem}
                        errors={errors}
                        onInputChange={handleInputChange}
                        onAddItem={handleAddItem}
                    /> */}
                        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                            <Button 
                                variant="contained" 
                                color="primary" 
                                onClick={() => setIsAddDialogOpen(true)}
                                fullWidth
                            >
                                Add New Item
                            </Button>
                            <Button 
                                variant="contained" 
                                color="secondary" 
                                onClick={() => setIsCameraDialogOpen(true)}
                                startIcon={<CameraAlt />}
                                fullWidth
                            >
                                Add with Camera
                            </Button>
                        </Stack>
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper elevation={3}>
                        <Tabs value={activeTab} onChange={handleTabChange} variant='fullWidth' >
                            <Tab label="Pantry Items" />
                            <Tab label="Expiring Soon" />
                        </Tabs>
                        <Box p={3}>
                            {activeTab === 0 && (
                                <PantryItemList
                                    items={pantryItems}
                                    onEditItem={handleEditItem}
                                    onRemoveItem={handleRemoveItem}
                                />
                            )}
                            {activeTab === 1 && (
                                <ExpiringItemsList
                                    items={expiringItems}
                                    onMarkConsumed={handleMarkConsumed}
                                />
                            )}
                        </Box>
                    </Paper>
                </Grid>
            </Grid>


            <AddItemDialog
                open={isAddDialogOpen}
                onClose={() => setIsAddDialogOpen(false)}
                newItem={newItem}
                errors={errors}
                onInputChange={handleInputChange}
                onAddItem={handleAddItem}
            />

            <AddItemDialog
                open={isCameraDialogOpen}
                onClose={() => setIsCameraDialogOpen(false)}
                newItem={newItem}
                errors={errors}
                onInputChange={handleInputChange}
                onAddItem={handleAddItem}
                useCamera={true}
            />
        </>
    );
}


// Below is the previous working version with mock data

// 'use client'

// import React, { useState } from 'react';
// import { Grid, Paper, Tabs, Tab, Box } from '@mui/material';
// import PantryItemList  from './pantry/PantryItemList';
// import { AddItemForm } from './pantry/AddItemForm';
// import { ExpiringItemsList } from './pantry/ExpiringItems';
// import { PantryOverview } from './pantry/PantryOverview';

// export default function PantryManager() {
//     const [pantryItems, setPantryItems] = useState([
//         {
//             id: 1,
//             name: "Canned Tomatoes",
//             quantity: 3,
//             expirationDate: "2024-07-31",
//         },
//         {
//             id: 2,
//             name: "Whole Wheat Pasta",
//             quantity: 1,
//             expirationDate: "2024-08-15",
//         },
//         {
//             id: 3,
//             name: "Peanut Butter",
//             quantity: 2,
//             expirationDate: "2024-09-01",
//         },
//         {
//             id: 4,
//             name: "Oats",
//             quantity: 4,
//             expirationDate: "2024-06-30",
//         },
//     ])
//     const [newItem, setNewItem] = useState({
//         name: "",
//         quantity: 1,
//         expirationDate: "",
//     })
//     const [errors, setErrors] = useState({
//         name: "",
//         quantity: "",
//         expirationDate: "",
//     })

//     const [activeTab, setActiveTab] = useState(0);
//     const [drawerOpen, setDrawerOpen] = useState(false);
//     const [addItemDrawerOpen, setAddItemDrawerOpen] = useState(false);

//     const handleAddItem = () => {
//         if (newItem.name.trim() === "") {
//             setErrors((prev) => ({ ...prev, name: "Item name is required" }))
//             return
//         }
//         if (newItem.quantity <= 0) {
//             setErrors((prev) => ({ ...prev, quantity: "Quantity must be greater than 0" }))
//             return
//         }
//         if (newItem.expirationDate === "") {
//             setErrors((prev) => ({ ...prev, expirationDate: "Expiration date is required" }))
//             return
//         }
//         setPantryItems((prev) => [...prev, { id: Date.now(), ...newItem }])
//         setNewItem({ name: "", quantity: 1, expirationDate: "" })
//         setErrors({ name: "", quantity: "", expirationDate: "" })
//     }
//     const handleEditItem = (id, updates) => {
//         setPantryItems((prev) => prev.map((item) => (item.id === id ? { ...item, ...updates } : item)))
//     }
//     const handleRemoveItem = (id) => {
//         setPantryItems((prev) => prev.filter((item) => item.id !== id))
//     }

//     const handleMarkConsumed = (id) => {
//         setPantryItems((prev) => prev.filter((item) => item.id !== id))
//     }

//     const handleInputChange = (field, value) => {
//         setNewItem(prev => ({ ...prev, [field]: value }));
//     };

//     const expiringItems = pantryItems.filter((item) => {
//         const expirationDate = new Date(item.expirationDate);
//         const today = new Date();
//         const daysUntilExpiration = (expirationDate - today) / (1000 * 60 * 60 * 24);
//         return daysUntilExpiration <= 7;
//     });

//     const handleTabChange = (event, newValue) => {
//         setActiveTab(newValue);
//     };

//     return (
//         <Grid container spacing={3}>
//             <Grid item xs={6}>
//                 <Paper elevation={3} style={{ padding: '16px', marginBottom: '16px' }}>
//                     <PantryOverview
//                         totalItems={pantryItems.length}
//                         totalQuantity={pantryItems.reduce((total, item) => total + item.quantity, 0)}
//                         expiringItemsCount={expiringItems.length}
//                     />
//                 </Paper>
//             </Grid>
//             <Grid item xs={6}>
//                 <Paper elevation={3} style={{ padding: '16px', marginBottom: '16px' }}>
//                     <AddItemForm
//                         newItem={newItem}
//                         errors={errors}
//                         onInputChange={handleInputChange}
//                         onAddItem={handleAddItem}
//                     />
//                 </Paper>
//             </Grid>
//             <Grid item xs={12}>
//                 <Paper elevation={3}>
//                     <Tabs value={activeTab} onChange={handleTabChange} variant='fullWidth' >
//                         <Tab label="Pantry Items" />
//                         <Tab label="Expiring Soon" />
//                     </Tabs>
//                     <Box p={3}>
//                         {activeTab === 0 && (
//                             <PantryItemList
//                                 items={pantryItems}
//                                 onEditItem={handleEditItem}
//                                 onRemoveItem={handleRemoveItem}
//                             />
//                         )}
//                         {activeTab === 1 && (
//                             <ExpiringItemsList
//                                 items={expiringItems}
//                                 onMarkConsumed={handleMarkConsumed}
//                             />
//                         )}
//                     </Box>
//                 </Paper>
//             </Grid>
//         </Grid>
//     );
// }