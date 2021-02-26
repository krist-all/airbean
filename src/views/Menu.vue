<template>
  <div class="background">
    <div>
      <Header/>
    </div>
    <div class="menu-button" @click="active = !active" >
    <MenuButton />
    </div>
    <h1 :class="{ menuh1: active == true, menuh1disabled: active == false }">
          Meny
    </h1>
    <div :class="{ listcontainer: active == true, listcontainerdisabled: active == false}">
    <div v-for="cof in coffee" :key="cof.id">
      <AddCoffee
      :cofName="cof.name"
      :cofPrice="cof.price"
      :cofDescription="cof.description"
      />
    </div>
    </div>
    <div :class="{ footer: active == true, footerdisabled: active == false}">
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
  data(){
    return{
      active: true
    }
  },
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
.listcontainerdisabled{
  display: none;
}
.footer{
  position: fixed;
  margin-top: 48rem;
}
.footerdisabled{
  display: none;
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
.menuh1disabled{
  display: none;
}
.menu-button{
  position: fixed;
  
}
</style>
