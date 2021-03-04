<template>
  <div class="background">
    <div>
      <Header/>
    </div>
    <div class="menu-button">
      <MenuButton />
    </div>
    <div v-if="userOrders.length < 1" >
      <RegisterUser
      @onClick="onClick"
      />
    </div>
    <div v-else >
    <div class="profile-img">
      <ProfileImg/>
    </div>
    <div class="nameEmail">
      <h1>{{}}</h1>
      <p>{{}}</p>
    </div>
    <div class="orderhistorik">
      <h1>Orderhistorik</h1>
      <div v-for="(array, index) in userOrders" :key="index">
        <OrderHistory
        :orderNumber="array"
        :date="array"
        :total="array"
        />
      </div>
    </div>
    </div>

  </div>
</template>

<script>
import MenuButton from '@/components/MenuButton.vue'
import RegisterUser from '@/components/RegisterUser.vue'
import Header from '../assets/Header.vue'
import ProfileImg from '@/assets/ProfileImg.vue'
import OrderHistory from '@/components/OrderHistory.vue'

export default {
  data(){
    return{
      userRegistered: false
    }
  },
    components:{
        MenuButton,
        RegisterUser,
        Header,
        ProfileImg,
        OrderHistory,
    },
    computed:{
        userOrders(){
            return this.$store.getters.user
        },
       
    },
      
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;600&display=swap');

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
  Font-family: 'Work Sans', sans-serif; 
  Color: white; 
}

p h1 {
  opacity: 80%;
}

.orderhistorik {
  Font-family: 'Work Sans', sans-serif; 
  color: white;
  text-align: start;
  margin-left: 30px;
}


</style>