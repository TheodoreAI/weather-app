// API CALL
import axios from "axios";
let responses = [];
let arr = [];
export default function fetchAPI(weatherData, api_key, commit) {
  weatherData.map((day) => {
    callAPI(day.Sol, api_key);
  });

  responses.map((res) => {
    let imgObject = res.data.photos[0];

    if (imgObject != undefined) {
      arr.push({ urlId: imgObject.sol, url: imgObject.img_src });
    } else {
      arr.push({
        urlId: "",
        url: "https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/03425/opgs/edr/ncam/NRB_701558859EDR_F0940000NCAM00200M_.JPG",
      });
    }
  });

  console.log(arr);

  commit("INITIALIZE_STORAGE", { key: arr });
}

function callAPI(solNumber, api_key) {
  axios
    .get(
      "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=" +
        solNumber +
        "&camera=NAVCAM&api_key=" +
        api_key
    )
    .then((res) => {
      saveResponses(res);
    })
    .catch((error) => console.log(error));
}

function saveResponses(res) {
  responses.push(res);
}
// Reference:
// https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
