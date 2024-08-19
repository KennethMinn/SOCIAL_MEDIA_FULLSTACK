import { ID } from "appwrite";
import { storage } from "./config";

export const uploadFile = async (file: File, storageId: string) => {
  try {
    const uploadedFile = await storage.createFile(storageId, ID.unique(), file);
    return uploadedFile;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export function getFilePreview(fileId: string, storageId: string) {
  try {
    const fileUrl = storage.getFilePreview(storageId, fileId, 400, 400);

    if (!fileUrl) throw Error;

    return fileUrl;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function deleteFile(fileId: string, storageId: string) {
  try {
    await storage.deleteFile(storageId, fileId);

    return { status: "ok" };
  } catch (error) {
    console.log(error);
    return error;
  }
}
