import { createStore } from "vuex";
import axios from "axios";
import callAPI from "../js/searchQuery";
import marsLatest from "@/resources/marsLatest.json";

export default createStore({
  state: {
    weatherData: marsLatest,
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
    ADD_TO_WEATHERDATA: (state, objects) => {
      state.weatherData.map((sol) => {
        if (sol.Sol == objects.sol || objects.sol == 0) {
          sol.sol = objects.sol;
          sol.earth_date = objects.earth_date;
          sol.img = objects.img;
          sol.camera = objects.camera;
        }
      });
    },
    INIT_SEARCH_RESULTS: (state, value) => {
      state.searchResults = value;
    },
  },
  actions: {
    // Actions are connected via dispatch --> something new
    // Past Weather Section -
    addImages: ({ state, dispatch }, camera) => {
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
        dispatch("filterImages", images);
      });
    },
    filterImages: ({ commit }, images) => {
      let obj = {
        sol: "",
        earth_date: "",
        img: "",
        camera: "",
      };
      if (images.length > 0) {
        images.forEach((day) => {
          if (day.statusText == "OK") {
            let photo = day.data.photos;
            if (photo.length > 0) {
              // Getting the sol and the earth date and the img_src to the imagesData array
              obj.sol = photo[0].sol;
              obj.earth_date = photo[0].earth_date;
              obj.img = photo[0].img_src;
              obj.camera = photo[0].camera.name;
              commit("ADD_TO_WEATHERDATA", obj);
            } else {
              obj.sol = 0;
              obj.earth_date = new Date().toISOString().split("T")[0];
              obj.img =
                "https://1080motion.com/wp-content/uploads/2018/06/NoImageFound.jpg.png";
              obj.camera = "No Image Found";
              commit("ADD_TO_WEATHERDATA", obj);
            }
          } else {
            console.log("Error with query");
          }
        });
        commit("INITIALIZE_STORAGE", obj);
      }
    },
    // Image Library Section -
    searchImages({ commit }, queryObj) {
      let api_key = process.env.VUE_APP_NASA_API;
      callAPI(api_key, queryObj, commit);
    },
  },
});
