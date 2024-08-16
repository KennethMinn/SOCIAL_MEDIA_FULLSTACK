import { Card, Center, Stack, Text } from "@mantine/core";
import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
    <Card withBorder w={{ xs: 300, md: 400, lg: 400 }}>
      <Stack>
        <Center>
          <Text
            fw="bold"
            fz={{
              xs: 20,
              lg: 25,
            }}
          >
            Login Form
          </Text>
        </Center>
        <LoginForm />
      </Stack>
    </Card>
  );
};

export default Login;
