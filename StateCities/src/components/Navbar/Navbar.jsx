import { Flex, Box, Container, Text } from "@chakra-ui/react";
import DarkModeToggle from "../darkMode/DarkModeToggle";
import { Outlet } from "react-router-dom";

import "./Navbar.css";
import Footer from "../Footer/Footer";
const Navbar = () => {
  return (
    <>
      <Container  maxW="container.xl" className="container">
        <Box className="navbar-wrapper">
          <Flex justifyContent="space-between" alignItems="center">
            <Text>سلام ما هر روز در حال توسعه این سرویس هستیم. پس در این مسیر کنار ما صبوری کنید</Text>

            <DarkModeToggle />
          </Flex>
        </Box>

        <Outlet />
        <Footer />
      </Container>
    </>
  );
};

export default Navbar;
