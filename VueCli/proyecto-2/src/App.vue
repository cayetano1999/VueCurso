<template>
  <div id="app" class="text-center container">
    
    <img alt="Vue logo" src="./assets/logo.png">
    <Cabecera titulo="Lista de Frutas Vue"></Cabecera>
    <Formulario class="mt-2 mb-2"></Formulario>
    
    <lista></lista>
    
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Cabecera from './components/Cabecera'
import Lista from './components/Lista'
import Formulario from './components/Formulario'

export default {
  name: 'app',
  components: {
    HelloWorld,
    Cabecera,
    Lista,
    Formulario

  },

 
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
