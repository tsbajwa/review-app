import React from "react";

export default function Filter(props) {
  return (
    <div>
      <button onClick={props.sortScore}>Ascending Score</button>
      <button onClick={props.sortScoreDown}>Descending Score</button>
    </div>
  );
}
