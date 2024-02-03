import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Grid } from "@mui/material";
import RightSidebar from "./instagram/RightSidebar";
import Post from "./instagram/Post";
import Login from "./instagram/Login";
import { useUserStore } from "./instagram/store";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./instagram/Home";
import Profile from "./instagram/Profile";
import {
  HomeMaxOutlined,
  HouseOutlined,
  Person2Outlined,
} from "@mui/icons-material";
import Theming from "./Theming";
import Counter from "./Counter";
import Enrollment from "./Enrollment";
import NewPost from "./instagram/NewPost";

const drawerWidth = 240;

export default function Instagram() {
  const email = useUserStore((s) => s.email);
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar>
          <Typography variant="h5">
            Instagram {email && <span> ({email.split("@")[0]})</span>}
          </Typography>

          {!email && <Login />}
        </Toolbar>
        <Divider />
        <List>
          <Link to="/">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <HouseOutlined />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link to="/profile">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Person2Outlined />
                </ListItemIcon>
                <ListItemText primary="Profile" />
              </ListItemButton>
            </ListItem>
          </Link>
        </List>
        <Divider />
        <List>
          <Link to="/counter">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Person2Outlined />
                </ListItemIcon>
                <ListItemText primary="Counter" />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link to="/new">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Person2Outlined />
                </ListItemIcon>
                <ListItemText primary="New Post" />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link to="/theming">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Person2Outlined />
                </ListItemIcon>
                <ListItemText primary="Theming" />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link to="/enrollment">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Person2Outlined />
                </ListItemIcon>
                <ListItemText primary="Enrollment" />
              </ListItemButton>
            </ListItem>
          </Link>
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3, width: "100%" }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<NewPost />} />
          <Route path="/profile/:user" element={<Profile />} />
          <Route path="/theming" element={<Theming />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/enrollment" element={<Enrollment />} />
        </Routes>
      </Box>
    </Box>
  );
}
