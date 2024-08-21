import { lazy } from "react";
import LazyLoad from "../../LazyLoad";

const FeedListing = lazy(
  () => import("../../../../modules/feed/pages/FeedListing")
);

const PostCreatePage = lazy(
  () => import("../../../../modules/feed/pages/PostCreatePage")
);

export const LazyFeedListing = () => (
  <LazyLoad>
    <FeedListing />
  </LazyLoad>
);

export const LazyPostCreatePage = () => (
  <LazyLoad>
    <PostCreatePage />
  </LazyLoad>
);
