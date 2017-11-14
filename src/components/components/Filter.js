import React from "react";

export default function Filter(props) {
  return (
    <div className="filter-container">
      <div className="filter-container__btn" onClick={props.onAllReviewsClick}>
        All Reviews
      </div>
      <div className="filter-container__btn" onClick={props.onFavourableReviewsClick}>
        Positive Reviews
      </div>
      <div className="filter-container__btn" onClick={props.onUnfavourableClick}>
        Negative Reviews
      </div>
    </div>
  );
}
