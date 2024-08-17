import { account } from "../../../../lib/appwrite/config";

export const logout = async () => {
  await account.deleteSession("current");
};
