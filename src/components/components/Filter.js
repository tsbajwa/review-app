import React from "react";
import FilterButton from "./FilterButton";

export default function Filter({
  onAllReviewsClick,
  onFavourableReviewsClick,
  onUnfavourableClick,
  selectedFilter,
}) {
  return (
    <div className="filter-container">
      <FilterButton
        onClick={onAllReviewsClick}
        selectedFilter={selectedFilter}
        btnText="All Reviews"
        filterType="all"
      />
      <FilterButton
        onClick={onFavourableReviewsClick}
        selectedFilter={selectedFilter}
        btnText="Positive Reviews"
        filterType="favourable"
      />
      <FilterButton
        onClick={onUnfavourableClick}
        selectedFilter={selectedFilter}
        btnText="Negative Reviews"
        filterType="unfavourable"
      />
    </div>
  );
}
