<template>
  <div >
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/menu">Meny</router-link> |
      <router-link to="/coffee">Vårt Kaffe</router-link> |
      <router-link to="/profile">Profil</router-link> |
      <router-link to="/status">Orderstatus</router-link> 
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'MenuButton',
  props: {
   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
