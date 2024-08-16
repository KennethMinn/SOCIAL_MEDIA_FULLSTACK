import { ID } from "appwrite";
import {
  account,
  appwriteConfig,
  avatars,
  database,
} from "../../../../lib/appwrite/config";
import { TRegisterSchema } from "../schemas";

export const register = async (payload: TRegisterSchema) => {
  const newAccount = await account.create(
    ID.unique(),
    payload.email,
    payload.password,
    payload.name
  );

  const profile = avatars.getInitials(newAccount.name);

  await database.createDocument(
    appwriteConfig.databaseId,
    appwriteConfig.userCollectionId,
    newAccount.$id,
    {
      name: newAccount.name,
      email: newAccount.email,
      profile,
    }
  );
};
