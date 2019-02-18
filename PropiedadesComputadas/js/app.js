const app =  new Vue({

el: '#app',

data:{

    mensaje: "Reconocer",
    contador:0,

    

},

methods:{



},

computed:{

    invertido: function(){

        return this.mensaje.split('').reverse().join();

    },

    color(){

        return {

            'bg-success': this.contador <=10,
            'bg-dark': this.contador>10 && this.contador<20,
            'bg-primary': this.contador>20 && this.contador<40,
            'bg-danger' : this.contador>40
        }

    }


}



});