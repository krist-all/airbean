<template>
  <transition name="modal">
      <div class="modal-mask" @click="$emit('close')">
          <div class="modal-container">
            <div class="arrow-up">
                <ArrowUp />
            </div> 
          </div>
      </div>
  </transition>
</template>

<script>
import ArrowUp from '../assets/ArrowUp'
export default {
    components:{
        ArrowUp
    }

}
</script>

<style scoped>
.modal-mask{
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
.modal-container{
  display: flex;
  content: contain;
  position: fixed;
  min-width: 341px;
  min-height: 566px;
  transition: all 0.3s ease;


  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
  border-radius: 3px;
  background-color: white;
}
.arrow-up{
  display: flex;
  contain: content;
  
  /* fill: white; */
}


</style>