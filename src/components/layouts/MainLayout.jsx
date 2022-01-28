import React from "react";
import Navbar from "../modules/Navbar";
import { Box } from "@chakra-ui/react";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Box p={12}>{children}</Box>
    </div>
  );
};

export default MainLayout;
