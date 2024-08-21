import { Button } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { useLogout } from "./modules/auth/login/hooks/useLogout";
import { useAuth } from "./hooks/auth/useAuth";
import { useEffect } from "react";

const Home = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { mutate } = useLogout();

  const navigateLogin = () => {
    navigate("/login");
  };

  useEffect(() => {
    if (user) {
      navigate("/app/feed");
    }
  }, [user, navigate]);

  return (
    <>
      <button onClick={() => mutate()}>logout</button>
      <Button onClick={navigateLogin}>Login</Button>
    </>
  );
};

export default Home;
