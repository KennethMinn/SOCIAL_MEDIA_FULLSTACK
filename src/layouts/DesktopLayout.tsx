import { AppShell } from "@mantine/core";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";

const DesktopLayout = () => {
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
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
};

export default DesktopLayout;
