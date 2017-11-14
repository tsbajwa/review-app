import React from "react";

export default function Filter({
  onAllReviewsClick,
  onFavourableReviewsClick,
  onUnfavourableClick,
}) {
  return (
    <div className="filter-container">
      <button className="filter-container__btn" onClick={onAllReviewsClick}>
        All Reviews
      </button>
      <button className="filter-container__btn" onClick={onFavourableReviewsClick}>
        Positive Reviews
      </button>
      <button className="filter-container__btn" onClick={onUnfavourableClick}>
        Negative Reviews
      </button>
    </div>
  );
}
