import React from "react";
import { getReviews, otherReview } from "../../util/api";
import Main from "../components/Main";

export default class MainContainer extends React.Component {
  state = {
    loading: true,
    reviews: [],
  };
  //Check error format
  componentDidMount() {
    getReviews()
      .then(res => {
        const reviews = res.data.reviews;
        this.setState({ loading: false, reviews });
      })
      .catch(error => {
        this.setState({ loading: false, error });
      });
  }

  render() {
    return <Main {...this.state} />;
  }
}
