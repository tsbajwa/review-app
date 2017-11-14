import axios from "axios";

const myURL = "https://snowpak-reviews.herokuapp.com/reviews";

export function reviewDataRetreival() {
  return axios.get(myURL);
}
