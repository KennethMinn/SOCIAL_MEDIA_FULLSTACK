import {
  account,
  appwriteConfig,
  database,
} from "../../../../lib/appwrite/config";
import { UserDocument } from "../types";

export const getCurrentUser = async () => {
  const currentAccount = await account.get();

  const currentUser = await database.getDocument<UserDocument>(
    appwriteConfig.databaseId,
    appwriteConfig.userCollectionId,
    currentAccount.$id
  );

  return currentUser;
};
