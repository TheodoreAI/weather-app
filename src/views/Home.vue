<template>
  <div class="home">
    <h1>Mars Weather App</h1>
    <div class="row gap-3 mx-auto">
      <div
        v-for="sol in weatherData"
        :key="sol.Sol"
        class="col border border-danger border-3 solid rounded-3"
      >
        <DetailView
          :sol="sol.Sol"
          :maxTemp="sol.max"
          :minTemp="sol.min"
          :date="sol.Date"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
// @ is an alias to /src

import DetailView from "@/components/DetailView.vue";
// import { mapState } from "vuex";

export default {
  name: "Home",
  components: {
    DetailView,
  },

  // mounted() {
  //   this.$store.dispatch("loadData");
  // },
  computed: {
    ...mapState(["weatherData"]),
  },
};
</script>
