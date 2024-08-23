import { Models } from "appwrite";
import { UserDocument } from "../../auth/login/types";

export interface PostDocument extends Models.Document {
  caption: string;
  tags: string[];
  image: URL;
  imageId: string;
  author: UserDocument;
  likes: UserDocument[];
}

export interface SaveDocument extends Models.Document {
  post: PostDocument;
  user: Document;
}
