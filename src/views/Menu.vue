<template>
  <div class="background">
    <div>
      <Header/>
    </div>
    <h1 class="menuh1">
          Meny
    </h1>
    <div class=" listcontainer">
    <div v-for="cof in coffee" :key="cof.id">
      <AddCoffee
      @addToCart="addToCart"
      :cof="cof"
      
      />
    </div>
    </div>
    <div class="footer">
      <Footer/>
    </div>
     <div class="cartbtn">
      <CartButton/>
    </div>
    <div class="menu-button" @click="active = !active" >
    <MenuButton />
    </div>
  </div>
</template>

<script>
import MenuButton from '../components/MenuButton'
import AddCoffee from '../components/AddCoffee'
import Header from '../assets/Header'
import Footer from '../assets/Footer'
import CartButton from '../components/CartButton'
export default {
    data(){
      return{
        active: false,
        cofData: {},
        title: '',
      }
    },
  components:{
    MenuButton,
    AddCoffee,
    Header,
    Footer,
    CartButton,
  },
   computed:{
         coffee(){
             return this.$store.getters.coffee;
         },
         cart(){
           return this.$store.getters.cart
         }
     },
   methods:{
         addToCart(cof){
             this.$store.commit('pushToCart', cof )
          }
      }
}
</script>

<style scoped>
.background{
  background-color:#F3E4E1;
  min-height: 1000px;
  width: 23rem;
  display: flex;
  position: relative;
  contain: content;
}
.listcontainer{
  min-width: 90%;
  min-height: 75%;
  margin-left: 1rem;
  margin-top: 15rem;
  position: fixed;

}
.footer{
  position: fixed;
  margin-top: 58rem;
}
.menuh1{
  position: fixed;
  margin-top: 11rem;
  margin-left: 9rem;
  font-family: PT Serif;
  font-style: normal;
  font-weight: bold;
  font-size: 42px;
  line-height: 120%;
}
.menu-button{
  position: fixed;
}
</style>
