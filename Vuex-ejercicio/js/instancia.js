const store = new Vuex.Store({


state:{

numero: 0,
usuario: ''

},

mutations:{

    aumentar(state){

        state.numero++;

    }


},





});




const app = new Vue({

el:'#app',
store: store,

data:{

    programador:[],
    dba:[],
    tester:[]


}



});