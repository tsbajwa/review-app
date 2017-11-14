import React from "react";
import ReviewExtraInfo from "./ReviewExtraInfo";

export default function ReviewSingle({ review, expanded, onClick }) {
  return (
    <div onClick={onClick}>
      <div>
        <div>{review.authorName}</div>
        <div>{review.createdAt}</div>
        <div>{review.score}</div>
      </div>
      {expanded ? <ReviewExtraInfo review={review} /> : null}
    </div>
  );
}
