<template>
  <div class="home">
    <Main />
    <div class="row">
      <DetailView />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Main from "@/components/Main.vue";
import DetailView from "@/components/DetailView.vue";
import { mapState } from "vuex";

export default {
  name: "Home",
  components: {
    Main,
    DetailView,
  },
  mounted() {
    this.$store.dispatch("loadData");
  },
  computed: {
    ...mapState(["weatherData"]),
  },
};
</script>
