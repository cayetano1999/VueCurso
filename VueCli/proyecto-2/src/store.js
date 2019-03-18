import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

    Frutas:[
      {Nombre: 'Manzana', Cantidad : 0},
      {Nombre: 'Lechoza', Cantidad : 10},
      {Nombre: 'Melocoton', Cantidad : 0}
    ],

    Nuevonombre:'XC',
  Nuevacantidad:0
    
   
    

  },
  mutations: {

    Aumentar(state, index){

      state.Frutas[index].Cantidad++;
    
    },

    Reiniciar(state){

      state.Frutas.forEach(element =>  {
        element.Cantidad = 0
        
      });

    },

    AgregarFruta(state){

      state.Frutas.push({
        Nombre: 'Uva',
        Cantidad: 0
      })

    }


  },
  actions: {

  }

})
