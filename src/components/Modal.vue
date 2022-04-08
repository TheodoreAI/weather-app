<template>
  <div class="modal-backdrop">
    <div class="modal">
      <header class="modal-header">
        <p name="header">
          This is the default title! -- again more params or props
        </p>
        <button type="button" class="btn btn-danger btn-lg" @click="close">
          Close
        </button>
      </header>

      <section class="modal-body">
        <h2>The Body - will need to get passed some parameters</h2>
      </section>

      <footer class="modal-footer">
        <p name="footer">This is the default footer! more props</p>
        <button type="button" class="btn btn-danger" @click="close">
          Close Modal
        </button>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>
<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
}

.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
}

.modal-header {
  position: relative;
  border-bottom: 1px solid #eeeeee;
  color: blue;
  justify-content: space-between;
}

.modal-footer {
  border-top: 1px solid #eeeeee;
  flex-direction: column;
}

.modal-body {
  position: relative;
  padding: 20px 10px;
}

.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}
</style>
