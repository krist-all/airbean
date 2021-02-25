<template>
  <div class="background">
    <div class="menu-button">
    <MenuButton />
    </div>
    <div v-for="cof in coffee" :key="cof.id">
      <AddCoffee />
    </div>
  </div>
</template>

<script>
import MenuButton from '../components/MenuButton'
import AddCoffee from '../components/AddCoffee'
export default {
  components:{
    MenuButton,
    AddCoffee
  },
  computed:{
        coffee(){
            return this.$store.state.coffee;
        }
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
