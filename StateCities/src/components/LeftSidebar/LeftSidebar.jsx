import { Box, VStack, Container, Text, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const LeftSidebar = () => {
  return (
    <Box>
      <Container>
        <VStack >
          <Flex flexDir="column">
            <Text py={3}>شروع</Text>
            <Link className="linkOfOLeftSideBar">
              <i className="ki-duotone ki-abstract-2">
                <i className="path1"></i>
                <i className="path2"></i>
              </i>
              <span> adcahgdcadcakcd</span>
            </Link>
          </Flex>
          <Flex flexDir="column">
            <Text fontWeight="black" py={3}>
              استفاده
            </Text>
            <Link className="linkOfOLeftSideBar">
              <i className="ki-duotone ki-abstract-2">
                <i className="path1"></i>
                <i className="path2"></i>
              </i>
              <span> مراحال ابتدایی</span>
            </Link>
            <Link className="linkOfOLeftSideBar">
              <i className="ki-duotone ki-abstract-2">
                <i className="path1"></i>
                <i className="path2"></i>
              </i>
              <span> مراحل ثانویه</span>
            </Link>
            <Link className="linkOfOLeftSideBar">
              <i className="ki-duotone ki-abstract-2">
                <i className="path1"></i>
                <i className="path2"></i>
              </i>
              <span> مراحل ثالثا</span>
            </Link>
          </Flex>
          <Flex flexDir="column">
            <Text fontWeight="black" py={3}>
              کلا آخر
            </Text>
            <Link>
              <i className="ki-duotone ki-abstract-2">
                <i className="path1"></i>
                <i className="path2"></i>
              </i>
              <span> مراحال سسسسس</span>
            </Link>
            <Link>
              <i className="ki-duotone ki-abstract-2">
                <i className="path1"></i>
                <i className="path2"></i>
              </i>
              <span> مراحل صرصر</span>
            </Link>
            <Link>
              <i className="ki-duotone ki-abstract-2">
                <i className="path1"></i>
                <i className="path2"></i>
              </i>
              <span> مراحل ریصزص</span>
            </Link>
          </Flex>
        </VStack>
      </Container>
    </Box>
  );
};

export default LeftSidebar;
