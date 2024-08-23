import {
  InvalidateQueryFilters,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { createSave } from "../services/createSave";
import { QUERY_KEYS } from "../../../lib/tanstack-query/query-keys";

export const useCreateSave = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createSave,
    onSuccess: () => {
      queryClient.invalidateQueries([
        QUERY_KEYS.POSTS,
      ] as InvalidateQueryFilters);
    },
  });
};
