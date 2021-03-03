<template>
  <div class="background">
    <div class="ordernum">
    <h4>Ordernummer {{orderNumber}}</h4>
    </div>
    <div class="drone">
      
      <StatusDrone />
    </div>
    <div class="h1box">
    <h1>Din beställning är på väg!</h1>
    </div>
    <h2>XX minuter</h2>
    <button @click="routeToProfile"
    ><h3>Ok, cool!</h3></button>
  </div>
</template>

<script>
import StatusDrone from "@/assets/StatusDrone.vue";
export default {
  components: {
    StatusDrone
  },
  computed:{
    orderNumber(){
      return this.$store.state.orderNumber;
    }
  },
  methods:{
    routeToProfile(){
      this.$router.push('Profile')
    }
  }
}
</script>

<style scoped>
.background {
  background-color: #e5674e;
  min-height: 667px;
  width: 23rem;
  contain: content;
  position: relative;
}
.menu-button{
  position: fixed;
}
.drone {
 margin-top: 3rem;
}
h1{
  font-family: PT Serif;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 120%;
  
  color: white;
}
.h1box{
  display: flex;
  width: 70%;
  margin-left: 15%;
}
h2{
  font-family: sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 120%;
  text-align: center;

  color: white;
}
h4 {
  font-family: sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 120%;
  color: rgba(255, 255, 255, 0.7); 
}
button {
  cursor: pointer;
  width: 10rem;
  height: 4rem;
  line-height: 0em;
  background: white;
  box-sizing: border-box;
  border-radius: 50px;
  font-family: PT serif;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  color: #2F2926;
  border-style: none;
  margin-top: 3rem;
}
.ordernum{
  margin-top: 6rem;
}
</style>
