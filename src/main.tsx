import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "@mantine/core/styles.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createTheme, MantineProvider } from "@mantine/core";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient({
  // defaultOptions: {
  //   queries: {
  //     staleTime: 0,
  //   },
  // },
});

const theme = createTheme({
  breakpoints: {
    xs: "300px",
    sm: "768px",
    md: "992px",
    lg: "1200px",
    xl: "1408px",
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
