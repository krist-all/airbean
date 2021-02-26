<template>
  <div class="userbkg">
    <AirbeanSmallLogo/>
    <h1>Välkommen till AirBean-familjen!</h1>
    <p>Genom att skapa ett konto nedan kan du spara och se din orderhistorik.</p>
    <div class="form">
    <form>
      <label for="namn">Namn</label><br>
      <input class="inputtext" type="text"><br>
      <label for="epost">E-post</label><br>
      <input class="inputtext" type="text"><br>
      <input type="radio">
      <label for="radio">GDPR ok!</label>
    </form>
    </div>
    <button>Brew me a cup!</button>
  </div>
</template>

<script>
import AirbeanSmallLogo from '@/assets/AirbeanSmallLogo.vue';

export default {
  
  components: {
    AirbeanSmallLogo,
},
}
</script>

<style scoped>

.userbkg {
  background-color: #F3E4E1;
  width: 18%;
  min-height: 566px;
  position: fixed;
  border-radius: 3px;
}

.inputtext {
  border: 1px solid #2F2926;
  box-sizing: border-box;
  border-radius: 6px;
  width: 310px;
  height: 48px;
}

.form {
  text-align: left;
}

button {
width: 248px;
height: 55px;
background: #2F2926;
border-radius: 50px;
color: white;
font-family: 'Pt Serif';
font-weight: 700;
font-size: 24px;
border-style: none;
}

button:hover {
  cursor: pointer;
  background: #181514;
}
</style>