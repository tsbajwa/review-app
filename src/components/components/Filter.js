import React from "react";

export default function Filter(props) {
  return (
    <div className="filter-container">
      <button className="filter-container__btn" onClick={props.onAllReviewsClick}>
        All Reviews
      </button>
      <button className="filter-container__btn" onClick={props.onFavourableReviewsClick}>
        Positive Reviews
      </button>
      <button className="filter-container__btn" onClick={props.onUnfavourableClick}>
        Negative Reviews
      </button>
    </div>
  );
}
