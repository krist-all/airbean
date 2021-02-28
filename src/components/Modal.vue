<template>
  <transition name="modal">
      <div class="modal-mask" @click.right="$emit('close')">
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
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}
.modal-container{
  position: fixed;
  display: flex;
  content: contain;
  transition: all 0.3s ease;

  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
  border-radius: 3px;
  background-color: white;
}
.arrow-up{
  display: flex;
  contain: content;
  fill: white;
}
.modal-enter{
  opacity: 0;
}
.modal-leave-active{
  opacity: 0;
}
.modal-enter .modal-container,
.modal-leave-active .modal-container{
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
}

</style>