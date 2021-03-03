<template>
<div class="container">
  <div class="userbkg">

   <div class="logo">
    <AirbeanSmallLogo/>
  </div>

    <h1>Välkommen till AirBean-familjen!</h1>
    <p>Genom att skapa ett konto nedan kan du spara och se din orderhistorik.</p>

    <div class="form">
      <form @submit.prevent="onclick">
        <label for="namn">Namn</label>
        <input v-model="nameinput" type="text" class="inputtext"><br>
        <label for="epost">E-post</label>
        <input v-model="emailinput" type="text" class="inputtext"><br>
        <input v-model="radio" type="radio" name="radio">
        <label @click="radiobutton == !radiobutton" for="radio" class="radio">GDPR ok!</label>
        <input class="button" type="submit" value="Brew me a cup!"/>
      </form>
    </div>

  </div>
</div>
</template>

<script>
import AirbeanSmallLogo from '@/assets/AirbeanSmallLogo.vue';
import { uuid } from 'vue-uuid'

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

methods: {
  onclick() {
   const user = 
     {
        id: uuid.v4(),
        name: this.nameinput,
        epost: this.emailinput,
        gdpr: this.radio,
      }
    this.$store.dispatch("setUser", user)
    
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
  margin: 0;
}
p {
 padding: 0;
 margin: 0;
}
.inputtext {
  border: 1px solid #2F2926;
  border-radius: 6px;
  width: 310px;
  height: 48px;
  background-color: #F3E4E1;
}

form {
display: flex;
flex-direction: column;
text-align: start;

}


.radio {
  margin-bottom: 20px;
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
/* margin-top: 44px;
margin-bottom: 40.7px; */
}

.button:hover {
  background: #181514;
}
</style>