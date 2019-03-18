Vue.component('navbarra',{

template: //html
`
    <div>
    
    <nav class="navbar navbar-expand-lg navbar-light bg-dark">
  <a class="navbar-brand text-white" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link active text-white" href="#">Home <span class="sr-only">(current)</span></a>
      <a class="nav-item nav-link text-white" href="#">Features</a>
      <a class="nav-item nav-link text-white" href="#">Pricing</a>
      <a class="nav-item nav-link text-white" href="#">Disabled</a>
    </div>
  </div>
</nav>
    
    </div>

`
});

Vue.component('jumbotrom', {

template: //html

`
<div class="jumbotron">
  <h1 class="display-4">{{titulo}}</h1>
  <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  <hr class="my-4">
  <p>Actualmente contamos con una cantidad de {{$store.state.numero}}</p>
  <p class="lead">
    <button class="btn btn-primary btn-lg" @click="$store.commit('aumentar')" role="button">Learn more</button>
    <input class="form-control col-sm-4" v-model="$store.state.nombre"/>
  </p>
</div>


`,

props:{

     titulo:'',   

}
});

Vue.component('counter',{

    template: //html
    `
        <div>

        <h1 class="text-danger text-center">{{$store.state.numero}}</h1>
        <h1 class="text-info text-center">Usuarios Registrados [{{$store.state.nombre}}]</h1>

        </div>
    
    
    `,

});

Vue.component('cards-controll', {

    template: //html
    `
    <div class="form-group col-md-4">
                    <div class="card-header bg-dark text-white mt-2 mb-2 rounded" data-toggle="collapse" data-target="#facilidadesm6" aria-expanded="false" aria-controls="facilidadesm6">
                            <h5>{{titulo}}</h5>
                            </div>
                        
                            <div class="collapse show" id="facilidadesm6">
                                <div class="card card-body mb-2">
                                    <table class="table table-responsive-lg ">
                
                                            <tbody>
                                            <tr>
                                                <th>
                                                    Nombre:
                                                </th>
                    
                                                <td>
                                                    {{nombre}}
                                                </td>
                                            </tr>
                    
                                            <tr>
                                                <th>
                                                    Lenguaje
                                                </th>
                                                <td>
                                                    {{lenguaje}}
                                                </td>
                                            </tr>
                    
                                            <tr>
                                                    <th>
                                                     Correo:
                                                    </th>
                                                    <td>
                                                    {{correo}}
                                                    </td>
                                            </tr>
                
                                            <tr>
                                                    <th>
                                                         Cobro:   
                                                    </th>
                
                                                    <td>
                                                         {{cobro}}   
                                                    </td>
                
                                            </tr>
                                                
                    
                                            </tbody>
                    
                                    </table>
                                </div>
                            </div>
    </div>
    
    
    `,

    props: {

            titulo:'',
            color: 'bg-danger',
            nombre: 'OK',
            correo: 'OK',
            lenguaje: 'OK',
            cobro: 'OK'
        
        

    }
})
