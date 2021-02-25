<template>
  <div class="background">
    <div>
      <Header/>
    </div>
    <div class="menu-button">
    <MenuButton />
    </div>
    <h1>
          Meny
    </h1>
    <div class="list-container">
    <div v-for="cof in coffee" :key="cof.id">
      <AddCoffee
      :cofName="cof.name"
      :cofPrice="cof.price"
      :cofDescription="cof.description"
      />
    </div>
    </div>
    <div class="footer">
      <Footer/>
    </div>
  </div>
</template>

<script>
import MenuButton from '../components/MenuButton'
import AddCoffee from '../components/AddCoffee'
import Header from '../assets/Header'
import Footer from '../assets/Footer'
export default {
  components:{
    MenuButton,
    AddCoffee,
    Header,
    Footer
  },
  computed:{
        coffee(){
            return this.$store.getters.coffee;
        }
    }
}
</script>

<style scoped>
.background{
  background-color:#F3E4E1;
  min-height: 839px;
  width: 20%;
  
  display: flex;
  
}
.list-container{

  min-width: 90%;
  min-height: 75%;
  margin-left: 1rem;
  margin-top: 15rem;
  position: fixed;
}
.footer{
  position: fixed;
  margin-top: 48rem;
  

}
h1{
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
