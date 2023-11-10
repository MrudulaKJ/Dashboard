import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import WaveGraph from "./Chart";
import BarGraph from "./BarGraph";
import SideBar from "./SideBar";

const containerStyle = {
  display: "flex",
};

const contentStyle = {
  marginLeft: "300px", // Adjust this value to match the sidebar width
  width: "calc(100% - 350px)", // Subtract the sidebar width from 100%
  marginTop:"180px"
};

const Dashboard = () => {
  const [randomData, setRandomData] = useState(false);
  const [manage, setManage] = useState("option1");
  const [months, setMonths] = useState("jan");
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
            <Grid item xs={12} sm={6}>
              <Paper elevation={3} style={{ padding: "36px" }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={4}>
                    <Typography variant="h6">Checking Account</Typography>
                  </Grid>
                  <Grid item xs={6} md={4}>
                    <Button onClick={handleRandomizeData}>Manage</Button>
                  </Grid>
                  <Grid item xs={6} md={4}>
                    <FormControl fullWidth>
                      <InputLabel id="months-label">Months</InputLabel>
                      <Select
                        labelId="months-label"
                        id="months-select"
                        value={months}
                        onChange={(e) => setMonths(e.target.value)}
                      >
                        <MenuItem value="jan">January</MenuItem>
                        <MenuItem value="feb">February</MenuItem>
                        <MenuItem value="mar">March</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
                <WaveGraph randomData={randomData} />
              </Paper>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Paper elevation={3} style={{ padding: "36px" }}>
                <Typography variant="h6">
                  Invoices
                  <Button onClick={handleOpenModal}>
                    New Sales Invoice
                  </Button>
                </Typography>
                <BarGraph data={barGraphData} />
              </Paper>
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
