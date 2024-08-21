import { ID, Models } from "appwrite";
import { appwriteConfig, database } from "../../../lib/appwrite/config";
import {
  deleteFile,
  getFilePreview,
  uploadFile,
} from "../../../lib/appwrite/storage";
import { TPostFormSchema } from "../schemas";

export interface Payload extends TPostFormSchema {
  file: File | null;
  authorId: string;
}

export const createPost = async (payload: Payload) => {
  let image;

  const storageId = appwriteConfig.postStorageId;

  if (!payload.file) {
    image = { image: null, imageId: null };
  } else {
    const uploadedFile = (await uploadFile(
      payload.file,
      storageId
    )) as Models.File;

    const fileUrl = getFilePreview(uploadedFile.$id, storageId);

    if (!fileUrl) await deleteFile(uploadedFile.$id, storageId);

    image = { image: fileUrl, imageId: uploadedFile.$id };
  }

  await database.createDocument(
    appwriteConfig.databaseId,
    appwriteConfig.postCollectionId,
    ID.unique(),
    {
      author: payload.authorId,
      caption: payload.caption,
      tags: payload.tags,
      ...image,
    }
  );
};
