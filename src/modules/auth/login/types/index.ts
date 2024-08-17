import { Models } from "appwrite";
import { Dispatch, SetStateAction } from "react";

export interface UserDocument extends Models.Document {
  name: string;
  email: string;
  profile: URL;
  profileID: string;
}

export type NavbarProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};
