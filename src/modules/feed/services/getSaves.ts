import { Query } from "appwrite";
import { appwriteConfig, database } from "../../../lib/appwrite/config";

export const getSavedPosts = async (userId: string) => {
  return await database.listDocuments(
    appwriteConfig.databaseId,
    appwriteConfig.saveCollectionId,
    [Query.equal("user", userId)]
  );
};
