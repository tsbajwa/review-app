import React from "react";
import ReviewSingleContainer from "../containers/ReviewSingleContainer";

export default function reviewList({ sortedReviews }) {
  const renderList = () => {
    return sortedReviews.map((review, index) => {
      return <ReviewSingleContainer review={review} key={index} />;
    });
  };

  return <div className="review-list-container">{renderList()}</div>;
}
