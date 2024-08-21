import { Models } from "appwrite";
import { appwriteConfig, database } from "../../../lib/appwrite/config";
import {
  deleteFile,
  getFilePreview,
  uploadFile,
} from "../../../lib/appwrite/storage";
import { TPostFormSchema } from "../schemas";
import { PostDocument } from "../types";

export interface Payload extends TPostFormSchema {
  post: PostDocument;
  file: File | null;
}

export const updatePost = async (payload: Payload) => {
  let image;
  const storageId = appwriteConfig.postStorageId;

  if (!payload.file) {
    image = { image: payload.post.image, imageId: payload.post.imageId };
  } else {
    const uploadedFile = (await uploadFile(
      payload.file,
      storageId
    )) as Models.File;

    const fileUrl = getFilePreview(uploadedFile.$id, storageId);

    if (!fileUrl) await deleteFile(uploadedFile.$id, storageId);

    image = { image: fileUrl, imageId: uploadedFile.$id };

    await deleteFile(payload.post.imageId, storageId);
  }

  await database.updateDocument(
    appwriteConfig.databaseId,
    appwriteConfig.postCollectionId,
    payload.post.$id,
    {
      caption: payload.caption,
      tags: payload.tags,
      ...image,
    }
  );
};
