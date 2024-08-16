import { Center } from "@mantine/core";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <Center h="100vh">
      <Outlet />
    </Center>
  );
};

export default RootLayout;
