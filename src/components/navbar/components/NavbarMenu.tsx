import { AppShell, Box, NavLink, Space } from "@mantine/core";
import { useLocation, useNavigate } from "react-router-dom";
import { navMenu } from "../../../configs/navMenus";

const NavbarMenu = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <AppShell.Navbar p="md" style={{ overflowY: "scroll" }}>
      {navMenu?.map((navMenu, i) => (
        <Box key={i}>
          <NavLink
            styles={{ label: { fontSize: "16px" } }}
            py={15}
            style={{ border: "1px solid #efeef0", borderRadius: "8px" }}
            onClick={() => navigate(navMenu.path)}
            label={navMenu.label}
            leftSection={navMenu.icon}
            active={pathname === navMenu.path}
          />

          <Space h="sm" />
        </Box>
      ))}
    </AppShell.Navbar>
  );
};

export default NavbarMenu;
