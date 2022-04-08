<template>
  <div class="header position-relative">
    <h1>Mars Weather</h1>
    <div
      class="d-flex justify-content-center row rows-col-1 g-4 gap-3 mx-auto"
      style="opacity: 85%; bottom: 0"
    >
      <div v-for="(sol, index) in weatherData" :key="sol.Sol" class="col">
        <button type="button" class="btn martianColors" @click="showModal">
          Martian Day:{{ sol.Sol }}
        </button>
        <DetailView
          :sol="sol.Sol"
          :maxTemp="sol.max"
          :minTemp="sol.min"
          :date="sol.Date"
          :imgUrl="[
            this.getUrl.key.length > 0 ? this.getUrl.key[index].url : '',
          ]"
        />

        <Modal v-show="isModalVisible" @close="closeModal" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
// @ is an alias to /src
import Modal from "@/components/Modal.vue";
import DetailView from "@/components/DetailView.vue";

export default {
  name: "Home",
  components: {
    DetailView,
    Modal,
  },

  data() {
    return {
      isModalVisible: false,
    };
  },
  computed: {
    ...mapState(["weatherData", "urlList"]),
    ...mapGetters(["getUrl"]),
  },
  methods: {
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
.martianColors {
  background-color: #934838;
  color: white;
}
/* Container holding the image and the text */
</style>
