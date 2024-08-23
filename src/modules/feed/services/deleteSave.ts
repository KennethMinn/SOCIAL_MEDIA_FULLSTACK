import { appwriteConfig, database } from "../../../lib/appwrite/config";

export const deleteSave = async (id: string) => {
  await database.deleteDocument(
    appwriteConfig.databaseId,
    appwriteConfig.saveCollectionId,
    id
  );
};
