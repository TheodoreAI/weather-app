<template>
  <div class="header">
    <div>
      <h1>Curiosity Rover</h1>
      <div class="row">
        <div class="col-3">
          <button
            class="btn btn-primary mx-auto m-1 rounded"
            @click="showSomething('MAST')"
          >
            MAST Camera View
          </button>
          <div class="testBox">something here</div>
          <div class="testBox">something here</div>
          <div class="testBox">something here</div>
        </div>
        <div class="col-3">
          <button
            class="btn btn-primary mx-auto m-1 rounded"
            @click="showSomething('NAVCAM')"
          >
            Navigation Camera View
          </button>
          <div class="testBox">something here</div>
          <div class="testBox">something here</div>
          <div class="testBox">something here</div>
        </div>
        <div class="col-3">
          <button
            class="btn btn-primary mx-auto m-1 rounded"
            @click="showSomething('FHAZ')"
          >
            Front Camera View
          </button>
          <div class="testBox">something here</div>
          <div class="testBox">something here</div>
          <div class="testBox">something here</div>
        </div>
        <div class="col-3">
          <button
            class="btn btn-primary mx-auto m-1 rounded"
            @click="showSomething('RHAZ')"
          >
            Rear Camera View
          </button>
          <div class="testBox">something here</div>
          <div class="testBox">something here</div>
          <div class="testBox">something here</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  methods: {
    showSomething(msg) {
      alert(msg);
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

.testBox {
  display: flex;
  background-color: grey;
  height: 300px;
  margin: 30px;
}
/* Container holding the image and the text */
</style>
