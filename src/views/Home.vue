<template>
  <div class="home">
  
    <MenuButton />
    <p>Hejsan</p>
  </div>
</template>

<script>
// @ is an alias to /src
import MenuButton from '@/components/MenuButton.vue'

export default {
  name: 'Home',
  components: {
    MenuButton
  }
}
</script>
