import { createStore } from "vuex";
import axios from "axios";
import marsData from "@/resources/marsData.json";
export default createStore({
  state: { weatherData: marsData, marsImages: [] },
  mutations: {
    SET_WEATHER_DATA(state, payload) {
      console.log(state.weatherData, payload.data);
      state.marsImages = payload.data;
    },
  },
  actions: {
    loadData({ commit }) {
      let api_key = process.env.VUE_APP_NASA_API;
      axios
        .get(
          "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=3424&camera=fhaz&api_key=" +
            api_key
        )
        .then((res) => {
          commit("SET_WEATHER_DATA", res);
        })
        .catch((error) => console.log(error));
    },
  },
  modules: {},
});
