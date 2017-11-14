import React from "react";
import ErrorScreen from "./ErrorScreen";
import ReviewContainer from "../containers/ReviewContainer";

export default function Main({ loading, reviews, getReviews }) {
  if (loading) {
    return <div>Loading</div>;
  } else if (reviews.length !== 0) {
    return <ReviewContainer reviews={reviews} />;
  } else {
    return <ErrorScreen getReviews={getReviews} />;
  }
}
