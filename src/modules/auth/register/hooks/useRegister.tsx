import { useMutation } from "@tanstack/react-query";
import { register } from "../services/register";

export const useRegister = () =>
  useMutation({
    mutationFn: register,
  });
