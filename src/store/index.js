import { createStore } from "vuex";
import fetchAPI from "../js/localstorage";
import callAPI from "../js/searchQuery";
import marsData from "@/resources/marsData.json";
export default createStore({
  state: {
    weatherData: marsData,
    urlList: localStorage.getItem("URL_LIST"),
    searchResults: [],
  },
  mutations: {
    INITIALIZE_STORAGE: (state, value) => {
      state.urlList = value;
      localStorage.setItem("URL_LIST", JSON.stringify(value));
      console.log(state.urlList);
    },
    INIT_SEARCH_RESULTS: (state, value) => {
      state.searchResults = value;
    },
  },
  getters: {
    getUrl(state) {
      // You need to JSON.parse the localStorage object because it was stored using JSON.stringify (using string "serialization")
      let obj = JSON.parse(state.urlList);
      return obj;
    },
    getSearchResults(state) {
      // return the object
      return state.searchQuery;
    },
  },
  actions: {
    async fetchUrlList({ state, commit }) {
      let api_key = process.env.VUE_APP_NASA_API;
      if (state.urlList.length == 0) {
        console.log("There are no urls");
        fetchAPI(state.weatherData, api_key, commit);
      } else {
        console.log("Its full");
      }
    },
    searchImages({ commit }, queryObj) {
      let api_key = process.env.VUE_APP_NASA_API;
      callAPI(api_key, queryObj.camera, queryObj.sol, commit);
    },
  },
  modules: {},
});
