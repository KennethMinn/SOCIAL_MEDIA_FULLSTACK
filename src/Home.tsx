import { Button } from "@mantine/core";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const navigateLogin = () => {
    navigate("/login");
  };

  return <Button onClick={navigateLogin}>Home</Button>;
};

export default Home;
