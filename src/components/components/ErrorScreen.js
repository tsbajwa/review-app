import React from "react";

export default function ErrorScreen(props) {
  return (
    <div className="error-screen-container">
      <h1>Sorry something went wrong. Click below to try again. </h1>
      <a href="/" onClick={props.getReviews} className="error-screen-container__btn">
        Load Reviews
      </a>
    </div>
  );
}
