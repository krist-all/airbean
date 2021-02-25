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
    <div v-for="cof in coffee" :key="cof.id">
      <AddCoffee
      :cofName="cof.name"
      :cofPrice="cof.price"
      :cofDescription="cof.description"
      />
    </div>
    <div>
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
}

</style>
