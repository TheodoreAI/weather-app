import axios from "axios";
export default function callAPI(api_key, queryObj, commit) {
  let camera = queryObj.camera;
  let solNumber = queryObj.sol;
  let earthDate = queryObj.earthDate;
  console.log("searchQuery.js", solNumber, earthDate);
  if (solNumber != undefined) {
    query(api_key, camera, solNumber, "sol", commit);
  } else if (earthDate != "") {
    query(api_key, camera, earthDate, "earth_date", commit);
  } else {
    alert("No earth date, or Mars Sol Inputted!");
  }
}

function query(api_key, camera, date, dateParam, commit) {
  axios
    .get(
      "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?" +
        dateParam +
        "=" +
        date +
        "&camera=" +
        camera +
        "&api_key=" +
        api_key
    )
    .then((res) => {
      console.log(res.request);
      commit("INIT_SEARCH_RESULTS", res);
    })
    .catch((error) => console.log(error));
}
