<template>
  <div class="modal-backdrop">
    <div class="modal">
      <div class="card">
        <div class="card-header">
          <button type="button" class="btn btn-danger" @click="close">
            Close Modal
          </button>
        </div>
        <div class="card-body">
          <img :src="this.imgUrl" style="opacity: 1; border-radius: 20px" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
    sol: Number,
    date: String,
    imgUrl: String,
  },
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>
<style scoped>
.modal {
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
}

.martianColors {
  background-color: white;
  color: #934838;
}
</style>
