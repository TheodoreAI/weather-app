<template>
  <div class="card text-white bg-secondary p-3 m-3">
    <SunnyDay />
    <div v-if="this.imgUrl">
      <img class="figure-img img-fluid rounded" :src="this.imgUrl" />
    </div>
    <div v-else>
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    <div class="card-body">
      <h3 class="card-title">Mars Sol {{ this.sol }}</h3>
      <p class="card-text">{{ this.date }}</p>
      <p class="card-text">H: {{ this.maxTemp }}</p>
      <p class="card-text">L: {{ this.minTemp }}</p>
      <button class="btn btn-primary">View</button>
    </div>
  </div>
  <button @click="getImageUrl()">Setup</button>
</template>

<script>
import { mapActions } from "vuex";
import SunnyDay from "./SunnyDay.vue";

export default {
  name: "DetailView",
  components: { SunnyDay },
  data() {
    return { solNumber: this.sol };
  },

  props: {
    sol: Number,
    date: String,
    maxTemp: String,
    minTemp: String,
    imgUrl: Array,
  },

  methods: {

    ...mapActions(["fetchUrlList"]),
    getImageUrl() {
      this.fetchUrlList();

    },
  },
};
</script>
