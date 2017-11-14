import React from "react";

export default function Sort(props) {
  const {
    onAscendingChronoClick,
    onAscendingScoreClick,
    onDescendingChronoClick,
    onDescendingScoreClick,
  } = props;
  return (
    <div className="sort-container">
      <button className="sort-container__btn" onClick={onAscendingScoreClick}>
        Lowest Score
      </button>
      <button className="sort-container__btn" onClick={onDescendingScoreClick}>
        Highest Score
      </button>
      <button className="sort-container__btn" onClick={onAscendingChronoClick}>
        Newest review
      </button>
      <button className="sort-container__btn" onClick={onDescendingChronoClick}>
        Oldest review
      </button>
    </div>
  );
}
