<template>
  <div  >
    <div class="cart" @click="showCart = true">
      <div>
      <CartIcon/>
      </div>
      <div class="cart-bag">
        <CartBag/>
      </div>  
      <div class="item-count">
       {{$store.state.cartCount}}
      </div>
    </div>
    <modal name="modal" v-if="showCart" @close="showCart = false" >
      <div>
        <CartItems/>
      </div>
    </modal>
  </div>
</template>

<script>
import CartIcon from '../assets/CartIcon'
import CartBag from '../assets/CartBag'
import CartItems from './CartItems'
import Modal from './Modal.vue'
export default {
    components:{
        CartIcon,
        CartBag,
        Modal,
        CartItems,
        
    },
    data() {
      return {
        showCart: false
      }
    },
}
</script>

<style>
.cart{
  display: flex;
  contain: content;
  align-items: center;
  justify-content: center;
}
.item-count{
 position: fixed;
 margin-bottom: 3rem;
 margin-left: 2rem;
 background-color: #E5674E;
 min-width: 22px;
 min-height: 22px;
 border-radius: 1rem;

 font-family: PT Serif;
 font-style: normal;
 font-weight: bold;
 font-size: 12px;
 line-height: 120%;

 color: white;

 display: flex;
 align-items: center;
 justify-content: center;
}
.cart-bag{
  position: fixed;
}
</style>