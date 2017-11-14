import React from "react";
import ReviewSingle from "./ReviewSingle";

export default function reviewList({ sortedReviews }) {
  const renderList = () => {
    return sortedReviews.map((review, index) => {
      return <ReviewSingle review={review} key={index} />;
    });
  };

  return <div>{renderList()}</div>;
}
