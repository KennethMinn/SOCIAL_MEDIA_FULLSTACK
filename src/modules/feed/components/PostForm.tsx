import {
  Box,
  Button,
  Image,
  MultiSelect,
  Stack,
  TextInput,
  Transition,
} from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { dummyTags, SCREEN_SIZE } from "../../../utils/constants";
import { FC, useEffect, useState } from "react";
import MyDropZone from "../../../components/MyDropZone";
import { useHover, useViewportSize } from "@mantine/hooks";
import { useCreatePost } from "../hooks/useCreatePost";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks/auth/useAuth";
import { PostDocument } from "../types";
import { postFormSchema, TPostFormSchema } from "../schemas";
import { useUpdatePost } from "../hooks/useUpdatePost";

interface PostFormProps {
  post: PostDocument;
}

const PostForm: FC<PostFormProps> = ({ post }) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { hovered, ref } = useHover();
  const { width } = useViewportSize();
  const [image, setImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<
    string | ArrayBuffer | URL | null
  >(post?.image ?? null);
  const { mutate: createPost, isPending: isCreating } = useCreatePost();
  const { mutate: updatePost, isPending: isUpdating } = useUpdatePost();

  const form = useForm<TPostFormSchema>({
    initialValues: {
      caption: post ? post.caption : "",
      tags: post ? post.tags : [],
    },
    validate: zodResolver(postFormSchema),
  });

  const onDrop = (files: File[]) => {
    const file = files[0];
    if (file) {
      setImage(file);
    }
  };

  const onSubmit = (values: TPostFormSchema) => {
    if (user) {
      const data = { ...values, file: image, authorId: user.$id };
      createPost(data, {
        onSuccess: () => {
          toast.success("Post created successfully");
          form.reset();
          navigate("/app/feed");
        },
        onError: () => {
          toast.error("Something went wrong");
        },
      });
    }
  };

  const onEdit = (values: TPostFormSchema) => {
    const data = { ...values, file: image, post };
    updatePost(data, {
      onSuccess: () => {
        toast.success("Post updated successfully");
        form.reset();
        navigate("/app/feed");
      },
      onError: () => {
        toast.error("Something went wrong");
      },
    });
  };

  useEffect(() => {
    if (image) {
      const objectUrl = URL.createObjectURL(image);
      setPreviewUrl(objectUrl);

      return () => URL.revokeObjectURL(objectUrl);
    }
  }, [image]);

  return (
    <form onSubmit={form.onSubmit(post ? onEdit : onSubmit)}>
      <Stack w={{ md: 500 }}>
        <TextInput
          label="Caption"
          placeholder="Say something..."
          {...form.getInputProps("caption")}
        />
        <MultiSelect
          {...form.getInputProps("tags")}
          label="Tags"
          placeholder="Pick tags"
          data={dummyTags}
          searchable
          nothingFoundMessage="Nothing found..."
        />
        {width <= SCREEN_SIZE.sm ? (
          <Box style={{ position: "relative" }}>
            <MyDropZone onDrop={onDrop} id="drop-zone" radius={10} />
            {previewUrl && (
              <Image
                onClick={() => document.getElementById("drop-zone")?.click()}
                w="90%"
                h="90%"
                style={{
                  position: "absolute",
                  left: "5%",
                  top: "5%",
                  cursor: "pointer",
                }}
                radius={10}
                src={previewUrl}
              />
            )}
          </Box>
        ) : (
          <Box ref={ref} style={{ position: "relative" }}>
            <MyDropZone onDrop={onDrop} h={400} radius={10} />
            {previewUrl && (
              <Transition
                mounted={!hovered}
                transition="fade"
                duration={300}
                timingFunction="ease"
              >
                {(styles) => (
                  <Image
                    w="90%"
                    h="90%"
                    style={{
                      ...styles,
                      position: "absolute",
                      left: "5%",
                      top: "5%",
                      cursor: "pointer",
                    }}
                    radius={10}
                    src={previewUrl}
                  />
                )}
              </Transition>
            )}
          </Box>
        )}

        {post ? (
          <Button loading={isUpdating} disabled={isUpdating} type="submit">
            Edit Post
          </Button>
        ) : (
          <Button loading={isCreating} disabled={isCreating} type="submit">
            Create Post
          </Button>
        )}
      </Stack>
    </form>
  );
};

export default PostForm;
