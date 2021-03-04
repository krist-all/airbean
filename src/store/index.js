import Vue from 'vue'
import Vuex from 'vuex'
import UUID, { uuid } from 'vue-uuid'
const short = require('short-uuid')
const today = new Date()
const orderdate = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
// const cart = window.localStorage.getItem('cart')
// const cartCount = window.localStorage.getItem('cartCount')
// const orderNumber = window.localStorage.getItem('orderNumber')


Vue.use(Vuex)
Vue.use(UUID)


export default new Vuex.Store({
  
  state: {
    // cart: cart ? JSON.parse(cart) : [],
    // cartCount: cartCount ? parseInt(cartCount) : 0,
    // orderNumber: orderNumber ? parseInt(orderNumber) : null,
  
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
     filterIndex: (state) => (index) => {
       return state.user.filter(item => item.index == index)
     }
  },
  mutations: {
    setUser(state, payload) {
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
      // this.commit('saveCart')
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
      // this.commit('saveCart')
    },
    // saveCart(state){
    //   window.localStorage.setItem('cart', JSON.stringify(state.cart));
    //   window.localStorage.setItem('cartCount', state.cartCount);
    //   window.localStorage.setItem('orderNumber', state.orderNumber);
    
    // },
    createOrderNum(state){
      const translator = short()
      state.orderNumber = translator.new();
      state.date = orderdate;
      // this.commit('saveCart')
    },
    pushToOrders(state){
      let order = {
        cart: state.cart,
        orderNumber: state.orderNumber,
        date: state.date
      }
     
      state.user.push(order)
    
      state.cart = [];
      state.orderNumber = null;
      state.date = null;
      state.cartCount = 0;
      // this.commit('saveCart')
    },
   
  },
  actions: {
  setUser(context, user) {
    context.commit("setUser", user)
    localStorage.setItem("User", JSON.stringify(user));
    
  }

  },
  modules:{

  }
})