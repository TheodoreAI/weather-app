<template>
  <div class="d-flex justify-content-center bg-dark p-4">
    <ul class="nav nav-pills m-3" id="myTab" role="tablist">
      <li class="nav-item">
        <router-link
          to="/"
          @click="chosen(true)"
          :class="{
            'nav-link': !this.toggled,
            'nav-link active': this.toggled,
          }"
          id="pills-home-tab"
          data-bs-toggle="pill"
          data-bs-target="#pills-home"
          type="button"
          role="tab"
          aria-controls="pills-home"
          aria-selected="true"
          >Mars Weather</router-link
        >
      </li>
      <li class="nav-item">
        <router-link
          to="/about"
          @click="chosen(false)"
          :class="{
            'nav-link': this.toggled,
            'nav-link active': !this.toggled,
          }"
          id="pills-about-tab"
          data-bs-toggle="pill"
          data-bs-target="#pills-about"
          type="button"
          role="tab"
          aria-controls="pills-about"
          aria-selected="true"
          >Rover View</router-link
        >
      </li>
    </ul>
  </div>

  <router-view />
</template>

<script>
export default {
  name: "TheNavbar",
  data() {
    return {
      toggled: true,
    };
  },
  methods: {
    chosen(value) {
      this.toggled = value;
    },
  },
};
</script>

<style></style>
