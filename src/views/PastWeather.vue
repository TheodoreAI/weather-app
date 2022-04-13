<template>
  <div class="header">
    <div class="gap-3">
      <h1 style="margin-bottom: 400px">Mars Gale Crater Weather</h1>
      <form class="mx-auto w-25">
        <select
          class="form-select"
          aria-label="rover-cameras"
          v-model="this.camera"
          required
        >
          <option value="FHAZ">Front-Camera</option>
          <option value="RHAZ">Rear-Camera</option>
          <option value="MAST">MAST</option>
          <option value="MAHLI">Mars Hand Lens Imager</option>

          <option value="NAVCAM">Navigation-Camera</option>
        </select>
        <input
          class="btn btn-primary btn-lg m-1 rounded"
          @click="searchQuery()"
          value="Search"
          type="button"
        />
      </form>
      <div class="row rows-col-1 g-4 gap-3 mx-auto">
        <div v-for="(sol, i) in weatherData" :key="sol.Sol" class="col">
          <DetailView
            :sol="sol.Sol"
            :maxTemp="sol.max"
            :minTemp="sol.min"
            :date="sol.Date"
            :camera="[this.images != null ? this.images[i].camera : sol.camera]"
            :imgUrl="[this.images != null ? this.images[i].img : sol.img]"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters, mapActions } from "vuex";
// @ is an alias to /src

import DetailView from "@/components/DetailView.vue";

export default {
  name: "Home",
  components: {
    DetailView,
  },
  data() {
    return {
      camera: "Select",
      imagesData: [],
      obj: {
        sol: "",
        earth_date: "",
        img: "",
        camera: "",
      },
    };
  },

  computed: {
    ...mapState(["weatherData", "images"]),
    ...mapGetters(["getImages"]),
  },

  methods: {
    ...mapActions(["addImages"]),
    searchQuery() {
      console.log("Searching for imagesData...");
      this.addImages(this.camera);
    },
  },
};
</script>

<style scoped>
/* Centered text */
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.header {
  text-align: center;
  color: #934838;
  background: url("https://d2pn8kiwq2w21t.cloudfront.net/original_images/jpegPIA22486.jpg")
    100% 100% no-repeat;

  min-height: 100vh;
  background-size: cover;
  background-position: center center;
  padding: 30px;
}
.martianColors {
  background-color: #934838;
  color: white;
}
/* Container holding the image and the text */
</style>
