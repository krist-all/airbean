<template>
  <div> 
      <div class="coffee-info">
          <div class="add-plus" @click="$emit('addToCart', cof)">
          <AddPlus />
          </div>
      <div @click="modalAction()">
        <div class="coffee-name">
          <h2>
              {{cof.name}}
          </h2> 
           <div class="point-line">
            <PointLine />
          </div>   
        </div>  
      </div>
           <div class="price">
               <h2>
                 {{cof.price}} kr
               </h2>
              </div>   
          <p>
              {{cof.description}}
          </p>
    <vModal :modal="showModal" @close="modalAction" :cof="cof" />
    </div>
  </div>
</template>

<script>
import AddPlus from "../assets/AddPlus";
import PointLine from "../assets/PointLine";
import vModal from "../components/modalPopup";
export default {
    props:{
        cof: Object
    },
    components:{
        AddPlus,
        PointLine,
        vModal
    },
     data() {
    return {
      showModal: false,
    }
  },
   methods: {
    modalAction() {
      this.showModal = !this.showModal;
    },
  }
}
</script>

<style scoped>
.coffee-info {
  display: flex;
  max-width: 80%;
  max-height: 8%;
  position: relative;
}
h2 {
  display:inline-flex;
  font-family: PT Serif;
  font-style: normal;
  font-weight: bold;
  font-size: 23px;
  line-height: 120%;
  white-space: nowrap;
}
.point-line {
  margin-top: -2rem;
  margin-left:5rem;
  position:fixed; 
}
p {
  font-family: sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 130%;
  margin-top: 3rem;
  margin-left: 4rem;
  position: fixed;
}
.add-plus {
  cursor: pointer;
}
.coffee-name{
  cursor: pointer;
  position: fixed;
}
.price{
  margin-left: 17rem;
  position:fixed;
}
</style>