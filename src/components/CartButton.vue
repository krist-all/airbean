<template>
  <div class="cart">
      <div>
      <CartIcon/>
      </div>
      <div class="cart-bag">
        <CartBag/>
      </div>  
      <v-badge class="item-count">
       5
      </v-badge>
  </div>
</template>

<script>
import CartIcon from '../assets/CartIcon'
import CartBag from '../assets/CartBag'
export default {
    components:{
        CartIcon,
        CartBag
    }
}
</script>

<style>
.cart{
  display: flex;
  contain: content;
  align-items: center;
  justify-content: center;
  max-width: 60px;
  max-height: 60px;
  padding: 1rem;
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