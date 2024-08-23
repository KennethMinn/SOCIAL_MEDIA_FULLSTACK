import { Query } from "appwrite";
import { appwriteConfig, database } from "../../../lib/appwrite/config";
import { SaveDocument } from "../types";

export const getSavedRecords = async (userId: string) => {
  return await database.listDocuments<SaveDocument>(
    appwriteConfig.databaseId,
    appwriteConfig.saveCollectionId,
    [Query.equal("user", userId)]
  );
};
