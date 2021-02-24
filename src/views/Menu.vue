<template>
  <div class="background">
    <div class="menu-button">
    <MenuButton />
    </div>
  </div>
</template>

<script>
import MenuButton from '../components/MenuButton'
export default {
  components:{
    MenuButton
  }
  
}
</script>

<style scoped>
.background{
  background-color:#F3E4E1;
  min-height: 839px;
  width: 20%;
}

</style>
