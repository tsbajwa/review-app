import React from "react";

export default function Sort(props) {
  return (
    <div>
      <button onClick={props.onAscendingScoreClick}>Ascending Score</button>
      <button onClick={props.onDescendingScoreClick}>Descending Score</button>
      <button onClick={props.onAscendingChronoClick}>Newest review</button>
      <button onClick={props.onDescendingChronoClick}>Oldest review</button>
    </div>
  );
}
