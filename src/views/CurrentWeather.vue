<template>
  <div class="card text-center">
    <img
      src="https://d2pn8kiwq2w21t.cloudfront.net/original_images/jpegPIA22486.jpg"
    />
    <h1>Curiosity Rover</h1>

    <div class="row">
      <div class="col-3">
        <button
          class="btn btn-primary mx-auto m-1 rounded"
          @click="showSomething('Curiosity Rover')"
        >
          MAST Camera View
        </button>
      </div>
      <div class="col-3">
        <button
          class="btn btn-primary mx-auto m-1 rounded"
          @click="showSomething('Curiosity Rover')"
        >
          Navigation Camera View
        </button>
      </div>
      <div class="col-3">
        <button
          class="btn btn-primary mx-auto m-1 rounded"
          @click="showSomething('Curiosity Rover')"
        >
          Front Camera View
        </button>
      </div>
      <div class="col-3">
        <button
          class="btn btn-primary mx-auto m-1 rounded"
          @click="showSomething('Curiosity Rover')"
        >
          Rear Camera View
        </button>
      </div>
    </div>
  </div>

  <ImageCards />
</template>

<script>
import ImageCards from "@/components/ImageCards.vue";

export default {
  components: { ImageCards },
  methods: {
    showSomething(msg) {
      alert(msg);
    },
  },
};
</script>
