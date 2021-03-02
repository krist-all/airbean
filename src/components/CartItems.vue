<template>
  <div>
    <div class="cart-item">
    <h2>
    <div class="name">
      {{items.name}}
    </div>
    <div class="point-line">
        <PointLine/>
    </div>
    <div class="quantity">
      <div @click="$emit('addToCart', items)">
        <QuantUp/>
      </div>
    <div>
      {{items.quantity}}
    </div>
      <div @click.prevent="$emit('removeItem', items)">
        <QuantDown/>
      </div>
    </div>
    </h2>
    <div class="item-total">
        {{items.totalPrice}} kr
    </div> 
    </div>
  </div>
</template>

<script>
import PointLine from '../assets/PointLine'
import QuantUp from '../assets/QuantUp'
import QuantDown from '../assets/QuantDown'
export default {
  props:{
    items: Object
  },
  components:{
    PointLine,
    QuantUp,
    QuantDown
  }  
}
</script>

<style scoped>
.cart-item{
  display:flex;
  min-width: 90%;
  position: relative;
}
.name{
  display: flex;
  position: fixed;
  margin-left: 2rem;

  font-family: PT Serif;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 120%;

  color: #2F2926;
}
.item-total{
  display: flex;
  margin-left: 2rem;
  margin-top: 3rem;
  position: fixed;
 
  font-family: Work Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 130%;

  color: #2F2926;
}
.quantity{
  display: flex;
  margin-left: 1rem;
  flex-direction: column;

  font-family: Work Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 130%;
}
h2{
  display: inline-flex;
  white-space: nowrap;
}
.point-line{
  margin-left: 9rem;
}

</style>