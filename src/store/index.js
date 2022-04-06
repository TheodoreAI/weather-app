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
      localStorage.setItem("URL_LIST", value);
      console.log(state.urlList);
    },
  },
  getters: {
    getUrl(state) {
      return state.urlList;
    },
  },
  actions: {
    async fetchUrlList({ state, commit }) {
      let api_key = process.env.VUE_APP_NASA_API;
      if (state.urlList) {
        console.log("There are no urls");

        fetchAPI(state.weatherData, api_key, commit);
      } else {
        console.log("Its full");
      }
    },
  },
  modules: {},
});
