import {
  InvalidateQueryFilters,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { updateUserProfile } from "../services/updateUserProfile";
import { QUERY_KEYS } from "../../../../lib/tanstack-query/query-keys";

export const useUpdateUserProfile = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateUserProfile,
    onSuccess: () => {
      queryClient.invalidateQueries([
        QUERY_KEYS.CURRENT_USER,
      ] as InvalidateQueryFilters);
    },
  });
};
