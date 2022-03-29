import React from "react";
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

const AuthenticatedNavbar = ({ user }) => {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout(user));
  };

  return (
    <>
      <Button>
        <BellIcon />
      </Button>
      <Menu>
        <MenuButton>
          <Avatar size='md' cursor='pointer' name={user.name} />
        </MenuButton>
        <MenuList>
          <MenuItem>Profile</MenuItem>
          <MenuItem>My Collections</MenuItem>
          <MenuDivider />
          <MenuItem onClick={logoutHandler}>Logout</MenuItem>
        </MenuList>
      </Menu>
    </>
  );
};

export default AuthenticatedNavbar;
