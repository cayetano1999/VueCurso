//Sobre la instancia se vue empezamos a trabajar con los componentes
Vue.component('saludando', {

template: //html 
`
<div class="alert-danger">

   <h1>{{saludo}}</h1>

</div>

`,
data(){

    return {
        saludo: 'Bienvenido a Vue'
    }
}

});


