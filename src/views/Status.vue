<template>
  <div class="background">
    <div class="menu-button">
    <MenuButton />
    </div>
    <div>
      <StatusDrone />
    </div>
  </div>
</template>

<script>
import MenuButton from '@/components/MenuButton.vue'
import StatusDrone from '@/assets/StatusDrone.vue'
export default {
    components:{
        MenuButton,
        StatusDrone
    }
}
</script>

<style scoped>
.background{
  background-color:#E5674E;
  width: 20%;
  min-height: 667px;
}
</style>