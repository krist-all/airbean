<template>
  <div class="wrapper">
    <h2>
    <div class="name">
      {{name}}
    </div>
    <div class="point-line">
        <PointLine/>
    </div>
    <div class="quantity">
      {{quantity}}
    </div>
    </h2>
    <div class="item-total">
        {{itemTotal}} kr
    </div>
    
  </div>
</template>

<script>
import PointLine from '../assets/PointLine'
export default {
  props:{
    name: String,
    quantity: Number,
    itemTotal: Number
  },
  components:{
    PointLine
  }

}
</script>

<style scoped>
.name{
  display: flex;

  font-family: PT Serif;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 120%;

  color: #2F2926;

}
.item-total{
  display: flex;

}
.quantity{
  display: flex;

}

</style>