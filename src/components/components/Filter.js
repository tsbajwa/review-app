import React from "react";

export default function Filter(props) {
  const {
    onAllReviewsClick,
    onFavourableReviewsClick,
    onUnfavourableClick,
    selectedFilter,
  } = props;

  if (selectedFilter === "all") {
    allReviewClass = "filter-container__btn--active";
  } else if (selectedFilter === "favourable") {
    favourableReviewClass = "filter-container__btn--active";
  }
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
