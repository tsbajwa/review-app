import React from "react";

export default class PageNumberContainer extends React.Component {
  state = {
    visibleReviews: this.props.visibleReviews,
    pageNumbers: [],
    reviewPerPage: 2,
  };

  componentDidMount() {
    console.log(this.state);
    this.calculatePageNumbers();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ visibleReviews: nextProps.visibleReviews });
    this.calculatePageNumbers();
    console.log(this.state);
  }

  calculatePageNumbers = () => {
    console.log("Function runs");
    const pageNumbers = [];
    const length = this.state.visibleReviews.length / this.state.reviewPerPage;
    console.log(length);
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
