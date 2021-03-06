<template>
  <div>
    <div class="header">
      <h1>Images</h1>
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
          <option value="FHAZ" selected>Front-Camera</option>
          <option value="RHAZ">Rear-Camera</option>
          <option value="MAST">MAST</option>
          <option value="MAHLI">Mars Hand Lens Imager</option>
          <option value="MARDI">Mars Descent Imager</option>
          <option value="NAVCAM">Navigation-Camera</option>
        </select>
        <label class="fw-bold">
          Please input a sol (Martian Day) you would like to see
        </label>
        <input
          placeholder="(Range 1 - 3436 Sols)"
          class="m-1 rounded mx-auto p-1 w-100 text-center"
          type="number"
          min="1"
          max="3436"
          v-model.number="this.queryObject.sol"
        />
        <label>Or use the Earth Date:</label>
        <input
          class="m-1 rounded mx-auto p-1 w-100 text-center"
          type="date"
          min="2012-07-06"
          placeholder="Start of mission: "
          v-model="this.queryObject.earthDate"
        />

        <input
          class="btn btn-primary btn-lg m-1 rounded"
          @click="searchQuery()"
          value="Search"
          type="button"
        />
      </form>
      <div class="row">
        <div class="col-3" v-for="img in this.photos" :key="img.id">
          <div class="row">
            <img
              :src="img.img_src"
              class="rounded d-block"
              @click="showModal(img.img_src)"
            />
          </div>
          <label class="m-1 rounded">
            Earth Date:<strong>{{ img.earth_date }}</strong>
          </label>
          <ImageModal
            v-show="isModalVisible"
            @close="closeModal"
            :sol="img.sol"
            :date="img.earth_date"
            :imgUrl="this.currentImg"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// The intersection Observer API to load images
import { mapActions, mapState } from "vuex";
import ImageModal from "@/components/ImageModal.vue";
export default {
  components: { ImageModal },

  data() {
    return {
      queryObject: {
        camera: "select",
        sol: null,
        earthDate: "",
      },
      notification: "",
      found: false,
      photos: [],
      isModalVisible: false,
      currentImg: "",
    };
  },

  computed: {
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
      // Make sure there are photos being returned
      if (res.data != undefined) {
        // Make sure there are photos
        if (res.data.photos.length > 0) {
          this.updateNotification("Image(s) found!", true);
          photos = res.data.photos.map((photo) => {
            return photo;
          });
          console.log(photos);
          this.updatePhotos(photos);
        } else {
          this.updateNotification("No image(s) found!", false);
        }
      }
    },
    showModal(currentImg) {
      this.isModalVisible = true;
      this.currentImg = currentImg;
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
  background: #a1aba7 100% 100% no-repeat;

  min-height: 100vh;
  background-size: cover;
  background-position: center center;
  padding: 5px;
}
.martianColors {
  background-color: #934838;
  color: white;
}

.testBox {
  display: flex;

  height: 300px;
  margin: 30px;
}
/* Container holding the image and the text */
</style>
