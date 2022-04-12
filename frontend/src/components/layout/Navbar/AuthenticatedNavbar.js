import React, { useEffect } from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Avatar,
  MenuDivider,
  Button,
} from "@chakra-ui/react";
import { BellIcon } from "@chakra-ui/icons";
import { useDispatch } from "react-redux";
import { logout } from "../../../store/auth/authSlice";
import { Link } from "react-router-dom";
import DefaultImage from "../../../assets/default.jpg";

const AuthenticatedNavbar = ({ currentUser }) => {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout(currentUser));
  };

  const userImage = currentUser.photo?.url
    ? currentUser.photo?.url
    : DefaultImage;

  return (
    <>
      <Button>
        <BellIcon />
      </Button>
      <Menu>
        <MenuButton>
          <Avatar
            size='md'
            cursor='pointer'
            name={currentUser.name}
            src={userImage}
          />
        </MenuButton>
        <MenuList>
          <Link to='/profile'>
            <MenuItem>Profile</MenuItem>
          </Link>
          <MenuItem>My Collections</MenuItem>
          <MenuDivider />
          <MenuItem onClick={logoutHandler}>Logout</MenuItem>
        </MenuList>
      </Menu>
    </>
  );
};

export default AuthenticatedNavbar;
