<template>
<div class="container">
  <div class="userbkg">
   <div class="logo">
    <AirbeanSmallLogo/>
  </div>
    <h1>
      Välkommen till AirBean-familjen!
    </h1>
    <p>
      Genom att skapa ett konto nedan kan du spara och se din orderhistorik.
    </p>
    <div class="form">
      <form @submit.prevent="onclick">
        <label for="namn" class="label">Namn</label>
        <input v-model="nameinput" type="text" class="inputtext"><br>
        <label for="epost" class="label">Epost</label>
        <input v-model="emailinput" type="email" class="inputtext"><br>
        <input v-model="radio" type="radio" name="radio" :value="true" required>
        <div class="gdpr-text">GDPR Ok!</div>
        <label @click="radiobutton == !radiobutton" for="radio" class="radio"></label>
        <input class="button" type="submit" value="Brew me a cup!"/>
      </form>
    </div>
  </div>
</div>
</template>

<script>
import AirbeanSmallLogo from '@/assets/AirbeanSmallLogo.vue';
import { uuid } from 'vue-uuid'
import {mapGetters} from 'vuex'
export default {
  data() {
    return {
      nameinput: "",
      emailinput: "",
      radio: false, 
    }
  },
  components: {
    AirbeanSmallLogo,
},
computed:{
  ...mapGetters({
          userGetter: 'user',

        })
},
methods: {
  onclick() {
    if (!this.radio){
      alert('check the checkbox')
      return
    }
   const user = 
     {
        id: uuid.v4(),
        name: this.nameinput,
        epost: this.emailinput,
        gdpr: this.radio,
      }
    this.$store.dispatch("setUser", user)
    if(this.userGetter[0]){
      this.$router.push('Profile')
    } else{
    this.$store.commit('createOrderNum')  
    this.$store.commit('pushToOrders')
     }
    this.nameinput = ""
    this.emailinput = ""    
  }
}
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  content: contain;
  min-height: 566px;
  margin-top: -5rem;
}
.userbkg {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #F3E4E1;
  width: 90%;
  border-radius: 3px;
  margin-top: 5rem; 
  height: 565.77px;
}
h1 {
  font-family: PT Serif;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 120%;
  padding: 0;
  margin: 1rem;

  color: #2F2926;
}
p {
 padding: 0;
 margin: 1rem;
 font-family: Work Sans;
 font-style: normal;
 font-weight: normal;
 font-size: 16px;
 line-height: 120%;

 color: #2F2926;
}
.inputtext {
  border: 1px solid #2F2926;
  border-radius: 6px;
  width: 18rem;
  height: 3rem;
  background-color: #F3E4E1;
}

form {
display: flex;
flex-direction: column;
text-align: start;
}
.gdpr-text{
  margin-top: -1rem;
  margin-left: 2rem;

  font-family: sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 120%;

  color: #2F2926;
}
.radio {
 margin-top: -1rem;
}
.button {
width: 248px;
height: 55px;
background: #2F2926;
border-radius: 50px;
color: white;
font-family: 'Pt Serif';
font-weight: 700;
font-size: 24px;
border-style: none;
cursor: pointer;
align-self: center;
margin-top: 3rem;
}
.button:hover {
background: #181514;
}
.logo{
  margin-bottom: 1rem;
}
.label{
  font-family: sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 120%;

  color: #2F2926;
}
</style>