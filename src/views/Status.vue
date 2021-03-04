<template>
  <div class="background">
    <div class="ordernum">
      <h4>Ordernummer {{ orderNumber }}</h4>
    </div>
    <div class="drone">
      <StatusDrone />
    </div>
    <div class="h1box">
      <h1>Din beställning är på väg!</h1>
    </div>
    <div class="Timer">
      <Timer :orderTime="order.time" />
    </div>
    <button @click="routeToProfile"><h3>Ok, cool!</h3></button>
  </div>
</template>

<script>
import StatusDrone from "@/assets/StatusDrone.vue";
import Timer from "../components/Timer.vue";

export default {
  components: {
    StatusDrone,
    Timer,
  },
  computed: {
orderNumber() {
return this.$store.getters.user && this.$store.getters.user[1] ? this.$store.getters.user[1][this.$store.getters.user[1].length-1].orderNumber: null;
},
order(){
return this.$store.getters.user && this.$store.getters.user[1] ? this.$store.getters.user[1][this.$store.getters.user[1].length-1]: null;
}
},
  methods: {
    routeToProfile() {
      this.$router.push("Profile");
    },
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
.menu-button {
  position: fixed;
}
.drone {
  margin-top: 3rem;
}
h1 {
  font-family: PT Serif;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 120%;
  color: white;
}

.h1box {
  width: 80%;
  margin-left: 10%;
}

.Timer {
  font-family: sans-serif;
  font-style: normal;
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
  color: #2f2926;
  border-style: none;
  margin-top: 3rem;
}
.ordernum {
  margin-top: 6rem;
}
</style>
