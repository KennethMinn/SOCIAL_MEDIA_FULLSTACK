import {
  InvalidateQueryFilters,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { createPost } from "../services/createPost";
import { QUERY_KEYS } from "../../../lib/tanstack-query/query-keys";

export const useCreatePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      queryClient.invalidateQueries([
        QUERY_KEYS.POSTS,
      ] as InvalidateQueryFilters);
    },
  });
};
