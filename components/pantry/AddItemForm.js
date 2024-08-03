import { Grid, TextField, Button } from '@mui/material';



export function AddItemForm({ newItem, errors, onInputChange, onAddItem }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with item:", newItem);
    onAddItem(newItem);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2} style={{ marginTop: '16px' }}>
        <Grid item xs={12} sm={6}>
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
        <Grid item xs={6} sm={3}>
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
        <Grid item xs={6} sm={3}>
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
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            Add Item
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
// export function AddItemForm({ newItem, errors, onInputChange, onAddItem }) {
//   // const handleSubmit = (e) => {
//   //   e.preventDefault();
//   //   onAddItem(newItem);
//   // };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted with item:", newItem);
//     onAddItem(newItem);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <Grid container spacing={2} style={{ marginTop: '16px' }}>
//         <Grid item xs={12} sm={6}>
//           <TextField
//             fullWidth
//             label="Item Name"
//             value={newItem.name}
//             onChange={(e) => onInputChange('name', e.target.value)}
//             error={!!errors.name}
//             helperText={errors.name}
//           />
//         </Grid>
//         <Grid item xs={6} sm={3}>
//           <TextField
//             fullWidth
//             type="number"
//             label="Quantity"
//             value={newItem.quantity}
//             onChange={(e) => onInputChange('quantity', parseInt(e.target.value))}
//             error={!!errors.quantity}
//             helperText={errors.quantity}
//           />
//         </Grid>
//         <Grid item xs={6} sm={3}>
//           <TextField
//             fullWidth
//             type="date"
//             label="Expiration Date"
//             value={newItem.expirationDate}
//             onChange={(e) => onInputChange('expirationDate', e.target.value)}
//             error={!!errors.expirationDate}
//             helperText={errors.expirationDate}
//           />
//         </Grid>
//         <Grid item xs={12}>
//           <Button type="submit" variant="contained" color="primary">
//             Add Item
//           </Button>
//         </Grid>
//       </Grid>
//     </form>
//   );
// }