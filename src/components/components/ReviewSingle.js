import React from "react";

export default function ReviewSingle({ review }) {
  return (
    <div>
      <div>{review.authorName}</div>
      <div>{review.createdAt}</div>
      <div>{review.score}</div>
    </div>
  );
}
