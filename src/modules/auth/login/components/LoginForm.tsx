import { Button, PasswordInput, Stack, Text, TextInput } from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { useNavigate } from "react-router-dom";
import { loginSchema, TLoginSchema } from "../schemas";

const LoginForm = () => {
  const navigate = useNavigate();

  const navigateRegister = () => {
    navigate("/register");
  };

  const form = useForm<TLoginSchema>({
    initialValues: {
      email: "",
      password: "",
    },
    validate: zodResolver(loginSchema),
  });

  const onSubmit = (values: TLoginSchema) => {
    console.log(values);
  };

  return (
    <form onSubmit={form.onSubmit(onSubmit)}>
      <Stack>
        <TextInput
          {...form.getInputProps("email")}
          label="Email"
          placeholder="Enter email"
        />
        <PasswordInput
          {...form.getInputProps("password")}
          label="Password"
          placeholder="Enter password"
        />
        <Stack gap={2}>
          <Text
            onClick={navigateRegister}
            style={{ cursor: "pointer" }}
            c="blue"
          >
            register
          </Text>
          <Button type="submit">Login</Button>
        </Stack>
      </Stack>
    </form>
  );
};

export default LoginForm;
