import React from "react";

export default class PageNumberContainer extends React.Component {
  state = {
    sortedReviews: this.props.sortedReviews,
    pageNumbers: [],
    reviewPerPage: 2,
  };

  componentDidMount() {
    this.calculatePageNumbers();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ sortedReviews: nextProps.sortedReviews });
    this.calculatePageNumbers();
  }

  calculatePageNumbers = () => {
    const pageNumbers = [];
    const length = this.state.sortedReviews.length / this.state.reviewPerPage;
    for (let i = 1; i <= Math.ceil(length); i++) {
      pageNumbers.push(i);
    }
    this.setState(pageNumbers);
  };
  renderPageNumbers = () => {
    return this.state.pageNumbers.map(num => {
      return <li key={num}>{num}</li>;
    });
  };
  render() {
    return <div>{this.renderPageNumbers()}</div>;
  }
}
