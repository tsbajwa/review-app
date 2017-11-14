import React from "react";
import Filter from "../components/Filter";
import { showFavourableReviews, showUnfavourableReviews } from "../../util/helper";

export default class FilterContainer extends React.Component {
  state = {
    selectedFilter: "all",
  };
  handleFavourableReviewsClick = () => {
    const filteredReviews = showFavourableReviews(this.props.reviews);
    this.props.handleFilteredReviewUpdate(filteredReviews);
    this.setState({ selectedFilter: "favourable" });
  };

  handleUnfavourableReviewsClick = () => {
    const filteredReviews = showUnfavourableReviews(this.props.reviews);
    this.props.handleFilteredReviewUpdate(filteredReviews);
    this.setState({ selectedFilter: "unfavourable" });
  };
  handleAllReviewsClick = () => {
    this.props.handleFilteredReviewUpdate(this.props.reviews);
    this.setState({ selectedFilter: "all" });
  };
  render() {
    return (
      <Filter
        selectedFilter={this.state.selectedFilter}
        onFavourableReviewsClick={this.handleFavourableReviewsClick}
        onUnfavourableClick={this.handleUnfavourableReviewsClick}
        onAllReviewsClick={this.handleAllReviewsClick}
      />
    );
  }
}
