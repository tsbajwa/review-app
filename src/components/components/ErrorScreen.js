import React from "react";

export default function ErrorScreen({ getReviews }) {
  return (
    <div className="error-screen-container">
      <h1>Sorry something went wrong. Click below to try again. </h1>
      <button onClick={getReviews} className="error-screen-container__btn">
        Load Reviews
      </button>
    </div>
  );
}
