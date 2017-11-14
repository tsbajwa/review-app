import React from "react";
import ReviewSingleContainer from "../containers/ReviewSingleContainer";

export default function reviewList({ sortedReviews }) {
  console.log(sortedReviews.length);
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
