import {
  InvalidateQueryFilters,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { deleteSave } from "../services/deleteSave";
import { QUERY_KEYS } from "../../../lib/tanstack-query/query-keys";

export const useDeleteSave = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteSave,
    onSuccess: () => {
      queryClient.invalidateQueries([
        QUERY_KEYS.POSTS,
      ] as InvalidateQueryFilters);
    },
  });
};
