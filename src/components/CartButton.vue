<template>
  <div>
    <div class="cart" @click="showCart = true">
      <div class="cart-icon"> 
      </div>
      <div class="cart-bag">
        <CartBag/>
      </div>  
      <div class="item-count">
       {{$store.state.cartCount}}
      </div>
    </div>
    <modal name="modal" v-if="showCart" @close="showCart = false" >
    </modal>
  </div>
</template>

<script>
import CartBag from '../assets/CartBag'
import Modal from './Modal.vue'
export default {
    components:{
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

<style scoped>
.cart{
  display: flex;
  margin-left: -6rem;
  contain: content;
  justify-content: center;
  align-items: center;
  min-height: 92px;
  min-width: 92px;
  cursor: pointer;
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
.cart-icon{
  min-height:60px;
  min-width: 60px;
  border-radius: 50%;
  display: inline-block;
  background: #2F2926;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.12);
}
</style>