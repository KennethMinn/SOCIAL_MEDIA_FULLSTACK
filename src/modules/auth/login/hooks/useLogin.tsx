import { useMutation } from "@tanstack/react-query";
import { login } from "../services/login";
import { getCurrentUser } from "../services/getCurrentUser";
import { useAuth } from "../../../../hooks/auth/useAuth";

export const useLogin = () => {
  const { setAuth } = useAuth();

  return useMutation({
    mutationFn: login,
    onSuccess: async () => {
      const currentUser = await getCurrentUser();
      const payload = {
        $id: currentUser.$id,
        name: currentUser.name,
        email: currentUser.email,
      };
      setAuth(payload);
    },
  });
};
