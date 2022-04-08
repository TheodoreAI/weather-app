<template>
  <div class="header">
    <div>
      <h1>Curiosity Rover</h1>
      <div
        v-if="this.notification.length > 0"
        :class="{
          'alert alert-danger': !this.found,
          'alert alert-success': this.found,
        }"
        role="alert"
      >
        {{ this.notification }}
      </div>
      <form class="mx-auto w-25">
        <select
          class="form-select"
          aria-label="rover-cameras"
          v-model="this.queryObject.camera"
          required
        >
          <option selected>Open this select menu</option>
          <option value="FHAZ">Front-Camera</option>
          <option value="RHAZ">Rear-Camera</option>
          <option value="MAST">MAST</option>
          <option value="NAVCAM">Navigation-Camera</option>
        </select>
        <label class="fw-bold"> (Range 1 - 3436 Sols)</label>
        <input
          placeholder="Please input a sol (Martian Day) you would like to see"
          id="floatingInputValue"
          class="m-1 rounded mx-auto p-1 w-100"
          input-type="number"
          min="1"
          max="3436"
          v-model.number="this.queryObject.sol"
          required
        />
        <input
          class="btn btn-primary btn-lg m-1 rounded"
          @click="searchQuery()"
          value="Search"
          type="button"
        />
      </form>

      <div class="row" v-for="img in this.photos" :key="img.id">
        <div class="col-3">
          <button class="btn btn-primary m-1 rounded" @click="searchQuery()">
            MAST Camera
          </button>
          <div class="testBox">image here<img :src="img.img_src" /></div>
          <div class="testBox">image here</div>
          <div class="testBox">image here</div>
        </div>
        <div class="col-3">
          <button
            class="btn btn-primary m-1 rounded"
            @click="showimage('NAVCAM')"
          >
            Navigation Camera View
          </button>
          <div class="testBox">image here</div>
          <div class="testBox">image here</div>
          <div class="testBox">image here</div>
        </div>
        <div class="col-3">
          <button
            class="btn btn-primary mx-auto m-1 rounded"
            @click="showimage('FHAZ')"
          >
            Front Camera View
          </button>
          <div class="testBox">image here</div>
          <div class="testBox">image here</div>
          <div class="testBox">image here</div>
        </div>
        <div class="col-3">
          <button
            class="btn btn-primary mx-auto m-1 rounded"
            @click="showimage('RHAZ')"
          >
            Rear Camera View
          </button>
          <div class="testBox">image here</div>
          <div class="testBox">image here</div>
          <div class="testBox">image here</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
export default {
  components: {},

  data() {
    return {
      queryObject: {
        camera: "select",
        sol: null,
      },
      notification: "",
      found: false,
      photos: [],
    };
  },
  computed: {
    ...mapGetters(["getSearchResults"]),
    ...mapState(["searchResults"]),
  },
  watch: {
    searchResults(newVal) {
      console.log("Watching the newVal:", newVal.statusText);
      if (newVal.statusText == "OK") {
        this.extractPhotos(newVal);
      } else {
        console.log("Error with the Query");
      }
    },
  },
  methods: {
    ...mapActions(["searchImages"]),
    passCamera(value) {
      this.queryObject.camera = value;
    },
    passSolNumber(value) {
      this.queryObject.sol = value;
    },
    searchQuery() {
      console.log("Searching database for images...", this.queryObject);
      this.searchImages(this.queryObject);
    },
    updateNotification(msg, foundValue) {
      this.notification = msg;
      this.found = foundValue;
    },
    updatePhotos(photos) {
      this.photos = photos;
    },

    extractPhotos(res) {
      let photos = [];
      console.log("extractPhotos()");
      // Make sure there are photos being returned
      if (res.data != undefined) {
        if (res.data.photos.length > 0) {
          this.updateNotification("Image(s) found!", true);
          photos = res.data.photos.map((photo) => {
            this.updatePhotos(photos);
            return photo;
          });
          return photos;
        }
        this.updateNotification("No image(s) found!", false);
        return photos;
      } else {
        return photos;
      }
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
