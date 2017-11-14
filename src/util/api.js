import axios from "axios";

const myURL = "https://snowpak-reviews.herokuapp.com/reviews";

const proxy = "https://cors-anywhere.herokuapp.com/";

const finalUrl = proxy + myURL;

export function getReviews() {
  return axios.get(finalUrl);
}

export function otherReview() {
  return axios({
    method: "get",
    url: myURL,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  });
}
