import React from "react";

export default function Filter(props) {
  return (
    <div>
      <button onClick={props.sortScore}>Ascending Score</button>
      <button onClick={props.sortScoreDown}>Descending Score</button>
      <button onClick={props.sortChrono}>Newest review</button>
      <button onClick={props.sortChronoDescending}>Oldest review</button>
    </div>
  );
}
