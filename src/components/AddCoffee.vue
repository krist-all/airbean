<template>
  <div> 
      <div class="coffee-info">
          <div class="add-plus" @click="addCoffeeToCart">
          <AddPlus />
          </div>
          <h2>
              {{cofName}}
          <div class="point-line">
              <PointLine/>
          </div>
          <div class="price">
               {{cofPrice}} kr
          </div>
          </h2>
          <p>
              {{cofDescription}}
          </p>
      </div>
  </div>
</template>

<script>
import AddPlus from '../assets/AddPlus'
import PointLine from '../assets/PointLine'
export default {
    props:{
        cofName: String,
        cofPrice: Number,
        cofDescription: String,
        cofId: String
    },
    components:{
        AddPlus,
        PointLine
    },
    computed:{
        coffee(){
             return this.$store.getters.getCoffeeById;
         },
    },
    methods:{
        addCoffeeToCart(evt){
            this.$emit( 'addCoffeeToCart', evt.target.coffee )
        }
    }
    
  
}
</script>

<style scoped>

.coffee-info{
    display: flex;
    max-width: 80%;
    max-height: 8%; 
    position: relative;
}
h2{
    display: inline-flex;
    font-family: PT Serif;
    font-style: normal;
    font-weight: bold;
    font-size: 23px;
    line-height: 120%;
    white-space: nowrap;
}

.point-line{
    margin-left: -4rem;
}
p{
    font-family: Work Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 130%;
    margin-top: 3rem;
    margin-left: 4rem;
    position: fixed;
}
.add-plus{
    cursor: pointer;
}

</style>