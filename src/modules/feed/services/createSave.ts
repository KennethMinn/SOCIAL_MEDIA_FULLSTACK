import { ID } from "appwrite";
import { appwriteConfig, database } from "../../../lib/appwrite/config";

export interface Payload {
  userId: string;
  postId: string;
}

export const createSave = async (payload: Payload) => {
  await database.createDocument(
    appwriteConfig.databaseId,
    appwriteConfig.saveCollectionId,
    ID.unique(),
    {
      user: payload.userId,
      post: payload.postId,
    }
  );
};
