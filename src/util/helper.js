function filterReviews(reviews) {}
//Ascending
export function sortScoreByAscending(reviews) {
  let sortedReviews = reviews.sort((a, b) => {
    return a.score - b.score;
  });

  return sortedReviews;
}

export function sortScoreByDescending(reviews) {
  let sortedReviews = reviews.sort((a, b) => {
    return b.score - a.score;
  });

  return sortedReviews;
}
