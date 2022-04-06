// API CALL
import axios from "axios";

let arr = [];
export default async function fetchAPI(weatherData, api_key, commit) {
  try {
    const result = await firstPromise(weatherData, api_key);

    const newResult = await secondPromise(result);
    console.log(newResult);
    commit("INITIALIZE_STORAGE", { key: arr });
  } catch (error) {
    console.log(error);
  }
}

function firstPromise(weatherData, api_key) {
  arr = weatherData.map((day) => {
    return callAPI(day.Sol, api_key);
  });
  console.log("first promise", arr);
  return arr;
}

function secondPromise(result) {
  let arr = [];
  arr = result.map((res) => {
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
  return arr;
}

async function callAPI(solNumber, api_key) {
  try {
    const res = await axios.get(
      "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=" +
        solNumber +
        "&camera=NAVCAM&api_key=" +
        api_key
    );

    return res;
  } catch (error) {
    return console.log(error);
  }
}

// function saveResponses(res) {
//   responses.push(res);
// }
// Reference:
// https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
