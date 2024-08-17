import { useMutation } from "@tanstack/react-query";
import { logout } from "../services/logout";
import { useAuth } from "../../../../hooks/auth/useAuth";

export const useLogout = () => {
  const { setAuth } = useAuth();

  return useMutation({
    mutationFn: logout,
    onSuccess: () => {
      setAuth(null);
    },
  });
};
