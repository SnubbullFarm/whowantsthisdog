import { AppBar, Avatar, Badge, Box, IconButton, InputBase, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import React, { useState } from "react";
import User from "./User";
import LoginModal from "./LoginModal";
import { Mail, Notifications, Search as SearchIcon } from "@mui/icons-material";
import Link from "next/link";

interface Props {
  user: User;
}

const Navbar: React.FC<Props> = ({ user }) => {
  const [open, setOpen] = useState(false);
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [mailClicked, setMailClicked] = useState(false);
  const [notificationsClicked, setNotificationsClicked] = useState(false);

  const handleOpenLoginModal = () => {
    setLoginModalOpen(true);
  };

  const handleCloseLoginModal = () => {
    setLoginModalOpen(false);
  };

  const handleMailClick = () => {
    setMailClicked(true);
    setTimeout(() => setMailClicked(false), 300); // Reset after 300ms
  };

  const handleNotificationsClick = () => {
    setNotificationsClicked(true);
    setTimeout(() => setNotificationsClicked(false), 300); // Reset after 300ms
  };

  return (
    <AppBar position="sticky">
      <Toolbar>
        <img src={"logo.png"} width={50} height={50} alt="logo" />
        <Typography align="left" variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Macon Pet Finder
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "white",
            borderRadius: 20,
            paddingLeft: 2,
            paddingRight: 2,
          }}
        >
          <SearchIcon />
          <InputBase
            placeholder="Search..."
            sx={{
              color: "gray",
              marginLeft: 1,
              "&::placeholder": { color: "lightgray" },
            }}
          />
        </Box>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <Mail />
            </Badge>
          </IconButton>
          <IconButton color="inherit">
            <Badge badgeContent={2} color="secondary">
              <Notifications />
            </Badge>
          </IconButton>
          
          <IconButton color="inherit" onClick={handleOpenLoginModal}>
            <Avatar sx={{ width: 30, height: 30 }} src={user.image} />
          </IconButton>
        </Box>
      </Toolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={() => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Link href={"/profile"} passHref>
          <MenuItem>Profile</MenuItem>
        </Link>
        <Link href={"/settings"} passHref>
          <MenuItem>My account</MenuItem>
        </Link>
        <MenuItem>Logout</MenuItem>
      </Menu>
      <LoginModal open={isLoginModalOpen} onClose={handleCloseLoginModal} />
    </AppBar>
  );
};

export default Navbar;
