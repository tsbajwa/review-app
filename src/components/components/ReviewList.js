import React from "react";
import ReviewSingle from "./ReviewSingle";

export default function reviewList({ visibleReviews }) {
  const renderList = () => {
    console.log("ReviewList", visibleReviews);
    return visibleReviews.map((review, index) => {
      return <ReviewSingle review={review} key={index} />;
    });
  };

  return <div>{renderList()}</div>;
}
