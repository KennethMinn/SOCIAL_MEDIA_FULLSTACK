import { useInfiniteQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "../../../lib/tanstack-query/query-keys";
import { getInfinitePosts } from "../services/getInfinitePosts";
import { Models } from "appwrite";
import { PostDocument } from "../types";

export const useGetInfinitePosts = () =>
  useInfiniteQuery({
    queryKey: [QUERY_KEYS.POSTS],
    queryFn: getInfinitePosts,
    initialPageParam: null,
    getNextPageParam: (lastPage: Models.DocumentList<PostDocument>) => {
      // Check if there's more data -{total : _ , documents : []}
      if (lastPage && lastPage.documents.length === 0) {
        return null;
      }

      // Use the $id of the last document as the cursor for the next page
      const lastId = lastPage.documents[lastPage.documents.length - 1].$id;
      return lastId;
    },
  });
