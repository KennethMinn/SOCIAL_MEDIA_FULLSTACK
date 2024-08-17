import { lazy } from "react";
import LazyLoad from "../../LazyLoad";

const FeedListing = lazy(
  () => import("../../../../modules/feed/pages/FeedListing")
);

export const LazyFeedListing = () => (
  <LazyLoad>
    <FeedListing />
  </LazyLoad>
);
