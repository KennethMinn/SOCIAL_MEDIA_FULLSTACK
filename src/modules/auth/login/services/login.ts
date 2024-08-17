import { TLoginSchema } from "./../schemas/index";
import { account } from "../../../../lib/appwrite/config";

export const login = async (payload: TLoginSchema) => {
  const session = await account.createEmailPasswordSession(
    payload.email,
    payload.password
  );
  return session;
};
