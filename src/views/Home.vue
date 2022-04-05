<template>
  <div class="home">
    <h1>Mars Weather App</h1>
    <div class="row gap-3 mx-auto">
      <div
        v-for="sol in weatherData"
        :key="sol.Sol"
        class="col border border border-3 solid rounded-3"
      >
        <DetailView
          :sol="sol.Sol"
          :maxTemp="sol.max"
          :minTemp="sol.min"
          :date="sol.Date"
        />
        <p>{{ this.marsImgUrls }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
// @ is an alias to /src

import DetailView from "@/components/DetailView.vue";

export default {
  name: "Home",
  components: {
    DetailView,
  },

  computed: {
    ...mapState(["weatherData", "marsImgUrls"]),
  },
};
</script>
