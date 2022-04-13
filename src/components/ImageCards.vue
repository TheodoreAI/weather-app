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
      <p class="card-text">{{ this.date }}</p>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
// import axios from "axios";
export default {
  name: "ImageCards",
  data() {
    return { solNumber: this.sol, urlList: [] };
  },

  computed: {
    ...mapState(["weatherData"]),
  },
  props: {
    sol: Number,
    date: String,
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
          url: "https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/03425/opgs/edr/ncam/NRB_701558859EDR_F0940000NCAM00200M_.JPG",
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
