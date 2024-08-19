import { Button } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { useGetCurrentUser } from "./modules/auth/login/hooks/useGetCurrentUser";
import { useLogout } from "./modules/auth/login/hooks/useLogout";

const Home = () => {
  const navigate = useNavigate();
  const { data } = useGetCurrentUser();
  const { mutate } = useLogout();
  console.log(data);

  const navigateLogin = () => {
    navigate("/login");
  };

  return (
    <>
      <button onClick={() => mutate()}>logout</button>
      <Button onClick={navigateLogin}>Login</Button>
    </>
  );
};

export default Home;
