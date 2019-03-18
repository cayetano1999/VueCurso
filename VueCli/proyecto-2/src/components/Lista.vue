<template>
    <div>
    <ul class="list-group" v-for="(item , index) in Frutasordenadas" :key="item.index">
    <li class="list-group-item d-flex justify-content-between align-items-center" @click="Aumentar(index)">
       {{index}} - {{item.Nombre}}
        <span class="badge badge-primary badge-pill">{{item.Cantidad}}</span>
    </li>
    
    </ul>
    <button class="btn btn-danger mt-2" @click="Reiniciar">Reiniciar</button>
    </div>
</template>

<script>

import {mapState, mapMutations} from 'vuex';

export default {
    
    name:'Lista',
    computed:{

        ...mapState(['Frutas']),

      Frutasordenadas(){

         return this.Frutas.sort((a , b) => b.Cantidad - a.Cantidad)
      }      
      

    },
    methods:{
        ...mapMutations(['Aumentar','Reiniciar'])
    }

 


}
</script>
