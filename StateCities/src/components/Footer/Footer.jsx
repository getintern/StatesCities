import { Box, HStack, Link, Button, Text } from "@chakra-ui/react";
import { CupHot, Github } from "react-bootstrap-icons";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <Button
        className="buyMeCoffeBtn"
        display="block"
        colorScheme="teal"
        variant="outline"
      >
        <Link className="buyMeCoffee" href="https://daramet.com/salararjmand">
          یک <CupHot className="iconCoffee" /> مهمانم کن
        </Link>
      </Button>
      <Box className="footer-wrapper" p="4">
        <HStack justifyContent="space-between">
          <Text className="textFooter">V1.0.1</Text>
          <Text display="flex" alignItems="center">
            ساخته شده با
            <span className="iconsFooter"> ❤️ </span> برای شما
          </Text>
          <Link
            className="itemFooter"
            href="https://github.com/getintern/StatesCities"
          >
            <Github />
          </Link>
        </HStack>
      </Box>
    </>
  );
};

export default Footer;
