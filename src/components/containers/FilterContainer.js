import React from "react";
import Filter from "../components/Filter";
import { showFavourableReviews, showUnfavourableReviews } from "../../util/helper";

export default class FilterContainer extends React.Component {
  handleFavourableReviewsClick = () => {
    const filteredReviews = showFavourableReviews(this.props.reviews);
    this.props.handleFilteredReviewUpdate(filteredReviews);
  };

  handleUnfavourableReviewsClick = () => {
    const filteredReviews = showUnfavourableReviews(this.props.reviews);
    this.props.handleFilteredReviewUpdate(filteredReviews);
  };
  render() {
    return (
      <Filter
        onFavourableReviewsClick={this.handleFavourableReviewsClick}
        onUnfavourableClick={this.handleUnfavourableReviewsClick}
      />
    );
  }
}
