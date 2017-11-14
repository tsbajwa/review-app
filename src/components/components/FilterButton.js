import React from "react";

export default function FilterButton({ onClick, selectedFilter, btnText, filterType }) {
  const className =
    selectedFilter === filterType ? "filter-container__btn--active" : "filter-container__btn";
  return (
    <button className={className} onClick={onClick}>
      {btnText}
    </button>
  );
}
