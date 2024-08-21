import { Query } from "appwrite";
import { appwriteConfig, database } from "../../../lib/appwrite/config";
import { PostDocument } from "../types";

export const getInfinitePosts = async ({
  pageParam,
}: {
  pageParam: string | null;
}) => {
  const queries = [Query.orderDesc("$createdAt"), Query.limit(6)];

  if (pageParam) {
    queries.push(Query.cursorAfter(pageParam)); // pageParam - the id of the last document of previous page
  }

  const posts = await database.listDocuments<PostDocument>(
    appwriteConfig.databaseId,
    appwriteConfig.postCollectionId,
    queries
  );

  return posts;
};
