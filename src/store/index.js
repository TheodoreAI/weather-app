import { createStore } from "vuex";
import axios from "axios";
import callAPI from "../js/searchQuery";
// import marsData from "@/resources/marsData.json";
import marsLatest from "@/resources/marsLatest.json";

export default createStore({
  state: {
    weatherData: marsLatest,
    images: JSON.stringify([]),
    searchResults: [],
  },
  mutations: {
    INITIALIZE_STORAGE: (state, images) => {
      localStorage.clear();
      if (images.length > 0) {
        localStorage.setItem("IMAGES", JSON.stringify(images));
        state.images = localStorage.getItem("IMAGES");
      } else {
        console.log("Empty Array");
      }
    },
    INIT_SEARCH_RESULTS: (state, value) => {
      state.searchResults = value;
    },
  },
  getters: {
    getImages(state) {
      // You need to JSON.parse the localStorage object because it was stored using JSON.stringify (using string "serialization")

      let obj = JSON.parse(state.images);
      return obj;
    },
    getSearchResults(state) {
      // return the object
      return state.searchQuery;
    },
  },
  actions: {
    fetchUrlList({ state, commit }, camera) {
      let api_key = process.env.VUE_APP_NASA_API;
      let images = [];
      let promises = [];
      for (let i = 0; i < state.weatherData.length; i++) {
        promises.push(
          axios
            .get(
              "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=" +
                state.weatherData[i].Sol +
                "&camera=" +
                camera +
                "&api_key=" +
                api_key
            )
            .then((res) => {
              images.push(res);
            })
            .catch((error) => console.log(error))
        );
      }
      Promise.all(promises).then(() => {
        console.log("The images inside the promise.all", images);
        commit("INITIALIZE_STORAGE", images);
      });
    },
    searchImages({ commit }, queryObj) {
      let api_key = process.env.VUE_APP_NASA_API;
      callAPI(api_key, queryObj, commit);
    },
  },
  modules: {},
});
