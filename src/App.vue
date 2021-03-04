<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script> 
export default {
  /* Körs när appen ladads om. Gör en action som kollar om det finns något i local storage. 
  Tex orderhistorik, användare etc.Om det finns lägger den med det i state */
  created () {
    
},
}
</script>


<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  display: flex;
  justify-content: center;
  
}

</style>
