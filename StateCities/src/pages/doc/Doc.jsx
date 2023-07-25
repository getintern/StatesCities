import { Box, SimpleGrid, Grid, GridItem } from "@chakra-ui/react";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import { Outlet } from "react-router-dom";
import Home from "../Home/Home";
const Doc = () => {
  return (
    <div>
      <Box>
        <SimpleGrid columns={2} p={10} alignItems={"flex-start"}></SimpleGrid>
      </Box>
      <Grid templateColumns="repeat(6, 1fr)" gap={4}>
        <GridItem colSpan={1}>
          <LeftSidebar />
        </GridItem>

        <GridItem colSpan={4}>
          <Home />
        </GridItem>
        <GridItem colSpan={1} bg="blackAlpha.600">
          salam test
        </GridItem>
      </Grid>
    </div>
  );
};

export default Doc;
