<template>
  <div class="background">
    <div class="menu-button">
      <MenuButton />
    </div>
    <div class="drone">
      <h4>ordernummer</h4>
      <StatusDrone />
    </div>

    <h1>Din beställning är på väg!</h1>
    <h2>TimmerHär Minuter</h2>
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
  min-height: 667px;
  width: 23rem;
  contain: content;
  position: relative;
}
.menu-button{
  position: fixed;
}
.drone {
  padding: 5rem 0;
}
h1,
h2,
h4 {
  color: white;
}

button {
  width: 14rem;
  height: 4rem;
  line-height: 0em;
  background: white;
  box-sizing: border-box;
  border-radius: 50px;
  font-family: PT serif;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
}
</style>
