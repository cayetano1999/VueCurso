<template>



    <div class="row">

            <div class="form-group col-sm-4">
                <label>Nombre de la Fruta</label>
                <input class="form-control"  />
            </div>

            <div class="form-group col-sm-4">
                <label>Cantidad</label>
                <input type="number" class="form-control" />
            </div>
            
           <div class="form-group col-sm-4 mt-4">
              
        <button class="btn btn-sm btn-primary" @click="AgregarFruta">Guardar Fruta</button>
           </div>
          

    </div>

</template>

<script>
import {mapState, mapMutations} from 'vuex';
export default {

    
    name:'Formulario',
    props:['Fruta'],

    computed:{

        ...mapState(['Frutas'])


    },

    methods:{

        ...mapMutations(['AgregarFruta'])
    }


}
</script>

