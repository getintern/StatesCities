import { useColorMode, Button } from "@chakra-ui/react";
const DarkModeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button onClick={toggleColorMode}>
      {colorMode === "light" ? (
        <i className="ki-duotone ki-sun">
          <i className="path1"></i>
          <i className="path2"></i>
          <i className="path3"></i>
          <i className="path4"></i>
          <i className="path5"></i>
          <i className="path6"></i>
          <i className="path7"></i>
          <i className="path8"></i>
          <i className="path9"></i>
        </i>
      ) : (
        <i className="ki-duotone ki-moon">
          <i className="path1"></i>
          <i className="path2"></i>
        </i>
      )}
    </Button>
  );
};

export default DarkModeToggle;
