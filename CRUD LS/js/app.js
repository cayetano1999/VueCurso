const app = new Vue({

el:'#app',

data:{
    titulo:'To Learn More',
    decripcion:'Primer app con vue',
    cursos:[],
    nuevocurso:'',
    
},


methods:{

    AgregarCurso(){

        this.cursos.push({
          curso:  this.nuevocurso,
          estado: false
        
        });
        

    },
    MarcarTarea: function (index, accion){

        if(accion=="marcar"){
        this.cursos[index].estado = true;
        }

        else{
            this.cursos.splice(index,1);
        }

    }



}


});