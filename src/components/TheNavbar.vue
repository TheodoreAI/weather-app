<template>
  <div class="d-flex justify-content-center bg-dark p-4">
    <ul class="nav m-3" id="myTab" role="tablist">
      <li class="nav-item mx-3">
        <router-link to="/" class="nav-link btn btn-primary-outline"
          >Past Weather</router-link
        >
      </li>
      <li class="nav-item">
        <router-link
          to="/current-weather"
          class="nav-link btn btn-primary-outline"
          >Mars Images</router-link
        >
      </li>
    </ul>
  </div>

  <router-view />
</template>

<script>
// Try: toggledObject?.toggled? || {} to init localStorage and make sure its run on created()
export default {
  name: "TheNavbar",
};
</script>

<style></style>
