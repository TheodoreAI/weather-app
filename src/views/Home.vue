<template>
  <div class="card text-center">
    <img
      src="https://d2pn8kiwq2w21t.cloudfront.net/original_images/jpegPIA22486.jpg"
    />
    <h1>Mars Weather</h1>
    <div class="d-flex justify-content-center row rows-col-1 g-4 gap-3 mx-auto">
      <div v-for="sol in weatherData" :key="sol.Sol" class="col">
        <DetailView
          :sol="sol.Sol"
          :maxTemp="sol.max"
          :minTemp="sol.min"
          :date="sol.Date"
        />
      </div>
    </div>
  </div>
  <p>{{ this.getUrl }}</p>
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
