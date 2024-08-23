import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../../../hooks/auth/useAuth";
import { getSavedRecords } from "../services/getSaveRecords";

export const useGetSavedRecords = () => {
  const { user } = useAuth();
  return useQuery({
    queryKey: ["save-posts"],
    queryFn: () => user && getSavedRecords(user?.$id),
  });
};
