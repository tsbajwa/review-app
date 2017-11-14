import React from "react";
import ReviewSingleContainer from "../containers/ReviewSingleContainer";

export default function ReviewList({ sortedReviews }) {
  return (
    <div className="review-list-container">
      {sortedReviews.length ? (
        sortedReviews.map((review, index) => <ReviewSingleContainer review={review} key={index} />)
      ) : (
        <p>No reviews match your search</p>
      )}
    </div>
  );
}
