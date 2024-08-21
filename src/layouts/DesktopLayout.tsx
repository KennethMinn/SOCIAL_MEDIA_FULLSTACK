import { AppShell, Box, Grid } from "@mantine/core";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import { useViewportSize } from "@mantine/hooks";
import { SCREEN_SIZE } from "../utils/constants";

const DesktopLayout = () => {
  const { width } = useViewportSize();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 250,
        breakpoint: "sm",
      }}
      padding="md"
    >
      <Navbar />
      <AppShell.Main pt={80}>
        <Grid>
          <Grid.Col span={{ sm: 12, md: 9 }}>
            <Outlet />
          </Grid.Col>
          <Grid.Col span={{ md: 3 }} hidden={width <= SCREEN_SIZE.md}>
            <Box style={{ position: "fixed" }}>sfad</Box>
          </Grid.Col>
        </Grid>
      </AppShell.Main>
    </AppShell>
  );
};

export default DesktopLayout;
