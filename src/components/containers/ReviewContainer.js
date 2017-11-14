import React from "react";
import ReviewList from "../components/ReviewList";
import PageNumberContainer from "./PageNumberContainer";
import SortContainer from "./SortContainer";
import FilterContainer from "./FilterContainer";

export default class ReviewContainer extends React.Component {
  state = {
    sortedReviews: this.props.reviews,
    filteredReviews: this.props.reviews,
    reviewsSorted: false,
  };

  handleSortedReviewUpdate = sortedReviews => {
    this.setState({ sortedReviews, reviewsSorted: true });
  };

  handleFilteredReviewUpdate = filteredReviews => {
    this.setState({ filteredReviews, reviewsSorted: false });
  };

  render() {
    let reviewsToSort = this.state.reviewsSorted
      ? this.state.sortedReviews
      : this.state.filteredReviews;
    return (
      <div className="review-container">
        <FilterContainer
          reviews={this.props.reviews}
          handleFilteredReviewUpdate={this.handleFilteredReviewUpdate}
        />
        <SortContainer
          reviews={reviewsToSort}
          handleSortedReviewUpdate={this.handleSortedReviewUpdate}
        />
        <ReviewList sortedReviews={this.state.filteredReviews} />
        <PageNumberContainer sortedReviews={this.state.sortedReviews} />
      </div>
    );
  }
}
