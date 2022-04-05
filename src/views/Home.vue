<template>
  <div class="">
    <h1>Mars Weather</h1>
    <div
      class="d-flex justify-content-center row rows-col-1 row-cols-md-3 g-4 gap-3 mx-auto"
    >
      <div v-for="sol in weatherData" :key="sol.Sol" class="col">
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
