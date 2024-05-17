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
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@mui/system";
import CommonButton from "../CommonButton";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import MenuSimple from "../Menu/menu";
import SearchIcon from "@mui/icons-material/Search";

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}));

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  width: 500,
}));

const navBarItems = (loggedIn) => {
  let items = [];

  return !loggedIn
    ? [
        ...items,
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
      ]
    : items;
};

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();
  const isLoggedIn = auth.currentUser;

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const renderNavBarItems = () =>
    navBarItems(isLoggedIn).map((item) => (
      <CommonButton
        key={item.id}
        onClick={() => navigate(item.route)}
        color={item.color}
        sx={item.sx}
        id={item.label}
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
        {navBarItems(isLoggedIn).map((item) => (
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
            <CommonButton
              color={"inherit"}
              onClick={() => {
                let url = auth.currentUser ? "/home" : "/";
                navigate(url);
              }}
            >
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
            {isLoggedIn ? <MenuSimple /> : ""}
          </div>
        </Toolbar>
      </AppBar>
      {renderNavBarSm()}
    </div>
  );
};

export default Navbar;
