import { Text, TextProps } from "@mantine/core";
import { FC } from "react";

interface CommonTitleProps extends TextProps {
  title: string;
}

const CommonTitle: FC<CommonTitleProps> = ({ title }) => {
  return (
    <Text fz={22} fw={500}>
      {title}
    </Text>
  );
};

export default CommonTitle;
