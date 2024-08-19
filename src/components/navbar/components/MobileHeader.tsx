import { Avatar, Flex, Group, Menu } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { useLogout } from "../../../modules/auth/login/hooks/useLogout";
import { useGetCurrentUser } from "../../../modules/auth/login/hooks/useGetCurrentUser";
import { useDisclosure } from "@mantine/hooks";
import UserProfile from "../../../modules/auth/profile/features/UserProfileForm";

const MobileHeader = () => {
  const navigate = useNavigate();
  const { data: user } = useGetCurrentUser();
  const { mutate: signOutUser } = useLogout();
  const [opened, { open, close }] = useDisclosure(false);

  const signout = async () => {
    signOutUser();
    navigate("/login");
  };

  return (
    <Group
      h="100%"
      p="sm"
      justify="space-between"
      style={{ borderBottom: "1px solid rgba(0, 0, 0, 0.3)" }}
    >
      <Flex align="center" gap="lg">
        Logo
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
  );
};

export default MobileHeader;
1;
