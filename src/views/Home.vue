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
          <option value="MARDI">Mars Descent Imager</option>
          <option value="NAVCAM">Navigation-Camera</option>
        </select>
        <input
          class="btn btn-primary btn-lg m-1 rounded"
          @click="searchQuery()"
          value="Search"
          type="button"
        />
      </form>
      <div class="row rows-col-1 g-4 gap-3 mx-auto" style="opacity: 85%">
        <div v-for="(sol, index) in weatherData" :key="sol.Sol" class="col">
          <DetailView
            :sol="sol.Sol"
            :maxTemp="sol.max"
            :minTemp="sol.min"
            :date="sol.Date"
            :camera="[
              this.images[index] != undefined ? this.images[index].camera : '',
            ]"
            :imgUrl="[
              this.images[index] != undefined ? this.images[index].img : '',
            ]"
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
      images: [],
    };
  },

  computed: {
    ...mapState(["weatherData", "urlList"]),
    ...mapGetters(["getImages"]),
  },
  watch: {
    getImages(newImg) {
      newImg.forEach((day) => {
        if (day.statusText == "OK") {
          console.log(day.statusText);
          this.extractImages(day.data);
        } else {
          console.log("Error with query");
        }
      });
    },
  },
  methods: {
    ...mapActions(["fetchUrlList"]),
    searchQuery() {
      console.log("Searching for images...");
      this.fetchUrlList(this.camera);
    },
    extractImages(imgDay) {
      let photo = imgDay.photos;
      if (photo.length > 0) {
        // Getting the sol and the earth date and the img_src to the images array
        let obj = {
          sol: photo[0].sol,
          earth_date: photo[0].earth_date,
          img: photo[0].img_src,
          camera: photo[0].camera.name,
        };
        this.images.push(obj);
        console.log("Typeof:", typeof obj.camera);
      } else {
        console.log("No first image");
      }
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
