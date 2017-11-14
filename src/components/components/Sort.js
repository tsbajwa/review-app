import React from "react";

export default function Sort(props) {
  return (
    <div className="sort-container">
      <button className="sort-container__btn" onClick={props.onAscendingScoreClick}>
        Lowest Score
      </button>
      <button className="sort-container__btn" onClick={props.onDescendingScoreClick}>
        Highest Score
      </button>
      <button className="sort-container__btn" onClick={props.onAscendingChronoClick}>
        Newest review
      </button>
      <button className="sort-container__btn" onClick={props.onDescendingChronoClick}>
        Oldest review
      </button>
    </div>
  );
}
