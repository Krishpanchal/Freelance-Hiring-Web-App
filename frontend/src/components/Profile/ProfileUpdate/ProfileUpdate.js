import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import RecruiterProfile from "./recruiter/RecruiterProfile";

const ProfileUpdate = () => {
  const { user } = useSelector((state) => state.auth);

  if (user.role === "job hunter") {
    return "hello";
  } else {
    return (
      <ChakraProvider>
        <RecruiterProfile />
      </ChakraProvider>
    );
  }
};

export default ProfileUpdate;
