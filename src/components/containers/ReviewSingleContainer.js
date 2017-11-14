import React from "react";
import ReviewSingle from "../components/ReviewSingle";

export default class ReviewSingleContainer extends React.Component {
  state = {
    expanded: false,
  };

  toggleAccordian = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  handleClick = () => {
    this.toggleAccordian();
  };

  render() {
    return (
      <ReviewSingle
        review={this.props.review}
        expanded={this.state.expanded}
        onClick={this.handleClick}
      />
    );
  }
}
