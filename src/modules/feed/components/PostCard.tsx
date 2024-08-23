import { FC, useEffect, useState } from "react";
import { PostDocument } from "../types";
import {
  Avatar,
  Card,
  Flex,
  Group,
  Image,
  Loader,
  Menu,
  Stack,
  Text,
} from "@mantine/core";
import {
  IconBookmark,
  IconBookmarkFilled,
  IconDots,
  IconHeart,
  IconHeartFilled,
} from "@tabler/icons-react";
import { checkIsLiked, multiFormatDateString } from "../../../utils";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks/auth/useAuth";
import { useLikePost } from "../hooks/useLikePost";
import { useCreateSave } from "../hooks/useCreateSave";
import { useDeleteSave } from "../hooks/useDeleteSave";
import { useGetSavedRecords } from "../hooks/useGetSavedRecords";

interface PostCardProps {
  post: PostDocument;
}

const PostCard: FC<PostCardProps> = ({ post }) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const likes = post.likes.map((userDoc) => userDoc.$id); //['userId',...]
  const [likeArray, setLikeArray] = useState(likes);
  const [isSaved, setIsSaved] = useState(false);

  const { data: savedRcords } = useGetSavedRecords();
  const { mutate: savePost, isPending: isSaving } = useCreateSave();
  const { mutate: deleteSave, isPending: isDeletingSave } = useDeleteSave();
  const { mutate: likePost, isPending: isLiking } = useLikePost();

  const saveRecord = savedRcords?.documents.find(
    (save) => save.post.$id === post.$id
  );

  const navigateEdit = () => {
    navigate("/app/feed/edit-post", { state: post });
  };

  const onLike = () => {
    let newLikes = [...likeArray];
    if (user) {
      const hasLiked = checkIsLiked(newLikes, user?.$id);
      if (hasLiked) {
        newLikes = likeArray.filter((userId) => userId !== user.$id);
      } else {
        newLikes.push(user.$id);
      }
    }
    setLikeArray(newLikes); //use newLikes cuz likeArray is not updated in this func
    likePost({ likeArray: newLikes, postId: post.$id });
  };

  const onSave = () => {
    if (isSaved && saveRecord) {
      deleteSave(saveRecord?.$id);
    } else {
      if (user) {
        savePost({ userId: user.$id, postId: post.$id });
      }
    }
  };

  useEffect(() => {
    if (saveRecord) {
      setIsSaved(true);
    } else {
      setIsSaved(false);
    }
  }, [saveRecord]);

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
          {isLiking ? (
            <Loader size={20} color="grey" />
          ) : user && checkIsLiked(likeArray, user?.$id) ? (
            <Group gap={5}>
              <IconHeartFilled
                color="red"
                onClick={onLike}
                style={{ cursor: "pointer" }}
              />
              <Text>{likeArray.length}</Text>
            </Group>
          ) : (
            <Group gap={5}>
              <IconHeart onClick={onLike} style={{ cursor: "pointer" }} />
              <Text>{likeArray.length}</Text>
            </Group>
          )}

          {isSaving || isDeletingSave ? (
            <Loader size={20} color="grey" />
          ) : isSaved ? (
            <IconBookmarkFilled
              onClick={onSave}
              style={{ cursor: "pointer" }}
              color="blue"
            />
          ) : (
            <IconBookmark onClick={onSave} style={{ cursor: "pointer" }} />
          )}
        </Group>
      </Stack>
    </Card>
  );
};

export default PostCard;
