import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "../../../../lib/tanstack-query/query-keys";
import { getCurrentUser } from "../services/getCurrentUser";

export const useGetCurrentUser = () =>
  useQuery({
    queryKey: [QUERY_KEYS.CURRENT_USER],
    queryFn: getCurrentUser,
  });
