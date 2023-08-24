import { Box, Flex, HStack, Link, Text } from "@chakra-ui/react";
import {
  BalloonHeart,
  Github,
  Heart,
  Linkedin,
  TrainFreightFront,
} from "react-bootstrap-icons";
import { Outlet } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <Outlet />
      <Box className="footer-wrapper" p="4">
        <HStack justifyContent="space-between">
          <Box>
            این سرویس برای استفاده کاملا <strong>رایگان</strong> است
          </Box>
          <Text display="flex" alignItems="center">
            ساخته شده توسط <span className="iconsFooter">👬</span>با
            <span className="iconsFooter">❤️</span> برای شما
          </Text>
          <Flex columnGap={5} alignItems="center">
            <Link className="itemFooter" href="https://google.com" isExternal>
              <Github />
            </Link>
            <Link className="itemFooter" href="https://google.com" isExternal>
              <Linkedin />
            </Link>
          </Flex>
        </HStack>
      </Box>
    </>
  );
};

export default Footer;
