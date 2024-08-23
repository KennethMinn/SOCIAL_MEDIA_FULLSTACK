import { Client, Account, Databases, Storage, Avatars } from "appwrite";

export const client = new Client();
export const account = new Account(client);
export const database = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);

export const appwriteConfig = {
  projectUrl: import.meta.env.VITE_APPWRITE_PROJECT_URL,
  projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
  databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
  profileStorageId: import.meta.env.VITE_APPWRITE_PROFILE_STORAGE_ID,
  postStorageId: import.meta.env.VITE_APPWRITE_POST_STORAGE_ID,
  userCollectionId: import.meta.env.VITE_APPWRITE_USER_COLLECTION_ID,
  postCollectionId: import.meta.env.VITE_APPWRITE_POST_COLLECTION_ID,
  saveCollectionId: import.meta.env.VITE_APPWRITE_SAVE_COLLECTION_ID,
};

client
  .setEndpoint(appwriteConfig.projectUrl)
  .setProject(appwriteConfig.projectId);
