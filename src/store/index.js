import { createStore } from "vuex";
import axios from "axios";
import marsData from "@/resources/marsData.json";
export default createStore({
  state: { weatherData: marsData, marsImgUrls: [] },
  mutations: {
    SET_WEATHER_DATA(state, payload) {
      if (payload.data.photos[0] != null) {
        state.marsImgUrls.push({
          id: payload.data.photos[0].sol,
          url: payload.data.photos[0].img_src,
        });
        console.log(state.marsImgUrls);
      } else {
        state.marsImgUrls.push({
          id: "",
          url: "",
        });
      }
    },
  },
  actions: {
    loadData({ commit }, solNumber) {
      let api_key = process.env.VUE_APP_NASA_API;
      axios
        .get(
          "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=" +
            solNumber +
            "&camera=fhaz&api_key=" +
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
