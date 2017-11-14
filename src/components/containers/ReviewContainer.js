import React from "react";
import ReviewList from "../components/ReviewList";
import PageNumberContainer from "./PageNumberContainer";
import Filter from "../components/Filter";
import { sortScoreByAscending, sortScoreByDescending } from "../../util/helper";

export default class ReviewContainer extends React.Component {
  state = {
    visibleReviews: [],
  };

  componentDidMount() {
    this.renderInitialView();
  }
  renderInitialView = () => {
    const visibleReviews = this.props.reviews.slice(0, 5);
    this.setState({ visibleReviews });
  };

  sortScore = () => {
    const visibleReviews = sortScoreByAscending(this.props.reviews);
    this.setState({ visibleReviews });
  };

  sortScoreDown = () => {
    const visibleReviews = sortScoreByDescending(this.props.reviews);
    this.setState({ visibleReviews });
  };
  renderList = () => {
    //Determine what to show here
  };

  pagination = () => {
    //Sort out pagination here
  };

  render() {
    return (
      <div>
        <Filter sortScore={this.sortScore} sortScoreDown={this.sortScoreDown} />
        <ReviewList visibleReviews={this.state.visibleReviews} />
        <PageNumberContainer visibleReviews={this.state.visibleReviews} />
      </div>
    );
  }
}
