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
    getCoffeById: (state) => (id) => {
      return state.coffee.find(cof => cof.id == id);
    },
    getCoffeeByBean: state => (bean) => {
      return state.coffee.filter(cof => cof.bean == bean);
    },
    getCoffeeByName: (state) => (name) => {
      return state.coffee.find(cof => cof.name == name);
    },
    coffeeCount: (state, getters) =>{
      return getters.getCoffeeByName.lenght;
    },
    getCoffeeCountByName: (state, getters) => (name) => {
      return getters.getCoffeeByName(name).lenght;
    }
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
    pushCofToCart(state, cofId){
      state.cart.push({
        id: cofId,
        quantity: 1

      })
    },
    incrementItemQuantity(state, cartItem){
      cartItem.quantity++
    }

  },
  actions: {
    addCofToCart(context, cof) {
      const cartItem = context.state.cart.find(item => item.id === cof.id)
      if(!cartItem){
        context.commit('pushCofToCart', cof.id)
//find cartItem
      } else {
        context.commit('incrementItemQuantity', cartItem)
//incrementItemQuantity
      }

    }

  },
  modules:{

  }
})