import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Button,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import WaveGraph from './Chart';
import BarGraph from './BarGraph';
import SideBar from './SideBar';
import AccountWishlist from './AccountWishlist';

const containerStyle = {
  display: 'flex',
};

const contentStyle = {
  marginLeft: '300px',
  width: 'calc(100% - 350px)',
  marginTop: '180px',
};

const Dashboard = () => {
  const [randomData, setRandomData] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const handleRandomizeData = () => {
    setRandomData(!randomData);
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const barGraphData = [45, 60, 72, 35, 80, 55];

  return (
    <div style={containerStyle}>
      <SideBar />

      <div style={contentStyle}>
        <Box p={2} bgcolor="background.paper" boxShadow={4}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} lg={6}>
              <Paper elevation={3} style={{ padding: '36px', height: '400px', width: '100%' }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={4}>
                    <Typography variant="subtitle1">Checking Account</Typography>
                  </Grid>
                  <Grid item xs={6} md={4} textAlign="center">
                    <Button onClick={handleRandomizeData} style={{ marginLeft: '13rem' }}>
                      Manage
                    </Button>
                  </Grid>
                  <Grid item xs={6} md={4}></Grid>
                </Grid>
                <WaveGraph randomData={randomData} />
              </Paper>
            </Grid>

            <Grid item xs={12} md={6} lg={6}>
              <Paper elevation={3} style={{ padding: '36px', height: '400px', width: '100%' }}>
                <Typography variant="h8"  >
                  Invoices
                  <Button onClick={handleOpenModal} style={{ marginLeft: '13rem' }}>
                    New Sales Invoice
                  </Button>
                </Typography>
                <BarGraph data={barGraphData} />
              </Paper>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
            <AccountWishlist/>
            </Grid>
          </Grid>

          <Dialog open={openModal} onClose={handleCloseModal} fullWidth>
            <DialogTitle>Upload New Sales Invoice</DialogTitle>
            <DialogContent>
              <input type="file" />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseModal} color="primary">
                Cancel
              </Button>
              <Button onClick={handleCloseModal} color="primary">
                Upload
              </Button>
            </DialogActions>
          </Dialog>
        </Box>
      </div>
    </div>
  );
};

export default Dashboard;
