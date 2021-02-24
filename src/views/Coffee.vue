<template>
 <div class="background">
  <div class="menu-button">
  <MenuButton />
  </div>
 </div>
</template>

<script>
import MenuButton from '@/components/MenuButton.vue'
export default {
    components:{
        MenuButton
    }

}
</script>

<style scoped>
.background{
  background-color:#F3E4E1;
  width: 20%;
  min-height: 1061px;
}
</style>