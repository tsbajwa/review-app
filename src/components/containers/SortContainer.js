import React from "react";
import Sort from "../components/Sort";
import {
  sortScoreByAscending,
  sortScoreByDescending,
  sortChronobyAscending,
  sortChronobyDescending,
} from "../../util/helper";

export default class SortContainer extends React.Component {
  handleAscendingScoreClick = () => {
    const sortedReviews = sortScoreByAscending(this.props.reviews);
    this.props.handleSortedReviewUpdate(sortedReviews);
  };

  handleDescendingScoreClick = () => {
    const sortedReviews = sortScoreByDescending(this.props.reviews);
    this.props.handleSortedReviewUpdate(sortedReviews);
  };

  handleAscendingChronoClick = () => {
    const sortedReviews = sortChronobyAscending(this.props.reviews);
    this.props.handleSortedReviewUpdate(sortedReviews);
  };

  handleDescendingChronoClick = () => {
    const sortedReviews = sortChronobyDescending(this.props.reviews);
    this.props.handleSortedReviewUpdate(sortedReviews);
  };

  render() {
    return (
      <div>
        <Sort
          onAscendingScoreClick={this.handleAscendingScoreClick}
          onDescendingScoreClick={this.handleDescendingScoreClick}
          onAscendingChronoClick={this.handleAscendingChronoClick}
          onDescendingChronoClick={this.handleDescendingChronoClick}
        />
      </div>
    );
  }
}
