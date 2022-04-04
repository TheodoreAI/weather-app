<template>
  <div class="p-3 m-3">
    <h3>Mars Sol {{ this.sol }}</h3>
    <p>Earth Date: {{ this.date }}</p>

    <p>Max Temperature (F): {{ this.maxTemp }}</p>
    <p>Min Temperature (F): {{ this.minTemp }}</p>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "DetailView",
  computed: {
    ...mapState(["weatherData"]),
  },
  props: {
    sol: Number,
    date: String,
    maxTemp: String,
    minTemp: String,
  },
};
</script>

<style></style>
