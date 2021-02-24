<template>
  <div class="landing" @click="routeMenu">
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods:{
    routeMenu(){
      this.$router.push('Menu')
    }
  }
}
</script>

<style scoped>
.landing{
  background-color:#2F8C91;
  width: 20%;
  min-height: 667px;
}

</style>
