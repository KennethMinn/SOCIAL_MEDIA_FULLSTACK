import { AppShell, Avatar, Burger, Flex, Group, Menu } from "@mantine/core";
import React from "react";
import { useNavigate } from "react-router-dom";
import { NavbarProps } from "../../../modules/auth/login/types";
import { useAuth } from "../../../hooks/auth/useAuth";
import { useLogout } from "../../../modules/auth/login/hooks/useLogout";

const NavbarHeader: React.FC<NavbarProps> = ({ isOpen, setIsOpen }) => {
  const navigate = useNavigate();
  const { user, setAuth } = useAuth();
  const { mutate: signOutUser } = useLogout();

  const signout = async () => {
    signOutUser();
    navigate("/auth/login");
  };

  return (
    <AppShell.Header>
      <Group h="100%" px="md" justify="space-between">
        <Flex align="center" gap="lg">
          <Burger
            opened={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle navigation"
            size="sm"
          />
          {/* <Image style={{ cursor: "pointer" }} height={50} src={logo} /> */}
        </Flex>
        <Flex align="center" gap="md">
          {/* <Menu position="bottom-end" offset={5}>
            <Menu.Target>
              <Avatar
                style={{ cursor: "pointer" }}
                src={user?.imageUrl}
                alt="it's me"
              />
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item onClick={signout}>Logout</Menu.Item>
            </Menu.Dropdown>
          </Menu> */}
        </Flex>
      </Group>
    </AppShell.Header>
  );
};

export default NavbarHeader;
