import { AppBar, Avatar, Badge, Box, IconButton, InputBase, Menu, MenuItem, styled, Toolbar, Typography } from "@mui/material";
import React, { useState } from "react";
import User from "./User";
import LoginModal from "./LoginModal";
import { Mail, Notifications, Search as SearchIcon } from "@mui/icons-material";
import TuneIcon from "@mui/icons-material/Tune"; // Added import for TuneIcon
import Link from "next/link";

interface Props {
  user: User;
}

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: "#4F7942",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const Navbar: React.FC<Props> = ({ user }) => {
  const [open, setOpen] = useState(false);
  const [mailCount, setMailCount] = useState(4); // Initialize mail count
  const [notificationsCount, setNotificationsCount] = useState(2); // Initialize notifications count
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);

  const handleOpenLoginModal = () => {
    setLoginModalOpen(true);
  };

  const handleCloseLoginModal = () => {
    setLoginModalOpen(false);
  };

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Avatar src={"logo.png"} sx={{ width: 50, height: 50 }} alt="logo" />
        <Typography
          ml={4}
          mr={4}
          align="left"
          variant="h6"
          sx={{ display: { xs: "none", sm: "block" } }}
        >
          Macon Pet Finder
        </Typography>
        <Search sx={{ flexGrow: 1 }}>
          <InputBase
            placeholder="Search..."
            sx={{
              color: "gray",
              "&::placeholder": { color: "lightgray" },
            }}
          />
        </Search>
        <Icons ml={2}>
          <TuneIcon onClick={() => setOpen(true)} />
        </Icons>
        <Icons ml={4}>
          <IconButton color="inherit">
            <Badge badgeContent={mailCount} color="secondary">
              <Mail />
            </Badge>
          </IconButton>
          <IconButton color="inherit">
            <Badge badgeContent={notificationsCount} color="secondary">
              <Notifications />
            </Badge>
          </IconButton>
          <IconButton color="inherit" onClick={handleOpenLoginModal}>
            <Avatar sx={{ width: 30, height: 30 }} src={user.image} />
          </IconButton>
        </Icons>
        <UserBox>
          <Typography component="span">{user.username}</Typography>
        </UserBox>
      </StyledToolbar>
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
        <MenuItem>Logout</MenuItem>
      </Menu>
      <LoginModal open={isLoginModalOpen} onClose={handleCloseLoginModal} />
    </AppBar>
  );
};

export default Navbar;
