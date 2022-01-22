import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loadind:false,
    cursos:[],
    estado:false,
    todos:[],
    kpis:[],
    kpisuo:[],
    kpisud:[],
  },

  mutations: {
    loadingTable(state){
      state.loadind=true;
    },


    setEstado(state){
      state.estado=!state.estado
    },


    setKpis(state,datos){
      state.kpis = datos;
      state.loading = false;
    },
    setKpisuo(state,datos){
      state.kpisuo = datos;
      state.loading = false;
    },
    setKpisud(state,datos){
      state.kpisud = datos;
      state.loading = false;
    },

  },
  actions: {
    // EXTRAE ESTADISTICA
    getEstadistica(context){
      context.commit("loadingTable");
      axios.get('http://157.230.190.251/api/v1/cmodels/secure/dashboard')
        .then((accept) =>{
          let kpis = accept.data.kpis;
          let kpi_uo = accept.data.utimas_ordenes;
          let kpi_ud =accept.data['ultimas_devoluciones:']

          let array_kpi =[]
          Object.values(kpis).forEach((kpi,index)=>{
            kpi.id=Object.keys(kpis)[index]
            if (kpi.id==0){
              array_kpi.push({id: kpi.id, nombre: kpi.nombre, entregadas: kpi.entregadas, pendientes: kpi.pendientes})
            }else{
              array_kpi.push({id: kpi.id, nombre: kpi.nombre, totales: kpi.totales, atrasadas: kpi.atrasadas})
            }
          })

          let array_kpiuo =[]
          Object.values(kpi_uo).forEach((kpi,index)=>{
            kpi.id=Object.keys(kpi_uo)[index]
            array_kpiuo.push({id: kpi.id, num_orden: kpi.num_orden, cliente: kpi.cliente, fecha: kpi.fecha_entrega, estado: kpi.estado})
          })

          let array_kpiud =[]
          Object.values(kpi_ud).forEach((kpi,index)=>{
            kpi.id=Object.keys(kpi_ud)[index]
            array_kpiud.push({id: kpi.id, num_orden: kpi.num_orden, cliente: kpi.cliente, fecha: kpi.fecha_entrega})
          })
          context.commit('setKpis',array_kpi)
          context.commit('setKpisuo',array_kpiuo)
          context.commit('setKpisud',array_kpiud)
        });

    },
    // CAMBIAR ESTADO DE USUARIO
    cambiarestado({commit}){
      commit("loadingTable");
      commit("setEstado");
      commit("loadingTable");
    },
   
  },
  getters:{},
})
