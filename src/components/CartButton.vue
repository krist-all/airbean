<template>
  <div  >
    <div class="cart" @click="showCart = true">
      <div>
      <CartIcon/>
      </div>
      <div class="cart-bag">
        <CartBag/>
      </div>  
      <v-badge class="item-count">
       {{$store.state.cartCount}}
      </v-badge>
    </div>   

    <modal name="modal" v-if="showCart" @close="showCart = false" >
      <div >
        <OpenCart/>
      </div>
    </modal>

  </div>
</template>

<script>
import CartIcon from '../assets/CartIcon'
import CartBag from '../assets/CartBag'
import Modal from './Modal'
export default {
    components:{
        CartIcon,
        CartBag,
        Modal
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