<template>
  <div class="background">
    <div>
      <Header/>
    </div>
    <h1 class="menuh1">
          Meny
    </h1>
    <select v-model="selected" class="dropdown">
      <option disabled value="">Välj Böna</option>
      <option>Alla Bönor</option>
      <option>Arabica</option>
      <option>Robusta</option>
    </select>
    <div class="listcontainer">
    <div v-if="selected == 'Arabica'">
    <div  v-for="cof in getArabica" :key="cof.id" >
        <AddCoffee
        @addToCart="addToCart"
         :cof="cof"/>
    </div>
    </div>  
    <div v-else-if="selected == 'Robusta'">
    <div v-for="cof in getRobusta" :key="cof.id" >
        <AddCoffee
        @addToCart="addToCart"
         :cof="cof"/>
    </div>
    </div>
    <div v-else-if="selected == 'Alla Bönor'">
    <div v-for="cof in coffee" :key="cof.id" >
        <AddCoffee
        @addToCart="addToCart"
         :cof="cof"/>
    </div>
    </div>
    <div v-else>
    <div v-for="cof in coffee" :key="cof.id" >
        <AddCoffee
        @addToCart="addToCart"
         :cof="cof"/>
    </div>
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
        selected: ''
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
         getArabica(){
             return this.$store.getters.getCoffeeByBean('Arabica');
          },
         getRobusta(){
            return this.$store.getters.getCoffeeByBean('Robusta');
          }
     },
   methods:{
         addToCart(cof){
             this.$store.commit('pushToCart', cof )
          }
      },
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
  margin-top: 20rem;
  position: fixed;

}
.footer{
  position: fixed;
  margin-top: 58rem;
}
.menuh1{
  position: fixed;
  margin-top: 11rem;
  margin-left: 37%;
  font-family: PT Serif;
  font-style: normal;
  font-weight: bold;
  font-size: 42px;
  line-height: 120%;
}
.menu-button{
  position: fixed;
}
.dropdown{
  display: flex;
  position: fixed;
  height: 3%;
  width: 60%;
  margin-top: 16rem;
  margin-left: 20%;
  padding-left: 1rem;

  border-radius: 3px;
  border-style: none;
  justify-content: center;
  align-items: center;
  
}

</style>
