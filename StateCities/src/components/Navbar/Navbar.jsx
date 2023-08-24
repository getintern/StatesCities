import { Box, Container, HStack, Image } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import logo from "../../assets/image/logoipsum-222.png";
import DarkModeToggle from "../darkMode/DarkModeToggle";
import "./Navbar.css";

const Navbar = () => {
  return (
    <Container maxW="8xl" className="container" p={0}>
      <Box className="navbar-wrapper" p="4">
        <HStack justifyContent="space-between">
          <Image src={logo} />
          <DarkModeToggle />
        </HStack>
      </Box>
      <Outlet />
    </Container>
  );
};

export default Navbar;
