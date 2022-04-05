<template>
  <div class="card text-white bg-secondary p-3 m-3">
    <div v-if="urlList.length > 0">
      <img class="figure-img img-fluid rounded" :src="urlList[0].url" />
    </div>
    <div v-else>
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    <div class="card-body">
      <h3 class="card-title">Mars Sol {{ this.sol }}</h3>
      <p class="card-text">Earth Date: {{ this.date }}</p>
      <p class="card-text">Max Temperature (F): {{ this.maxTemp }}</p>
      <p class="card-text">Min Temperature (F): {{ this.minTemp }}</p>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import axios from "axios";
export default {
  name: "DetailView",
  data() {
    return { solNumber: this.sol, urlList: [] };
  },
  mounted() {
    let api_key = process.env.VUE_APP_NASA_API;
    axios
      .get(
        "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=" +
          this.solNumber +
          "&camera=fhaz&api_key=" +
          api_key
      )
      .then((res) => {
        this.saveImage(res);
      })
      .catch((error) => console.log(error));
  },
  computed: {
    ...mapState(["weatherData"]),
  },
  props: {
    sol: Number,
    date: String,
    maxTemp: String,
    minTemp: String,
    imgUrl: String,
  },

  methods: {
    saveImage(res) {
      let imgObject = res.data.photos[0];
      if (imgObject != undefined) {
        this.urlList.push({ urlId: imgObject.sol, url: imgObject.img_src });
      } else {
        this.urlList.push({
          urlId: "",
          url: "https://mars.nasa.gov/system/resources/detail_files/25757_1-PIA24543-Curiosity's-Selfie-at-Mont-Mercou-main-web.jpg",
        });
      }
      console.log(this.urlList);
    },
    getImageUrl(id) {
      let url;
      url = this.urlList.forEach((img) => {
        if (id == img.id) {
          return img.url;
        } else {
          return img.url;
        }
      });
      return url;
    },
  },
};
</script>
