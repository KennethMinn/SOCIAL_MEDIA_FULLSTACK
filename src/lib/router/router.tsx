import { createBrowserRouter } from "react-router-dom";
import {
  LazyHome,
  LazyLoginPage,
  LazyRegisterPage,
} from "../../components/lazy/lazyPages";
import RootLayout from "../../layouts/RootLayout";

export const publicRoutes = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <LazyHome />,
      },
      {
        path: "login",
        element: <LazyLoginPage />,
      },
      {
        path: "register",
        element: <LazyRegisterPage />,
      },
    ],
  },
];

export const authRoutes = [];

export const router = createBrowserRouter([...publicRoutes, ...authRoutes]);
