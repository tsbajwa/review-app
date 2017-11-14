import React from "react";

export default function ErrorScreen(props) {
  //TODO: Need some distinction when button pressed and its Error again, maybe ErrorCount??
  return (
    <div className="error-screen-container">
      <h1>Sorry something went wrong. Click below to load reviews. </h1>

      <button className="error-screen-container__btn" onClick={props.getReviews}>
        Load Reviews
      </button>
    </div>
  );
}
