Vue.component('padre',{

template://html
`
    <div>
    <h1>Numero = {{$store.state.numero}}</h1>
    <hijo></hijo>
    </div>

`

});

Vue.component('hijo', {

    template://html
`
    <div>
    <button @click="$store.commit('aumentar')">+</button>
    </div>

`

})