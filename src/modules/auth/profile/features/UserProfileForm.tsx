import {
  Avatar,
  Button,
  FileButton,
  Modal,
  Stack,
  TextInput,
} from "@mantine/core";
import { FC, useEffect, useState } from "react";
import { UserDocument } from "../../login/types";
import { IconCloudUpload } from "@tabler/icons-react";
import { useForm, zodResolver } from "@mantine/form";
import { TUserProfileSchema, userProfileSchema } from "../schemas";
import { useUpdateUserProfile } from "../hooks/useUpdateUserProfile";
import toast from "react-hot-toast";

interface UserProfileProp {
  opened: boolean;
  close: () => void;
  user: UserDocument | undefined;
}

const UserProfile: FC<UserProfileProp> = ({ opened, close, user }) => {
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const { mutate: updateUserProfile, isPending } = useUpdateUserProfile();
  const form = useForm<TUserProfileSchema>({
    mode: "uncontrolled",
    initialValues: {
      name: "",
    },
    validate: zodResolver(userProfileSchema),
  });

  useEffect(() => {
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setPreviewUrl(objectUrl);

      return () => URL.revokeObjectURL(objectUrl);
    }
  }, [file]);

  useEffect(() => {
    if (user) {
      form.setFieldValue("name", user.name);
    }
  }, [user]);

  const onSubmit = (values: TUserProfileSchema) => {
    if (user) {
      const payload = { user: user, data: { ...values, profile: file } };
      updateUserProfile(payload, {
        onSuccess: () => {
          toast.success("User updated Sucessfully");
          form.reset();
          close();
        },
        onError: () => {
          toast.error("Something went wrong");
        },
      });
    }
  };

  return (
    <Modal opened={opened} onClose={close} title="User Profile">
      <form onSubmit={form.onSubmit(onSubmit)}>
        <Stack>
          <Avatar
            w={100}
            h={100}
            src={previewUrl ?? user?.profile.toString()}
          />
          <FileButton
            onChange={(files) => setFile(files[0])}
            accept="image/png,image/jpeg"
            multiple
          >
            {(props) => (
              <Button leftSection={<IconCloudUpload />} w={180} {...props}>
                Upload image
              </Button>
            )}
          </FileButton>
          <TextInput
            key={form.key("name")}
            {...form.getInputProps("name")}
            label="Name"
            placeholder="Enter name"
          />
          <Button loading={isPending} disabled={isPending} type="submit">
            Submit
          </Button>
        </Stack>
      </form>
    </Modal>
  );
};

export default UserProfile;
