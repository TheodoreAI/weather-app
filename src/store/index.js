import { createStore } from "vuex";
import fetchAPI from "../js/localstorage";
import marsData from "@/resources/marsData.json";
export default createStore({
  state: {
    weatherData: marsData,
    urlList: localStorage.getItem("URL_LIST"),
  },
  mutations: {
    INITIALIZE_STORAGE: (state, value) => {
      state.urlList = value;
      localStorage.setItem("URL_LIST", JSON.stringify(value));
      console.log(state.urlList);
    },
  },
  getters: {
    getUrl(state) {
      // You need to JSON.parse the localStorage object because it was stored using JSON.stringify (using string "serialization")
      let obj = JSON.parse(state.urlList);
      return obj;
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
  },
  modules: {},
});
