import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@mui/system";
import CommonButton from "../CommonButton";
import { useNavigate } from "react-router-dom";

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}));

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  width: 500,
}));

const navBarItems = [
  {
    id: 1,
    label: "Job",
    route: "job",
    color: "inherit",
    sx: { display: { md: "inline-flex", xs: "none" } },
  },
  {
    id: 2,
    label: "Companies",
    route: "Companies",
    color: "inherit",
    sx: { display: { md: "inline-flex", xs: "none" } },
  },
  {
    id: 3,
    label: "Login",
    route: "login",
    color: "inherit",
    sx: { display: { md: "inline-flex", xs: "none" } },
  },
  {
    id: 4,
    label: "SignUp",
    route: "signup",
    color: "inherit",
    sx: { display: { md: "inline-flex", xs: "none" } },
  },
];

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const renderNavBarItems = () =>
    navBarItems.map((item) => (
      <CommonButton
        key={item.id}
        onClick={() => navigate(item.route)}
        color={item.color}
        sx={item.sx}
      >
        {item.label}
      </CommonButton>
    ));

  const renderNavBarSm = () => (
    <StyledDrawer
      anchor="left"
      open={drawerOpen}
      onClose={handleDrawerClose}
      ModalProps={{ keepMounted: true }}
    >
      <List>
        {navBarItems.map((item) => (
          <ListItem
            key={item.id}
            onClick={() => {
              navigate(item.route);
              handleDrawerClose();
            }}
          >
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </List>
    </StyledDrawer>
  );
  return (
    <div>
      <AppBar position="static" color={"primary"}>
        <Toolbar>
          <StyledIconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerOpen}
          >
            <MenuIcon />
          </StyledIconButton>

          <Typography variant="h6" component="div">
            <CommonButton color={"inherit"} onClick={() => navigate("/")}>
              Talent Hunt
            </CommonButton>
          </Typography>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              width: "90%",
            }}
          >
            {renderNavBarItems()}
          </div>
        </Toolbar>
      </AppBar>
      {renderNavBarSm()}
    </div>
  );
};

export default Navbar;