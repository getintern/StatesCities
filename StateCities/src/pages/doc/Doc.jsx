import { Box, HStack } from "@chakra-ui/react";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import { Outlet } from "react-router-dom";
import Home from "../Home/Home";
const Doc = () => {
  return (
    <div>
      <Box>
        <HStack>
          <LeftSidebar />
          <Home />
        </HStack>
      </Box>
    </div>
  );
};

export default Doc;
