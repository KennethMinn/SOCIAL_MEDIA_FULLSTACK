import { Box, Flex } from "@mantine/core";
import { navMenu } from "../configs/navMenus";
import { useNavigate } from "react-router-dom";

const MobileFooter = () => {
  const navigate = useNavigate();

  const navigateRoute = (path: string) => {
    navigate(path);
  };
  return (
    <Flex
      w="100%"
      py={13}
      style={{ borderTop: "1px solid rgba(0, 0, 0, 0.5)" }}
      bg="white"
      variant="light"
      justify="space-around"
      align="center"
    >
      {navMenu.map((item, i) => (
        <Box onClick={() => navigateRoute(item.path)} key={i}>
          {item.icon}
        </Box>
      ))}
    </Flex>
  );
};

export default MobileFooter;
