import { Center, Stack } from "@mantine/core";
import CommonHeader from "../../../components/CommonHeader";
import { useLocation } from "react-router-dom";
import PostForm from "../components/PostForm";

const PostCreate = () => {
  const { state: post } = useLocation();
  return (
    <Stack>
      <CommonHeader title={post ? "Edit Post" : "Create Post"} />
      <Center>
        <PostForm post={post} />
      </Center>
    </Stack>
  );
};

export default PostCreate;
