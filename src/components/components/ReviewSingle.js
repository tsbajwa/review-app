import React from "react";
import ReviewExtraInfo from "./ReviewExtraInfo";

export default function ReviewSingle({ review, expanded, onClick }) {
  return (
    <div
      title="Click to see detailed review breakdown"
      className="review-single-container"
      onClick={onClick}
    >
      <div>
        <div className="review-single-summary-container">
          <span>{review.authorName}</span>
          <span>Overall Score: {review.score} out of 5</span>
        </div>
        <div className="review-single-comment">
          <p>Comment:</p>
          <p>{review.comment}</p>
        </div>
      </div>
      {expanded ? <ReviewExtraInfo review={review} /> : null}
    </div>
  );
}
