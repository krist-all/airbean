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
      @onClick="onClick"/>
    </div>
    <div v-else >
    <div class="profile-img">
      <ProfileImg/>
    </div>

<!-- Name and Email of user -->
    <div class="nameEmail">
      <h1>{{user.name}}</h1>
      <p>{{user.epost}}</p>
    </div>

<!-- Order history -->
    <div class="orderhistorik">
      <h1>Orderhistorik</h1>
      <div v-for="order in filterIndex" :key="order.ordernumber">
        <OrderHistory
        :orderNumber="order.orderNumber"
        :date="order.date"
        :total="order.totalPrice"
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
        
       user() {
         return this.$store.getters.user[0]
       }
    },
      
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=PT+Sans:wght@700&family=Work+Sans&display=swap');
/* 
font-family: 'PT Sans', sans-serif;
font-family: 'Work Sans', sans-serif; 
*/

.background{
  background-color:#2F2926;
  width: 23rem;
  min-height: 667px;
  contain: content;
  position: relative;
}

.menu-button {
  display: flex;
  flex-direction: row;
  justify-content: start;
  margin-top: -120px;
}

.profile-img {
  padding-top: 10%;
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