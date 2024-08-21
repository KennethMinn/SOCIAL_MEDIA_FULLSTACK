import { FC } from "react";
import { PostDocument } from "../types";
import {
  Avatar,
  Card,
  Flex,
  Group,
  Image,
  Menu,
  Stack,
  Text,
} from "@mantine/core";
import { IconBookmark, IconDots, IconHeart } from "@tabler/icons-react";
import { multiFormatDateString } from "../../../utils";
import { useNavigate } from "react-router-dom";

interface PostCardProps {
  post: PostDocument;
}

const PostCard: FC<PostCardProps> = ({ post }) => {
  const navigate = useNavigate();

  const navigateEdit = () => {
    navigate("/app/feed/edit-post", { state: post });
  };

  return (
    <Card radius="md" w={{ xs: 340, md: 300, lg: 380 }} withBorder>
      <Stack>
        <Group justify="space-between" align="center">
          <Group align="center">
            <Avatar src={post.author.profile.toString()} />
            <Flex direction="column" gap={0}>
              <Text fz={15}>{post.author.name}</Text>
              <Text fz={12} c="dark" opacity={0.7}>
                {multiFormatDateString(post.$createdAt)}
              </Text>
            </Flex>
          </Group>
          <Menu>
            <Menu.Target>
              <IconDots style={{ cursor: "pointer" }} />
            </Menu.Target>

            <Menu.Dropdown>
              <Menu.Item onClick={navigateEdit}>Edit</Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Group>
        <Flex direction="column" gap={0}>
          <Text truncate="end">{post.caption}</Text>
          <Group align="center" gap={3} opacity={0.7}>
            {post.tags.map((tag, i) => (
              <Text key={i} fz={13}>
                #{tag}
              </Text>
            ))}
          </Group>
        </Flex>
        <Image radius="md" src={post.image} />
        <Group align="center" justify="space-between">
          <IconHeart />
          <IconBookmark />
        </Group>
      </Stack>
    </Card>
  );
};

export default PostCard;
