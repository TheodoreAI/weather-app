<template>
  <div class="header position-relative">
    <h1>Mars Weather</h1>
    <div
      class="d-flex justify-content-center row rows-col-1 g-4 gap-3 mx-auto"
      style="opacity: 85%; bottom: 0"
    >
      <div v-for="(sol, index) in weatherData" :key="sol.Sol" class="col">
        <DetailView
          :sol="sol.Sol"
          :maxTemp="sol.max"
          :minTemp="sol.min"
          :date="sol.Date"
          :imgUrl="[this.getUrl.key ? this.getUrl.key[index].url : '']"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
// @ is an alias to /src

import DetailView from "@/components/DetailView.vue";

export default {
  name: "Home",
  components: {
    DetailView,
  },

  computed: {
    ...mapState(["weatherData", "urlList"]),
    ...mapGetters(["getUrl"]),
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

  height: 1000px;
  background-size: cover;
  background-position: center center;
  padding: 30px;
}
/* Container holding the image and the text */
</style>
