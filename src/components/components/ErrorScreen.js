import React from "react";

export default function ErrorScreen(props) {
  //TODO: Need some distinction when button pressed and its Error again, maybe ErrorCount??
  return (
    <div>
      <div>Sorry something went wrong. please try again </div>
      <button onClick={props.getReviews}>Click here to load again</button>
    </div>
  );
}
