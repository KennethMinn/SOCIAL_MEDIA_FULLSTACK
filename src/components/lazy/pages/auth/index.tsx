import { lazy } from "react";
import LazyLoad from "../../LazyLoad";

const RegisterPage = lazy(
  () => import("../../../../modules/auth/register/pages/RegisterPage")
);

const LoginPage = lazy(
  () => import("../../../../modules/auth/login/pages/LoginPage")
);

export const LazyRegisterPage = () => (
  <LazyLoad>
    <RegisterPage />
  </LazyLoad>
);

export const LazyLoginPage = () => (
  <LazyLoad>
    <LoginPage />
  </LazyLoad>
);
