import {
  InvalidateQueryFilters,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { likePost } from "../services/likePost";
import { QUERY_KEYS } from "../../../lib/tanstack-query/query-keys";

export const useLikePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: likePost,
    onSuccess: () => {
      queryClient.invalidateQueries([
        QUERY_KEYS.POSTS,
      ] as InvalidateQueryFilters);
    },
  });
};
