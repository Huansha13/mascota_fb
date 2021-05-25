<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" height="40">
    <div class="">
      <form @submit.prevent="saveMascot">
        <input type="text" v-model="nombre" placeholder="Nombre">
        &nbsp;
        <input type="text" v-model="tipo" placeholder="Tipo">
        &nbsp;
        <input type="text" v-model="edad" placeholder="Edad">
        <button type="submit">Guardar</button>
        <pre>{{$data}}</pre>
      </form>
    </div>
    <h1>Lista de mascotas</h1>
    <div style="width: 100%; margin-bottom: 5px; padding-bottom: 5px; border-bottom: 1px solid #2c3e50"></div>
    <br>
    <table style="margin: 0 auto; width: 100% ">
      <tr>
        <th>Id</th>
        <th>Nombre</th>
        <th>Tipo</th>
        <th>Edad</th>
      </tr>
      <tr v-for="m in mascotas" :key="m.id">
        <td>{{m.id}}</td>
        <td>{{m.nombre}}</td>
        <td>{{m.tipo}}</td>
        <td>{{m.edad}}</td>
      </tr>
    </table>
  </div>
</template>
<script>
import {mapActions, mapState} from 'vuex';
import app from '../firebase'
export default {
  name: 'Home',
  components: {},
  data: () => ({
    nombre: '',
    edad: 0,
    tipo: ''
  }),
  methods: {
    ...mapActions(['getMacotas']),
    saveMascot() {
      app.database().ref('mascotas').push({
        nombre: this.nombre,
        tipo: this.tipo,
        edad: this.edad
      })
    }
  },
  computed: {
    ...mapState(['mascotas'])
  },
  created() {
    this.getMacotas()
  }
}
</script>

