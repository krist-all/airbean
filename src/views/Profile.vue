<template>
  <div class="background">
    <div>
      <Header/>
    </div>
    <div class="menu-button">
      <MenuButton />
    </div>
   
    <div v-if="!(userGetter && userGetter[0])" >
      <RegisterUser
  
      />
    </div>
    <div v-else >
    <div class="profile-img">
      <ProfileImg/>
    </div>
    <div class="nameEmail" v-if="userGetter && userGetter[0]">
      <h1>{{userGetter[0].name}}</h1>
      <p>{{userGetter[0].epost}}</p>
    </div>
    <div class="orderhistorik">
      <h1>Orderhistorik</h1>
      <div v-if="userGetter && userGetter[1]">

      <div v-for="order in userGetter[1]" :key="order.ordernumber">
        
        <OrderHistory
        :orderNumber="order.orderNumber"
        :date="order.date"
        :total="order.cart[0].totalPrice+' kr'"
        />
      </div>
      <div class="total">
        <h3>Totalt spenderat</h3>
      <h3>{{total(userGetter[1])}} kr</h3>
      </div>
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
import {mapGetters} from 'vuex'
export default {
  data(){
    return{
      userRegistered: false,
      userOrders: '',
      user: '',
      orders: ''
    }
  },
    components:{
        MenuButton,
        RegisterUser,
        Header,
        ProfileImg,
        OrderHistory,
    },
    methods:{
      total(arr){
        let total=0
        if(arr)
        arr.forEach(item=>{
          total +=item.cart[0].totalPrice
        })
        return  total
      }
      },
    computed:{
        ...mapGetters({
          userGetter: 'user',

        })
       

    },
    watch:{
    
      }
      
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=PT+Sans:wght@700&family=Work+Sans&display=swap');

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
  margin: auto;
  width: 90%;
}
.total{
  padding:9px 0;
  display: flex;
  justify-content: space-between; 
  border-top: 1px solid rgba(255, 255, 255, 0.6);
}
.total h3{
  font-family: 'Work Sans', sans-serif;
font-style: normal;
font-weight: bold;
font-size: 14px;
line-height: 120%;

text-align: right;

color: rgba(255, 255, 255, 0.8);
}

</style>