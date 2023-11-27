// AccountWishlist.js
import React from 'react';
import { Paper, Typography, Grid } from '@mui/material';

const AccountWishlist = () => {
  const accountData = ['Sales', 'Advertising', 'Inventory', 'Entertainment'];
  const thisMonthData = ['1,90,000', '9,20,000', '40,000', '89,000'];
  const ytdData = ['5,000', '0.0', '7,00,000', '20,000'];

  return (
    <Paper elevation={3} style={{ padding: '36px', height: '300px', width: '100%', marginBottom: '16px' }}>
      <Typography variant="h8" style={{fontWeight:"900"}}>Account Wishlist</Typography>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Typography variant="subtitle1" style={{color:"grey"}}>Account</Typography>
          {accountData.map((data, index) => (
            <Typography key={index} style={{ marginBottom: '8px' }}>
              {data}
            </Typography>
          ))}
        </Grid>
        <Grid item xs={4}>
          <Typography variant="subtitle1" style={{color:"grey"}}>This Month</Typography>
          {thisMonthData.map((data, index) => (
            <Typography key={index} style={{ marginBottom: '8px' }}>
              {data}
            </Typography>
          ))}
        </Grid>
        <Grid item xs={4}>
          <Typography variant="subtitle1" style={{color:"grey"}}>YTD</Typography>
          {ytdData.map((data, index) => (
            <Typography key={index} style={{ marginBottom: '8px' }}>
              {data}
            </Typography>
          ))}
        </Grid>
      </Grid>
    </Paper>
  );
};

export default AccountWishlist;
