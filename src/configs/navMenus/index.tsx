import { IconHome, IconSquareRoundedPlus } from "@tabler/icons-react";

export const navMenu = [
  {
    label: "Feed",
    path: "/app/feed",
    icon: <IconHome size={25} style={{ cursor: "pointer" }} />,
  },
  {
    label: "Create Post",
    path: "/app/feed/create-post",
    icon: <IconSquareRoundedPlus size={25} style={{ cursor: "pointer" }} />,
  },
];
