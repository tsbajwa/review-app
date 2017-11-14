import React from "react";
import ReviewList from "../components/ReviewList";
import PageNumberContainer from "./PageNumberContainer";
import SortContainer from "./SortContainer";
import FilterContainer from "./FilterContainer";

export default class ReviewContainer extends React.Component {
  state = {
    sortedAndFilteredReviews: this.props.reviews,
  };

  handlesortedAndFilteredReviews = sortedAndFilteredReviews => {
    this.setState({ sortedAndFilteredReviews });
  };
  render() {
    return (
      <div className="review-container">
        <FilterContainer
          reviews={this.props.reviews}
          handleFilteredReviewUpdate={this.handlesortedAndFilteredReviews}
        />
        <SortContainer
          reviews={this.state.sortedAndFilteredReviews}
          handleSortedReviewUpdate={this.handlesortedAndFilteredReviews}
        />
        <ReviewList sortedReviews={this.state.sortedAndFilteredReviews} />
      </div>
    );
  }
}
