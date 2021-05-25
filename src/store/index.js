import { createStore } from 'vuex';
import app from '../firebase';

export default createStore({
  //aqui definimos las variales globales para ser utilizados en las vistas
  state: {
    // mpstrar mascotas, atributos, variables que vamos ocupar
    mascotas:[]
  },
  mutations: {
    // principalmente, las vistas no modifican las variables
    setMascotas(state, value) {
      state.mascotas = value;
      console.log('data', state.mascotas);
    }
  },
  actions: {
    // para peticiones http
    getMacotas({commit}) {
      const list = [];
      app.database().ref('mascotas').on("value", (data) => {
        // limpiar la coleccion
        for(let i=list.length -1; i>=0; i--){
          list.splice(i, 1);
        }
        //firebase
        data.forEach((obj) => {
          let m = obj.val();
          m.id = obj.key;
          list.push(m);
        });
      });
      //enviar la coleccion al mutation
      commit('setMascotas', list);
    },
  },
  modules: {
    //
  }
})
