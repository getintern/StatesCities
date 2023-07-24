import { Box, VStack, Container, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const LeftSidebar = () => {
  return (
    <Box>
      <Container>
        <VStack p={10}>
          <Heading>سلام </Heading>
          <Link>سلام تست؟</Link>
          <Link>
            <i className="ki-duotone ki-abstract-2">
              <i className="path1"></i>
              <i className="path2"></i>
            </i>
            <span> 2</span>
          </Link>
          <Link>3</Link>
          <Link>4</Link>
          <Link>5</Link>
          <Link>6</Link>
          <Link>7</Link>
          <Link>8</Link>
          <Link>9</Link>
          <Link>10</Link>
        </VStack>
      </Container>
    </Box>
  );
};

export default LeftSidebar;
