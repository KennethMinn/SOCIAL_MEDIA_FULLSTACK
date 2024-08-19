import { Outlet } from "react-router-dom";
import MobileHeader from "../components/navbar/components/MobileHeader";
import { Stack } from "@mantine/core";

const MobileLayout = () => {
  return (
    <Stack>
      <MobileHeader />
      <Outlet />
    </Stack>
  );
};

export default MobileLayout;
