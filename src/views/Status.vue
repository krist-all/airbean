<template>
  <div class="background">
    <div class="menu-button">
      <MenuButton />
    </div>
    <div>
      <StatusDrone />
    </div>
    <h4>ordernummer</h4>
    <h1>Din beställning är på väg!</h1>
    <h2>13 minuter</h2>
    <button><h3>Ok, cool!</h3></button>
  </div>
</template>

<script>
import MenuButton from "@/components/MenuButton.vue";
import StatusDrone from "@/assets/StatusDrone.vue";
export default {
  components: {
    MenuButton,
    StatusDrone,
  },
};
</script>

<style scoped>
.background {
  background-color: #e5674e;
  width: 20%;
  min-height: 667px;
}

h1,
h2,
h4 {
  color: white;
}

button {
  width: 184px;
  height: 55px;
  left: 700px;
  top: 530px;

  background: white;
  box-sizing: border-box;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: PT serif;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 120%;
  padding: 0%;
  margin: 4rem;
}
</style>
