<template>
  <div class="background">
    <div class="menu-button">
    <MenuButton />
    </div>
    <RegisterUser/>
  </div>
</template>

<script>
import MenuButton from '@/components/MenuButton.vue'
import RegisterUser from '@/components/RegisterUser.vue'
export default {
    components:{
        MenuButton,
        RegisterUser
    }
}
</script>

<style scoped>
.background{
  background-color:#2F2926;
  width: 20%;
  min-height: 667px;
  contain: content;
  position: relative;
}
.menu-button{
  position: fixed;
}

</style>