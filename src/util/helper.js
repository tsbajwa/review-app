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

export function sortChronobyAscending(reviews) {
  return reviews.sort((a, b) => {
    return new Date(a.createdAt) - new Date(b.createdAt);
  });
}

export function sortChronobyDescending(reviews) {
  return reviews.sort((a, b) => {
    return new Date(b.createdAt) - new Date(a.createdAt);
  });
}

export function showFavourableReviews(reviews) {
  return reviews.filter(review => review.score > 3);
}

export function showUnfavourableReviews(reviews) {
  return reviews.filter(review => review.score < 3);
}
