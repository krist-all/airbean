<template>
  <div>
    <div @click="showNav = !showNav">
    <div class="nav-icon" v-if="showNav">
      <Navicon />
    </div>
    <div class="nav" v-else-if="!showNav">
      <div class="close-icon">
      <Closeicon />
      </div>
      <div class="menu-text">
      <router-link to="/menu"><h1>Meny</h1></router-link> 
      <MenuLine/>
      <router-link to="/coffee"><h1>Vårt Kaffe</h1></router-link>
      <MenuLine/> 
      <router-link to="/profile"><h1> Min Profil</h1></router-link> 
      <MenuLine/>
      <router-link to="/status"><h1>Orderstatus</h1></router-link> 
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import Navicon from '../assets/Navicon'
import Closeicon from '../assets/Closeicon'
import MenuLine from '../assets/MenuLine'
export default {
  name: 'MenuButton',
  data(){
    return{
        showNav: true
    }
  },
  components:{
    Navicon,
    Closeicon,
    MenuLine
  }
}
</script>

<style scoped>

.nav-icon {
  cursor: pointer;
  padding: 1rem;
  
}
.close-icon{
  cursor: pointer;
  padding: 1rem;
  float: left;
}
.menu-text{
  margin-top: 40%;
  padding: 1rem;
  justify-content: space-evenly;
  
}
.nav {
  background-color: #2F2926;
  height: 667px;
  min-width: 20%;
  position: fixed;
  

}
h1{
  color: white;
}
a {
  text-decoration: none;
}
</style>
