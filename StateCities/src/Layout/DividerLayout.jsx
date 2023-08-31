/* eslint-disable react/prop-types */
import { AbsoluteCenter, Box, Divider } from "@chakra-ui/react";

const DividerLayout = ({ subTitleSection, ids }) => {
  return (
    <Box
      className={`divider ${ids === "university" ? "uni" : ""}`}
      id={ids}
      position="relative"
      padding="10"
    >
      <Divider />
      <AbsoluteCenter>{subTitleSection}</AbsoluteCenter>
    </Box>
  );
};

export default DividerLayout;
