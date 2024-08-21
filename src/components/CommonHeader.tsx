import { Group } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import CommonTitle from "./CommonTitle";

interface CommonHeaderProps {
  title: string;
}

const CommonHeader: FC<CommonHeaderProps> = ({ title }) => {
  const navigate = useNavigate();

  return (
    <Group align="center">
      <IconArrowLeft
        size={22}
        onClick={() => navigate(-1)}
        style={{ cursor: "pointer" }}
      />
      <CommonTitle title={title} />
    </Group>
  );
};

export default CommonHeader;
