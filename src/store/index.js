import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    coffee: [
      {
        id: "",
        name: "Bryggkaffe",
        price: 49,
        description: "Bryggd på månadens bönor",
        bean: ""
      },
      {
        id: "",
        name: "Caffé Doppio",
        price: 49,
        description: "Bryggd på månadens bönor",
        bean: ""
      },
      {
        id: "",
        name: "Cappuccino",
        price: 49,
        description: "Bryggd på månadens bönor",
        bean: ""
      },
      {
        id: "",
        name: "Latte Macchiato",
        price: 49,
        description: "Bryggd på månadens bönor",
        bean: ""
      },
      {
        id: "",
        name: "Kaffe Latte",
        price: 49,
        description: "Bryggd på månadens bönor",
        bean: ""
      },
      {
        id: "",
        name: "Cortado",
        price: 39,
        description: "Bryggd på månadens bönor",
        bean: ""
      }  
    ]

  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
