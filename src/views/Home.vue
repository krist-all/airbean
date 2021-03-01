<template>
  <div class="landing" @click="routeMenu">
    <div class="left-header">
      <LeftHeader />
    </div>
    <div class="logo">
      <AirLogo />
    </div>
    <div class="right-header">
      <RightHeader />
    </div>
  </div>
</template>

<script>
import AirLogo from '../assets/AirLogo'
import LeftHeader from '../assets/LeftHeader'
import RightHeader from '../assets/RightHeader'
export default {
  name: 'Home',
  components:{
    AirLogo,
    LeftHeader,
    RightHeader
  },
  methods:{
    routeMenu(){
      this.$router.push('Menu')
    }
  }
}
</script>

<style scoped>
body{
  cursor: pointer;
}
.landing{
  background-color:#2F8C91;
  width: 23rem;
  min-height: 667px;
  display: flex;
  position: relative;
}
.left-header{
position: fixed;
}
.right-header{
 margin-left: -16%;
 overflow: hidden;
 float: right;
}
.logo{
  align-self: center;
  margin-left: 16% ;
}
</style>
