import { createStore } from "vuex";

import marsData from "@/resources/marsData.json";
export default createStore({
  state: { weatherData: marsData },
  mutations: {},
  actions: {},
  modules: {},
});
