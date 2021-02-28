import Vue from 'vue'
import Vuex from 'vuex'
import UUID, { uuid } from 'vue-uuid'


Vue.use(Vuex)
Vue.use(UUID)


export default new Vuex.Store({
  state: {
    coffee: [
      {
        id: uuid.v4(),
        name: "Bryggkaffe",
        price: 49,
        description: "Bryggd på månadens bönor",
        bean: "Arabica"
      },
      {
        id: uuid.v4(),
        name: "Caffé Doppio",
        price: 49,
        description: "Bryggd på månadens bönor",
        bean: "Robusta"
      },
      {
        id: uuid.v4(),
        name: "Cappuccino",
        price: 49,
        description: "Bryggd på månadens bönor",
        bean: "Arabica"
      },
      {
        id: uuid.v4(),
        name: "Latte Macchiato",
        price: 49,
        description: "Bryggd på månadens bönor",
        bean: "Arabica"
      },
      {
        id: uuid.v4(),
        name: "Kaffe Latte",
        price: 49,
        description: "Bryggd på månadens bönor",
        bean: "Arabica"
      },
      {
        id: uuid.v4(),
        name: "Cortado",
        price: 39,
        description: "Bryggd på månadens bönor",
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
    },
    getCoffeeByBean: state => (bean) => {
      return state.coffee.filter(cof => cof.bean == bean);
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
    }

  },
  actions: {
  
  },
  modules:{

  }
})