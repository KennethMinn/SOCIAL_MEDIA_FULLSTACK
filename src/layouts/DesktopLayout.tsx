import { AppShell, Grid } from "@mantine/core";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import { useViewportSize } from "@mantine/hooks";
import { SCREEN_SIZE } from "../utils/constants";

const DesktopLayout = () => {
  const [isOpen, setIsOpen] = useState(true);
  const { width } = useViewportSize();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: isOpen ? 250 : 80,
        breakpoint: "sm",
      }}
      padding="md"
    >
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <AppShell.Main pt={80}>
        <Grid>
          <Grid.Col span={{ sm: 12, md: 7, lg: 8 }}>
            <Outlet />
          </Grid.Col>
          <Grid.Col span={{ md: 5, lg: 4 }} hidden={width <= SCREEN_SIZE.md}>
            sdfsd
          </Grid.Col>
        </Grid>
      </AppShell.Main>
    </AppShell>
  );
};

export default DesktopLayout;
