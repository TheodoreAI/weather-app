<template>
  <div class="">
    <div class="card-body text-center">
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
        <!-- <div class="col">
          <iframe
            src="https://mars.nasa.gov/gltf_embed/24584"
            width="100%"
            height="450px"
            frameborder="0"
          />
        </div> -->
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
  </div>
</template>

<script>
export default {
  methods: {
    showSomething(msg) {
      alert(msg);
    },
  },
};
</script>

<style></style>
