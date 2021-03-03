<template>
  <transition name="modal">
      <div class="modal-mask" >
        <div class="exit-modal" @click="$emit('close')">
        </div>
          <div class="modal-container">
            <div class="arrow-up">
                <ArrowUp />
            </div>
            <h1 class="header">
              Din Beställning
            </h1>
            <div class="cart-items">
            <div v-for="items in cart" :key="items.id" >
              <CartItems
              @addToCart="addToCart"
              @removeItem="removeItem"
              :items="items"
              />
            </div>
              <div class="cart-total">
                <h2>
                <div class="total-header">
                      Total
                </div>
                <div class="point-line">
                  <PointLine/>
                </div>
                <div class="total-sum">
                {{totalPrice}} kr
                </div>
                </h2>
                <p>
                  inkl moms + drönarleverans
                </p>
              </div>
              <button @click="createOrderNum">
                  Take my money!
              </button>
            </div>
            
          </div>
      </div>
  </transition>
</template>

<script>
import ArrowUp from '../assets/ArrowUp'
import CartItems from './CartItems'
import PointLine from '../assets/PointLine'
export default {
    components:{
        CartItems,
        ArrowUp,
        PointLine
    },
    computed:{
      cart(){
        return this.$store.getters.cart
      },
      totalPrice(){
        let total = 0;

        for(let items of this.cart){
          total += items.totalPrice;
        }
        return total
      }
    },
    methods:{
        addToCart(cof){    
            this.$store.commit('pushToCart', cof)
         },
         removeItem(cof){
           this.$store.commit('removeItem', cof)
              
          this.$store.commit('removeFromCart', cof)
            
         },
         createOrderNum(){
           this.$store.commit('createOrderNum')
           this.$store.commit('pushToOrders')
           this.$router.push('Status')
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
  min-width: 100%;
  min-height: 100%;
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
  min-width: 90%;
  min-height: 87%;
  margin-top: 1rem;

  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
  border-radius: 3px;
  background-color: white;
}
.arrow-up{
  display: flex;
  contain: content;
  margin-top: -6%;
  margin-left: 89%;
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
  min-width: 90%;
  min-height: 60%;
  margin-top: 7rem;
}
.cart-total{
  display: flex;
  width:90%;
  position: relative;
}
h2{
  margin-left: 2rem;

  font-family: PT Serif;
  font-style: normal;
  font-weight: bold;
  font-size: 23px;
  line-height: 120%;
  white-space: nowrap;
  display: inline-flex;

  color: #2F2926;
}
p {
  position: fixed;
  margin-left: 2rem;
  margin-top: 3rem;

  font-family: Work Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 130%;

  color: #2F2926;
}
.point-line{
  margin-left: 1rem;
  padding-right: 1rem;
}
button{
  display: flex;
  height: 5%;
  width: 60%;
  position: fixed;
  align-items: center;
  justify-content: center;
  margin-left: 3rem;
  margin-top: 2rem;
  cursor: pointer;

  background: #2F2926;
  border-radius: 50px;
  border-style: none;
  
  font-family: PT Serif;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 120%;

  color: white;
}
.exit-modal{
  min-width: 100%;
  min-height: 100%;
  position: fixed;
}
</style>