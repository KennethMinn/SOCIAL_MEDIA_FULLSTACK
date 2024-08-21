import { Models } from "appwrite";
import { appwriteConfig, database } from "../../../../lib/appwrite/config";
import {
  deleteFile,
  getFilePreview,
  uploadFile,
} from "../../../../lib/appwrite/storage";
import { TUserProfileSchema } from "../schemas";
import { UserDocument } from "../../login/types";

export interface Payload {
  user: UserDocument;
  data: TUserProfileSchema & { profile: File | null };
}

const storageId = appwriteConfig.profileStorageId;

export const updateUserProfile = async (payload: Payload) => {
  let image;
  const user = payload.user;

  const profile = payload.data.profile;
  if (profile) {
    const uploadedFile = (await uploadFile(profile, storageId)) as Models.File;
    const fileUrl = getFilePreview(uploadedFile.$id, storageId);

    if (!fileUrl) await deleteFile(uploadedFile.$id, storageId);

    image = { profile: fileUrl, profileID: uploadedFile.$id };

    //delete previous profileId
    if (user.profileID) {
      await deleteFile(user.profileID, storageId);
    }
  } else {
    image = {
      profile: user.profile,
      profileID: user.profileID,
    };
  }

  const data = { ...payload.data, ...image };

  await database.updateDocument(
    appwriteConfig.databaseId,
    appwriteConfig.userCollectionId,
    user.$id,
    data
  );
};
