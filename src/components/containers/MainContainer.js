import React from "react";
import { reviewDataRetreival } from "../../util/api";
import Main from "../components/Main";

export default class MainContainer extends React.Component {
  state = {
    loading: true,
    reviews: [],
  };
  componentDidMount() {
    this.getReviews();
  }
  // TODO: Check error format, maybe make it ErrorCount and see whether we want to pass it down to props
  getReviews = () => {
    reviewDataRetreival()
      .then(res => {
        const reviews = res.data.reviews;
        this.setState({ loading: false, reviews });
      })
      .catch(error => {
        this.setState({ loading: false, error });
      });
  };

  render() {
    return <Main {...this.state} getReviews={this.getReviews} />;
  }
}
