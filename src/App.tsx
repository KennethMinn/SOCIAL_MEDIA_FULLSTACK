import { RouterProvider } from "react-router-dom";
import "./App.css";
import { useRouter } from "./lib/router/router";

const App = () => {
  const router = useRouter();
  return <RouterProvider router={router} />;
};

export default App;
