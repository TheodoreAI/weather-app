import axios from "axios";
export default function callAPI(api_key, camera, solNumber, commit) {
  console.log(typeof solNumber);
  axios
    .get(
      "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=" +
        solNumber +
        "&camera=" +
        camera +
        "&api_key=" +
        api_key
    )
    .then((res) => {
      commit("INIT_SEARCH_RESULTS", res);
    })
    .catch((error) => console.log(error));
}
