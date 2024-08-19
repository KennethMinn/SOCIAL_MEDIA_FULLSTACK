import { Avatar, Flex, Group, Menu } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { useLogout } from "../../../modules/auth/login/hooks/useLogout";
import { useGetCurrentUser } from "../../../modules/auth/login/hooks/useGetCurrentUser";

const MobileHeader = () => {
  const navigate = useNavigate();
  const { data: user } = useGetCurrentUser();
  const { mutate: signOutUser } = useLogout();

  console.log(user);

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
          <Menu.Dropdown>
            <Menu.Item>Profile</Menu.Item>
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
