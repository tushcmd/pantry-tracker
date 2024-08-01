'use client'

import React, { useState } from 'react';
import { Grid, Paper, Tabs, Tab, Box } from '@mui/material';
import PantryItemList  from './pantry/PantryItemList';
import { AddItemForm } from './pantry/AddItemForm';
import { ExpiringItemsList } from './pantry/ExpiringItems';
import { PantryOverview } from './pantry/PantryOverview';

export function PantryManager() {
    const [pantryItems, setPantryItems] = useState([
        {
            id: 1,
            name: "Canned Tomatoes",
            quantity: 3,
            expirationDate: "2024-07-31",
        },
        {
            id: 2,
            name: "Whole Wheat Pasta",
            quantity: 1,
            expirationDate: "2024-08-15",
        },
        {
            id: 3,
            name: "Peanut Butter",
            quantity: 2,
            expirationDate: "2024-09-01",
        },
        {
            id: 4,
            name: "Oats",
            quantity: 4,
            expirationDate: "2024-06-30",
        },
    ])
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

    const [activeTab, setActiveTab] = useState(0);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [addItemDrawerOpen, setAddItemDrawerOpen] = useState(false);

    const handleAddItem = () => {
        if (newItem.name.trim() === "") {
            setErrors((prev) => ({ ...prev, name: "Item name is required" }))
            return
        }
        if (newItem.quantity <= 0) {
            setErrors((prev) => ({ ...prev, quantity: "Quantity must be greater than 0" }))
            return
        }
        if (newItem.expirationDate === "") {
            setErrors((prev) => ({ ...prev, expirationDate: "Expiration date is required" }))
            return
        }
        setPantryItems((prev) => [...prev, { id: Date.now(), ...newItem }])
        setNewItem({ name: "", quantity: 1, expirationDate: "" })
        setErrors({ name: "", quantity: "", expirationDate: "" })
    }
    const handleEditItem = (id, updates) => {
        setPantryItems((prev) => prev.map((item) => (item.id === id ? { ...item, ...updates } : item)))
    }
    const handleRemoveItem = (id) => {
        setPantryItems((prev) => prev.filter((item) => item.id !== id))
    }

    const handleMarkConsumed = (id) => {
        setPantryItems((prev) => prev.filter((item) => item.id !== id))
    }

    const handleInputChange = (field, value) => {
        setNewItem(prev => ({ ...prev, [field]: value }));
    };

    const expiringItems = pantryItems.filter((item) => {
        const expirationDate = new Date(item.expirationDate);
        const today = new Date();
        const daysUntilExpiration = (expirationDate - today) / (1000 * 60 * 60 * 24);
        return daysUntilExpiration <= 7;
    });

    const handleTabChange = (event, newValue) => {
        setActiveTab(newValue);
    };

    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Paper elevation={3} style={{ padding: '16px', marginBottom: '16px' }}>
                    <PantryOverview
                        totalItems={pantryItems.length}
                        totalQuantity={pantryItems.reduce((total, item) => total + item.quantity, 0)}
                        expiringItemsCount={expiringItems.length}
                    />
                </Paper>
            </Grid>
            <Grid item xs={12}>
                <Paper elevation={3} style={{ padding: '16px', marginBottom: '16px' }}>
                    <AddItemForm
                        newItem={newItem}
                        errors={errors}
                        onInputChange={handleInputChange}
                        onAddItem={handleAddItem}
                    />
                </Paper>
            </Grid>
            <Grid item xs={12}>
                <Paper elevation={3}>
                    <Tabs value={activeTab} onChange={handleTabChange} centered>
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
    );
}