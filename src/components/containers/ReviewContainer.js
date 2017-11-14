import React from "react";
import ReviewList from "../components/ReviewList";
import PageNumberContainer from "./PageNumberContainer";
import Filter from "../components/Filter";
import {
  sortScoreByAscending,
  sortScoreByDescending,
  sortChronobyAscending,
  sortChronobyDescending,
} from "../../util/helper";

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

  sortScore = () => {
    const sortedReviews = sortScoreByAscending(this.props.reviews);
    this.setState({ sortedReviews });
  };

  sortScoreDown = () => {
    const sortedReviews = sortScoreByDescending(this.props.reviews);
    this.setState({ sortedReviews });
  };

  sortChrono = () => {
    const sortedReviews = sortChronobyAscending(this.props.reviews);
    this.setState({ sortedReviews });
  };

  sortChronoDescending = () => {
    const sortedReviews = sortChronobyDescending(this.props.reviews);
    this.setState({ sortedReviews });
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
        <Filter
          sortScore={this.sortScore}
          sortScoreDown={this.sortScoreDown}
          sortChrono={this.sortChrono}
          sortChronoDescending={this.sortChronoDescending}
        />
        <ReviewList sortedReviews={this.state.sortedReviews} />
        <PageNumberContainer sortedReviews={this.state.sortedReviews} />
      </div>
    );
  }
}
