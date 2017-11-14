import React from "react";

export default function Main({ loading, reviews }) {
  if (loading) {
    return <div>Loading</div>;
  } else if (reviews.length !== 0) {
    return <div> Reveiw View</div>;
  } else {
    return <div> Error</div>;
  }
}
