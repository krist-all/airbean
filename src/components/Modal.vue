<template>
  <transition name="modal">
      <div class="modal-mask" @click.right="$emit('close')">
          <div class="modal-container">
            <div class="arrow-up">
                <ArrowUp />
            </div>
            <h1 class="header">
              Din Beställning
            </h1>
            <div v-for="(items, index) in cart" :key="index" class="cart-items">
              <CartItems
               :name="items.name"
               :quantity="items.quantity"
               :itemTotal="items.totalPrice"
              />
            </div>
          </div>
      </div>
  </transition>
</template>

<script>
import ArrowUp from '../assets/ArrowUp'
import CartItems from './CartItems'
export default {
    components:{
        CartItems,
        ArrowUp
    },
    computed:{
      cart(){
        return this.$store.getters.cart
      }
    }

}
</script>

<style scoped>
.modal-mask{
  z-index: 9998;
  top: 0;
  left: 0;
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s ease;

}
.modal-container{
  position: fixed;
  display: flex;
  content: contain;
  transition: all 0.3s ease;
  width: 90%;
  height: 85%;
  margin-top: 3rem;

  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
  border-radius: 3px;
  background-color: white;
}
.arrow-up{
  display: flex;
  contain: content;
  margin-top: -6%;
  margin-left: 88%;
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
.header{
  position: fixed;
  font-family: PT Serif;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 120%;
  margin-top: 3rem;
  margin-left: 4rem;

  color: #2F2926; 
}
.cart-items{
  position: fixed;
  display: flex;
  width: 80%;
  height: 60%;
}

</style>