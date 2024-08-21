import { Center, Stack } from "@mantine/core";
import CommonHeader from "../../../components/CommonHeader";
import PostCreateForm from "../components/PostCreateForm";

const PostCreate = () => {
  return (
    <Stack>
      <CommonHeader title="Create Post" />
      <Center>
        <PostCreateForm />
      </Center>
    </Stack>
  );
};

export default PostCreate;
