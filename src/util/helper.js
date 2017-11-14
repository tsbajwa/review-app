export function sortScoreByAscending(reviews) {
  return reviews.sort((a, b) => a.score - b.score);
}

export function sortScoreByDescending(reviews) {
  return reviews.sort((a, b) => b.score - a.score);
}

export function sortChronobyAscending(reviews) {
  return reviews.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
}

export function sortChronobyDescending(reviews) {
  return reviews.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
}

export function showFavourableReviews(reviews) {
  return reviews.filter(review => review.score > 3);
}

export function showUnfavourableReviews(reviews) {
  return reviews.filter(review => review.score < 3);
}
