import Vue from 'vue'
import Vuex from 'vuex'
import UUID, { uuid } from 'vue-uuid'
const short = require('short-uuid')
const today = new Date()
const orderdate = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();

Vue.use(Vuex)
Vue.use(UUID)

export default new Vuex.Store({
  
  state: {
    coffee: [
      {
        id: uuid.v4(),
        name: "Bryggkaffe",
        price: 49,
        description: "Habitasse platea dictumst vestibulum rhoncus.",
        bean: "Arabica"
      },
      {
        id: uuid.v4(),
        name: "Caffé Doppio",
        price: 49,
        description: "Egestas maecenas pharetra convallis posuere.",
        bean: "Robusta"
      },
      {
        id: uuid.v4(),
        name: "Cappuccino",
        price: 49,
        description: "Viverra vitae congue eu consequat.",
        bean: "Arabica"
      },
      {
        id: uuid.v4(),
        name: "Latte Macchiato",
        price: 49,
        description: "Lectus arcu bibendum at varius.",
        bean: "Arabica"
      },
      {
        id: uuid.v4(),
        name: "Kaffe Latte",
        price: 49,
        description: "Consequat mauris nunc congue nisi.",
        bean: "Arabica"
      },
      {
        id: uuid.v4(),
        name: "Cortado",
        price: 39,
        description: "Eget dolor morbi non arcu.",
        bean: "Robusta"
      }  
    ],
     cart: [],
     cartCount: 0,
     orderNumber: null,
     date: null,
     user: [],
  },
  getters:{
    coffee: state =>{
      return state.coffee;
    },
    cart: state => {
      return state.cart;
    },
     getCoffeeByBean: (state) => (bean) => {
       return state.coffee.filter(item => item.bean == bean)
     },
     user: state => {
       return state.user;
     },
  },
  mutations: {
    setUser(state, payload) {
      state.user.push(payload);
      console.log('state')
    },
    setOrders(state,payload){
      state.user.push(payload);
    },
    pushToCart(state, cof){
      let foundCoffee = state.cart.find(item => item.id == cof.id )
      
      if(foundCoffee){
        foundCoffee.quantity++;
        foundCoffee.totalPrice = foundCoffee.quantity * foundCoffee.price;
        
      } else {
        state.cart.push(cof)

        Vue.set(cof, 'quantity', 1);
        Vue.set(cof, 'totalPrice', cof.price);
      }
      state.cartCount++;
    },
    removeItem(state, cof){
      let foundCoffee = state.cart.find(item => item.id == cof.id );
      if(foundCoffee){
        foundCoffee.quantity--;
        foundCoffee.totalPrice = foundCoffee.quantity * foundCoffee.price; 
        if(foundCoffee.quantity === 0){
         let index = state.cart.findIndex((coffee) => coffee.id == foundCoffee.id);

           state.cart.splice(index, 1);
        }  
      } else { 
        console.log(cof)
      }
        state.cartCount--;
    },
    createOrderNum(state){
      const translator = short()
      state.orderNumber = translator.new();
      state.date = orderdate;
    },
    pushToOrders(state){
      const date = new Date()
      let order = {
        cart: state.cart,
        orderNumber: state.orderNumber,
        date: state.date,
        time: date.getTime()
      }
      state.user.push(order)
   
      if(!localStorage.orders){
        localStorage.orders = JSON.stringify([])
      }
      let storedOrders  = JSON.parse(localStorage.orders)
      localStorage.orders = JSON.stringify([...storedOrders, order])
      console.log(JSON.parse(localStorage.orders))
      state.cart = [];
      state.orderNumber = null;
      state.date = null;
      state.cartCount = 0;
      state.user = [];
    },
  },
  actions: {
  setUser(context, user) {
    context.commit("setUser", user)
    if (!localStorage.User){

      localStorage.setItem("User", JSON.stringify(user));
    }
  }
  },
  modules:{

  }
})