import React from "react";
import ReviewList from "../components/ReviewList";
import PageNumberContainer from "./PageNumberContainer";
import SortContainer from "./SortContainer";
import FilterContainer from "./FilterContainer";
import { generatePageNumbers, generateRenderedReviews } from "../../util/helper";

export default class ReviewContainer extends React.Component {
  state = {
    sortedAndFilteredReviews: this.props.reviews,
    currentPage: 1,
    pageNumbers: [],
    renderedReviews: [],
  };

  componentDidMount() {
    this.getPageNumbers();
    this.getRenderedReviews();
  }

  getPageNumbers = () => {
    const length = this.state.sortedAndFilteredReviews.length;
    const pageNumbers = generatePageNumbers(length);
    this.setState({ pageNumbers });
  };
  handleCurrentPageUpdate = currentPage => {
    this.setState({ currentPage });
    this.getRenderedReviews();
  };
  handlesortedAndFilteredReviews = sortedAndFilteredReviews => {
    this.setState({ sortedAndFilteredReviews });
    this.getPageNumbers();
    this.getRenderedReviews();
  };

  getRenderedReviews = () => {
    const renderedReviews = generateRenderedReviews(
      this.state.currentPage,
      this.state.sortedAndFilteredReviews
    );
    this.setState({ renderedReviews });
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
        <ReviewList sortedReviews={this.state.renderedReviews} />
        <PageNumberContainer
          pageNumbers={this.state.pageNumbers}
          onClick={this.handleCurrentPageUpdate}
        />
      </div>
    );
  }
}
