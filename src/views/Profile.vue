<template>
  <div class="background">
    <div>
      <Header/>
    </div>

    <div class="menu-button">
      <MenuButton />
    </div>

    <div class="profile-img">
      <ProfileImg/>
    </div>

    <div class="nameEmail">
      <h1>{{}}</h1>
      <p>{{}}</p>
    </div>

    <div>
      <h1>Orderhistorik</h1>
    </div>

    <div>
      <RegisterUser/>
    </div>


  </div>
</template>

<script>
import MenuButton from '@/components/MenuButton.vue'
import RegisterUser from '@/components/RegisterUser.vue'
import Header from '../assets/Header.vue'
import ProfileImg from '@/assets/ProfileImg.vue'

export default {
    components:{
        MenuButton,
        RegisterUser,
        Header,
        ProfileImg,
    }
}
</script>

<style scoped>
.background{
  background-color:#2F2926;
  width: 23rem;
  min-height: 667px;
  contain: content;
  position: relative;
}

.menu-button {
  /* position: fixed; */
}

.profile-img {
  width: 100%;
}
.nameEmail {
  color: white; 
}
</style>