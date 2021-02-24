<template>
  <div>
    <div @click="showNav = !showNav">
    <div class="nav-icon" v-if="showNav">
      <Navicon />
    </div>
    <div class="nav" v-else-if="!showNav">
      <Closeicon />
      <router-link to="/">Home</router-link> |
      <router-link to="/menu">Meny</router-link> |
      <router-link to="/coffee">Vårt Kaffe</router-link> |
      <router-link to="/profile">Profil</router-link> |
      <router-link to="/status">Orderstatus</router-link> 
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
  color: white;
 
}

</style>
