import React from "react";

export default function ReviewExtraInfo({ review }) {
  const {
    scoreLodging,
    scoreAccessibility,
    scoreBeginner,
    scoreIntermediate,
    scoreAdvanced,
    scoreSnow,
    scoreUncrowded,
    scoreLifts,
    scoreValue,
    scoreTown,
    scoreFacilities,
    scoreFamilyFriendliness,
  } = review;
  return (
    <div className="review-extra-container">
      <p>Scores based out of a total of 5</p>
      <div className="review-extra-info">
        <div className="review-extra-left">
          <span>Accessibility: {scoreAccessibility}</span>
          <span>Lodging: {scoreLodging}</span>
          <span>Beginner: {scoreBeginner} </span>
          <span>Intermediate: {scoreIntermediate}</span>
          <span>Advanced: {scoreAdvanced}</span>
          <span>Snow Quality: {scoreSnow}</span>
        </div>
        <div className="review-extra-right">
          <span>Uncrowded: {scoreUncrowded}</span>
          <span>Lifts: {scoreLifts}</span>
          <span>Value: {scoreValue}</span>
          <span>Town: {scoreTown}</span>
          <span>Facilities: {scoreFacilities}</span>
          <span>Family friendliness: {scoreFamilyFriendliness}</span>
        </div>
      </div>
    </div>
  );
}
