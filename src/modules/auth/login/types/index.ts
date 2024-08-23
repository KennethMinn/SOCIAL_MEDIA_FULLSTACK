import { Models } from "appwrite";
import { Dispatch, SetStateAction } from "react";
import { PostDocument } from "../../../feed/types";

export interface UserDocument extends Models.Document {
  name: string;
  email: string;
  profile: URL;
  profileID: string;
  likedPosts: PostDocument[];
}

export type NavbarProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};
