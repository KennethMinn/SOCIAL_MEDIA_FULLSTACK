import { AppShell, Avatar, Flex, Group, Menu } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { useLogout } from "../../../modules/auth/login/hooks/useLogout";
import { useGetCurrentUser } from "../../../modules/auth/login/hooks/useGetCurrentUser";
import UserProfile from "../../../modules/auth/profile/features/UserProfileForm";
import { useDisclosure } from "@mantine/hooks";

const NavbarHeader = () => {
  const navigate = useNavigate();
  const { data: user } = useGetCurrentUser();
  const { mutate: signOutUser } = useLogout();
  const [opened, { open, close }] = useDisclosure(false);

  const signout = async () => {
    signOutUser();
    navigate("/login");
  };

  return (
    <AppShell.Header>
      <Group h="100%" px="md" justify="space-between">
        <Flex align="center" gap="lg">
          {/* <Image style={{ cursor: "pointer" }} height={50} src={logo} /> */}
        </Flex>
        <Flex align="center" gap="md">
          <Menu position="bottom-end" offset={5}>
            <Menu.Target>
              <Avatar
                style={{ cursor: "pointer" }}
                src={user && user.profile.toString()}
                alt="it's me"
              />
            </Menu.Target>
            <UserProfile user={user} opened={opened} close={close} />
            <Menu.Dropdown>
              <Menu.Item onClick={open}>Profile</Menu.Item>
              <Menu.Divider />
              <Menu.Item onClick={signout}>Logout</Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Flex>
      </Group>
    </AppShell.Header>
  );
};

export default NavbarHeader;
