import React from "react";

export default function Filter(props) {
  return (
    <div>
      <button onClick={props.onFavourableReviewsClick}>Positive Reviews</button>
      <button onClick={props.onUnfavourableClick}>Negative Reviews</button>
    </div>
  );
}
