import { Button, PasswordInput, Stack, Text, TextInput } from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { useNavigate } from "react-router-dom";
import { registerSchema, TRegisterSchema } from "../schemas";
import { useRegister } from "../hooks/useRegister";
import toast from "react-hot-toast";

const RegisterForm = () => {
  const { mutate: register, isPending } = useRegister();
  const navigate = useNavigate();

  const navigateLogin = () => {
    navigate("/login");
  };

  const form = useForm<TRegisterSchema>({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validate: zodResolver(registerSchema),
  });

  const onSubmit = (values: TRegisterSchema) => {
    register(values, {
      onSuccess: () => {
        toast.success("User created successfully");
        form.reset();
      },
      onError: () => {
        toast.error("Something went wrong");
      },
    });
  };

  return (
    <form onSubmit={form.onSubmit(onSubmit)}>
      <Stack>
        <TextInput
          {...form.getInputProps("name")}
          label="Name"
          placeholder="Enter name"
        />
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
          <Text onClick={navigateLogin} style={{ cursor: "pointer" }} c="blue">
            Login
          </Text>
          <Button loading={isPending} disabled={isPending} type="submit">
            Register
          </Button>
        </Stack>
      </Stack>
    </form>
  );
};

export default RegisterForm;
