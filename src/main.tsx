import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "@mantine/core/styles.css";
import "@mantine/dropzone/styles.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createTheme, MantineProvider } from "@mantine/core";
import { Toaster } from "react-hot-toast";
import { SCREEN_SIZE } from "./utils/constants.ts";

const queryClient = new QueryClient({
  // defaultOptions: {
  //   queries: {
  //     staleTime: 0,
  //   },
  // },
});

const theme = createTheme({
  breakpoints: {
    xs: SCREEN_SIZE.xs + "px",
    sm: SCREEN_SIZE.sm + "px",
    md: SCREEN_SIZE.md + "px",
    lg: SCREEN_SIZE.lg + "px",
    xl: SCREEN_SIZE.xl + "px",
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <MantineProvider theme={theme}>
        <App />
        <Toaster />
      </MantineProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
