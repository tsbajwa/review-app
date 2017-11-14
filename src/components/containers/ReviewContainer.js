import React from "react";
import ReviewList from "../components/ReviewList";
import PageNumberContainer from "./PageNumberContainer";
import SortContainer from "./SortContainer";

export default class ReviewContainer extends React.Component {
  state = {
    sortedReviews: [],
  };

  componentDidMount() {
    this.renderInitialView();
  }
  renderInitialView = () => {
    const sortedReviews = this.props.reviews.slice(0, 5);
    this.setState({ sortedReviews });
  };

  handleSortedReviewUpdate = sortedReviews => {
    this.setState({ sortedReviews });
  };

  render() {
    return (
      <div>
        <SortContainer
          reviews={this.props.reviews}
          handleSortedReviewUpdate={this.handleSortedReviewUpdate}
        />
        <ReviewList sortedReviews={this.state.sortedReviews} />
        <PageNumberContainer sortedReviews={this.state.sortedReviews} />
      </div>
    );
  }
}
