import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  initialColorMode: "dark",
  direction: "rtl",
  fonts: {
    heading: "pinar",
    body: "IRANSans",
  },
});

export default theme;
