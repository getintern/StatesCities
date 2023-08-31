import { useColorMode, Button } from "@chakra-ui/react";
import { Sunrise, Sunset } from "react-bootstrap-icons";

const DarkModeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button className="btnDarkMode" onClick={toggleColorMode}>
      {colorMode === "light" ? <Sunset /> : <Sunrise />}
    </Button>
  );
};

export default DarkModeToggle;
