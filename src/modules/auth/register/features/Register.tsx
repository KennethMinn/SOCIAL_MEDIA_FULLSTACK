import { Card, Center, Stack, Text } from "@mantine/core";
import { appwriteConfig } from "../../../../lib/appwrite/config";
import RegisterForm from "../components/RegisterForm";

const Register = () => {
  console.log(appwriteConfig);

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
            Register Form
          </Text>
        </Center>
        <RegisterForm />
      </Stack>
    </Card>
  );
};

export default Register;
