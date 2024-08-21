import { Grid, Loader, Stack } from "@mantine/core";
import { useGetInfinitePosts } from "../hooks/userGetInfinitePosts";
import PostCard from "../components/PostCard";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const FeedList = () => {
  const { data, isLoading, hasNextPage, fetchNextPage } = useGetInfinitePosts();
  const { ref, inView } = useInView();
  const posts = data?.pages.flatMap((post) => post.documents) || [];

  useEffect(() => {
    if (inView) fetchNextPage();
  }, [inView]);

  console.log(hasNextPage);

  return (
    <Stack align="center">
      {isLoading ? (
        <Loader />
      ) : (
        <Grid gutter={{ xs: 15, md: 25, lg: 35 }}>
          {posts?.map((post, i) => (
            <Grid.Col span={{ sm: 12, md: 6 }} key={i}>
              <PostCard post={post} />
            </Grid.Col>
          ))}
        </Grid>
      )}
      {hasNextPage && <Loader ref={ref} />}
    </Stack>
  );
};

export default FeedList;
