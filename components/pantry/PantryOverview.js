import React from 'react';
import { Grid, Typography } from '@mui/material';

export function PantryOverview({ totalItems, totalQuantity, expiringItemsCount }) {
  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Pantry Overview
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Typography variant="body2" color="textSecondary">
            Total Items
          </Typography>
          <Typography variant="h6">
            {totalItems}
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="body2" color="textSecondary">
            Total Quantity
          </Typography>
          <Typography variant="h6">
            {totalQuantity}
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="body2" color="textSecondary">
            Expiring Soon
          </Typography>
          <Typography variant="h6">
            {expiringItemsCount}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}