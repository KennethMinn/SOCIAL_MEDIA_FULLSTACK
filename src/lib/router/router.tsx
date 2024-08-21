import { createBrowserRouter } from "react-router-dom";
import {
  LazyFeedListing,
  LazyHome,
  LazyLoginPage,
  LazyPostCreatePage,
  LazyRegisterPage,
} from "../../components/lazy/lazyPages";
import RootLayout from "../../layouts/RootLayout";
import DesktopLayout from "../../layouts/DesktopLayout";
import AuthMiddleware from "../../middlewares/AuthMiddleware";
import { useViewportSize } from "@mantine/hooks";
import { ReactNode, useEffect, useState } from "react";
import MobileLayout from "../../layouts/MobileLayout";
import { SCREEN_SIZE } from "../../utils/constants";

export const useRouter = () => {
  const { width } = useViewportSize();
  const [currentLayout, setCurrentLayout] = useState<ReactNode | null>(null);

  useEffect(() => {
    if (width <= SCREEN_SIZE.sm) {
      setCurrentLayout(<MobileLayout />);
    } else {
      setCurrentLayout(<DesktopLayout />);
    }
  }, [width]);

  const publicRoutes = [
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

  const authRoutes = [
    {
      path: "/app",
      element: <AuthMiddleware>{currentLayout}</AuthMiddleware>,
      children: [
        {
          path: "feed",
          element: <LazyFeedListing />,
        },
        {
          path: "feed/create-post",
          element: <LazyPostCreatePage />,
        },
      ],
    },
  ];

  const router = createBrowserRouter([...publicRoutes, ...authRoutes]);
  return router;
};
