import React, { useState } from "react";
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  List,
  Toolbar,
  Typography,
} from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon"; // Make sure you have this import
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import '../Components/style.scss';
import Assiduus from '../images/assiduus.jpeg';

const drawerWidth = 240;

function SideBar() {
  const menuItems = [
    { text: "Dashboard", icon: <InboxIcon /> },
    { text: "Accounts", icon: <MailIcon /> },
    { text: "Payroll", icon: <InboxIcon /> },
    { text: "Reports", icon: <MailIcon /> },
    { text: "Advisor", icon: <MailIcon /> },
    { text: "Contacts", icon: <MailIcon /> },
  ];

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {menuItems.map((item, index) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <Box sx={{ display: "flex" }}  >
      <CssBaseline  />
      <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
        }}
      >
     
        <Toolbar className="white-toolbar" >
        {/* <img src={Assiduus} alt="Inbox"  /> */}

        </Toolbar>
      </AppBar>
      <Drawer
      
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": { width: drawerWidth },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
}

export default SideBar;
