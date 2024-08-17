import { FC, ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/auth/useAuth";

interface AuthMiddlewareProp {
  children: ReactNode;
}

const AuthMiddleware: FC<AuthMiddlewareProp> = ({ children }) => {
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    const cookieFallback = localStorage.getItem("cookieFallback");

    if (
      !user ||
      cookieFallback === "[]" ||
      cookieFallback === null ||
      cookieFallback === undefined
    ) {
      navigate("/login");
    }
  }, [navigate, user]);

  return children;
};

export default AuthMiddleware;
