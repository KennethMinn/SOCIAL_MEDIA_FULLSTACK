import { appwriteConfig, database } from "../../../lib/appwrite/config";

export interface Payload {
  postId: string;
  likeArray: string[];
}

export const likePost = async (payload: Payload) => {
  await database.updateDocument(
    appwriteConfig.databaseId,
    appwriteConfig.postCollectionId,
    payload.postId,
    {
      likes: payload.likeArray,
    }
  );
};
