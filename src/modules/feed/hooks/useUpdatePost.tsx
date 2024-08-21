import {
  InvalidateQueryFilters,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { updatePost } from "../services/updatePost";
import { QUERY_KEYS } from "../../../lib/tanstack-query/query-keys";

export const useUpdatePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updatePost,
    onSuccess: () => {
      queryClient.invalidateQueries([
        QUERY_KEYS.POSTS,
      ] as InvalidateQueryFilters);
    },
  });
};
