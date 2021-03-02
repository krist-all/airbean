<template>
  <div v-if="modal">
    <transition name="modal">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">{{cof.name}}</h5>
                <span class="close" aria-hidden="true" @click="modalAction()">&times;</span>
              </div>
              <div class="modal-body">
                <p>Information: {{cof.description}}</p>
                <p>Pris: {{cof.price}} Kr</p>
                <p>Böna: {{cof.bean}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: ["modal", "cof"],
  methods: {
    modalAction() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-dialog{
  background: #fff;
  margin: 10px;
  padding: 10px;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
  border-radius: 3px;
}
.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}
.modal-header{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.modal-header .modal-title{
  margin: 0px;
}
.modal-header .close{
  width: 20px;
  height: 20px;
  background: #aba0a0;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
}
.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}


.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>