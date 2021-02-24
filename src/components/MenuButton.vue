<template>
  <div>
    <div @click="showNav = !showNav">
    <div class="nav-icon" v-if="showNav">
      <Navicon />
    </div>
    <div class="nav" v-else-if="!showNav">
      <Closeicon />
      <router-link to="/menu"><h1>Meny</h1></router-link> 
      <router-link to="/coffee"><h1>Vårt Kaffe</h1></router-link> 
      <router-link to="/profile"><h1> Min Profil</h1></router-link> 
      <router-link to="/status"><h1>Orderstatus</h1></router-link> 
    </div>
    </div>
  </div>
</template>

<script>
import Navicon from '../assets/Navicon'
import Closeicon from '../assets/Closeicon'
export default {
  name: 'MenuButton',
  data(){
    return{
        showNav: true
    }
  },
  components:{
    Navicon,
    Closeicon
  }
}
</script>

<style scoped>
.nav-icon {
  cursor: pointer;
  
}
.nav {
  background-color: #2F2926;
}
h1{
  color: white;
}
</style>
