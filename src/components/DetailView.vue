<template>
  <div class="card text-white bg-dark p-3 m-3" style="bottom: 0; width: 200px">
    <SunnyDay />
    <div v-if="this.camera != ''">
      <p>Rover camera: {{ this.camera[0] }}</p>
    </div>
    <div v-else>
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>

    <div v-if="this.imgUrl">
      <img class="figure-img img-fluid rounded" :src="this.imgUrl" />
    </div>
    <div v-else>
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    <div class="card-body">
      <p class="card-text">{{ this.date }}</p>
      <div class="row">
        <div class="col-6">
          <p class="card-text">H: {{ this.maxTemp }}</p>
        </div>
        <div class="col-6">
          <p class="card-text">L: {{ this.minTemp }}</p>
        </div>
      </div>
    </div>
    <button type="button" class="btn martianColors" @click="showModal">
      Martian Day: {{ this.sol }}
    </button>
  </div>
  <!-- <button @click="getImageUrl()">Setup</button> -->
  <Modal
    v-show="isModalVisible"
    @close="closeModal"
    :sol="this.sol"
    :date="this.date"
    :maxTemp="this.maxTemp"
    :minTemp="this.minTemp"
    :imgUrl="this.imgUrl"
  />
</template>

<script>
import { mapActions } from "vuex";
import SunnyDay from "./SunnyDay.vue";

import Modal from "@/components/Modal.vue";

export default {
  name: "DetailView",
  components: { SunnyDay, Modal },
  data() {
    return {
      solNumber: this.sol,
      isModalVisible: false,
    };
  },

  props: {
    sol: Number,
    date: String,
    maxTemp: String,
    minTemp: String,
    camera: Array,
    imgUrl: Array,
  },

  methods: {
    ...mapActions(["fetchUrlList"]),
    getImageUrl() {
      this.fetchUrlList();
    },
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
  },
};
</script>

<style scoped>
.martianColors {
  background-color: white;
  color: #934838;
}
</style>
