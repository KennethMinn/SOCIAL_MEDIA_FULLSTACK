import { AppShell, Box, NavLink, Space, Tooltip } from "@mantine/core";
import { useLocation, useNavigate } from "react-router-dom";
import React from "react";
import { navMenu } from "../../../configs/navMenus";

type NavbarMenuProps = {
  isOpen: boolean;
};

const NavbarMenu: React.FC<NavbarMenuProps> = ({ isOpen }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <AppShell.Navbar p="md" style={{ overflowY: "scroll" }}>
      {navMenu?.map((navMenu, i) => (
        <Box key={i}>
          {isOpen ? (
            <NavLink
              styles={{ label: { fontSize: "16px" } }}
              py={15}
              style={{ border: "1px solid #efeef0", borderRadius: "8px" }}
              onClick={() => navigate(navMenu.path)}
              label={navMenu.label}
              leftSection={navMenu.icon}
              active={pathname === navMenu.path}
            />
          ) : (
            <Tooltip
              label={navMenu.label}
              position="right"
              withArrow
              arrowSize={6}
              offset={{ mainAxis: 10, crossAxis: 0 }}
            >
              <NavLink
                py={0}
                h={50}
                style={{ border: "1px solid #efeef0", borderRadius: "8px" }}
                onClick={() => navigate(navMenu.path)}
                label={navMenu.label}
                leftSection={navMenu.icon}
                active={pathname === navMenu.path}
              />
            </Tooltip>
          )}

          <Space h="sm" />
        </Box>
      ))}
    </AppShell.Navbar>
  );
};

export default NavbarMenu;
