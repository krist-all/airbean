import Vue from 'vue'
import Vuex from 'vuex'
import UUID, { uuid } from 'vue-uuid'

// const cart = window.localStorage.getItem('cart')
// const cartCount = window.localStorage.getItem('cartCount')

Vue.use(Vuex)
Vue.use(UUID)


export default new Vuex.Store({
  
  state: {
    // cart: cart ? JSON.parse(cart) : [],
    // cartCount: cartCount ? parseInt(cartCount) : 0,
    coffee: [
      {
        id: uuid.v4(),
        name: "Bryggkaffe",
        price: 49,
        description: "habitasse platea dictumst vestibulum rhoncus",
        bean: "Arabica"
      },
      {
        id: uuid.v4(),
        name: "Caffé Doppio",
        price: 49,
        description: "egestas maecenas pharetra convallis posuere",
        bean: "Robusta"
      },
      {
        id: uuid.v4(),
        name: "Cappuccino",
        price: 49,
        description: "viverra vitae congue eu consequat",
        bean: "Arabica"
      },
      {
        id: uuid.v4(),
        name: "Latte Macchiato",
        price: 49,
        description: "lectus arcu bibendum at varius",
        bean: "Arabica"
      },
      {
        id: uuid.v4(),
        name: "Kaffe Latte",
        price: 49,
        description: "consequat mauris nunc congue nisi",
        bean: "Arabica"
      },
      {
        id: uuid.v4(),
        name: "Cortado",
        price: 39,
        description: "eget dolor morbi non arcu",
        bean: "Robusta"
      }  
    ],
     cart: [

     ],
     cartCount: 0,
    
    user: null,
      // {
      //   id: null,
      //   name: "",
      //   epost: "",
      //   gdpr: false,
      // }

  },

  getters:{
    coffee: state =>{
      return state.coffee;
    },
    cart: state => {
      return state.cart;
    }
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
    pushToCart(state, cof){
      let foundCoffee = state.cart.find(item => item.id == cof.id )
      
      if(foundCoffee){
        foundCoffee.quantity++;
        foundCoffee.totalPrice = foundCoffee.quantity * foundCoffee.price;
      } else {
        state.cart.push(cof)

        Vue.set(cof, 'quantity', 1);
        Vue.set(cof, 'totalPrice', cof.price)
      }
      state.cartCount++;
      // this.commit('saveCart')
    },
    removeItem(state, cof){
      let foundCoffee = state.cart.find(item => item.id == cof.id );
    
      if(foundCoffee){
        foundCoffee.quantity--;
        foundCoffee.totalPrice = foundCoffee.quantity * foundCoffee.price;
      } else{
          console.log(cof)
      }
        state.cartCount--;
      // this.commit('saveCart')
    },
    // saveCart(state){
    //   window.localStorage.setItem('cart', JSON.stringify(state.cart));
    //   window.localStorage.setItem('cartCount', state.cartCount);
    // }

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