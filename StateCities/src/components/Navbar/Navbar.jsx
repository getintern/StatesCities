import { Box, HStack, Text } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import DarkModeToggle from "../darkMode/DarkModeToggle";

const Navbar = () => {
  return (
    <>
      <Box p="4" bg="blackAlpha.400" backdropFilter="auto" backdropBlur="2px">
        <HStack justifyContent="space-between">
          <Text>logo</Text>
          <DarkModeToggle />
        </HStack>
      </Box>
      <Outlet />
    </>
  );
};

export default Navbar;
