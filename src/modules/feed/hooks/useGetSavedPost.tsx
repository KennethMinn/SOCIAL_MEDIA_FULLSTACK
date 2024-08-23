import { useQuery } from "@tanstack/react-query";
import { getSavedPosts } from "../services/getSaves";
import { useAuth } from "../../../hooks/auth/useAuth";

export const useGetSavedPosts = () => {
  const { user } = useAuth();
  return useQuery({
    queryKey: ["save-posts"],
    queryFn: () => user && getSavedPosts(user?.$id),
  });
};
