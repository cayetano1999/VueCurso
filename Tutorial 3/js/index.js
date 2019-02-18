

const app = new Vue({

    el: '#app',

    data: {

        titulo:'Agregar Profesor',
        textobtn: 'Agregar',
        personas: [

            {nombre:'Orbis', apellido:'Alonzo', ocupacion: 'Programador', nivel:0},
            
            {nombre:'Josue', apellido:'Cayetano', ocupacion: 'Programador', nivel:0},
            
            {nombre:'Claudia', apellido:'German', ocupacion: 'Dise;adora Web', nivel:0},
            
            {nombre:'Luis', apellido:'Santana', ocupacion: 'Drogadicto', nivel:0}
        ],

        nuevonombre: '',
        nuevoapellido:'',
        nuevaocupacion:'',
        nuevonivel: 0,
        total: 0

    }, 

    methods:{

        AgregarPersona(){

            this.personas.push({
                nombre: this.nuevonombre,
                apellido: this.nuevoapellido,
                ocupacion: this.nuevaocupacion,
                nivel:0
            })
            this.Limpiar();

        },

        Limpiar(){

            this.nuevonombre= ''
            this.nuevoapellido=''
            this.nuevaocupacion=''
            

        }

    },

    computed:{

        SumarNivel(){
            this.total = 0;
            for(persona of this.personas){

                this.total = this.total+persona.nivel;

            }
            return this.total;    


        }

    }



});