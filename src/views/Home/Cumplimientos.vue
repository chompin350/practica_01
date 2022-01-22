<template>
  <div class="grafica">
    <v-row>
      <v-col cols="12" sm="6" dense outlined type="error" >
        <v-row class="border">
          <v-col cols="12" sm="4" dense outlined type="error" >Grafico</v-col>
          <v-col cols="12" sm="8" dense outlined type="error" >
            <h3>{{ kpis[0].nombre}}</h3>
            <v-row>
              <v-col cols="12" sm="6" dense outlined type="error" >
                <span class="letranegra">{{ kpis[0].entregadas}}</span>    
              </v-col>
              <v-col cols="12" sm="6" dense outlined type="error" >
                <span class="letranegra">{{ kpis[0].pendientes}}    </span>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="12" sm="6" dense outlined type="error">
        <v-row class="border">
          <v-col cols="12" sm="4" dense outlined type="error" >Grafico</v-col>
          <v-col cols="12" sm="8" dense outlined type="error" >
            <h3>{{ kpis[1].nombre}}</h3>   
            <v-row>
              <v-col cols="12" sm="6" dense outlined type="error" >
                <span class="letranegra">{{ kpis[1].totales}}</span>    
              </v-col>
              <v-col cols="12" sm="6" dense outlined type="error" >
                <span class="letranegra">{{ kpis[1].atrasadas}}    </span>
              </v-col>
            </v-row> 
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <v-row>
      <v-col
        cols="12"
        sm="6"
        dense
        outlined
        type="error"
      >
      Ultimas Ordenes
      </v-col>
      <v-col
        cols="12"
        sm="6"
        dense
        outlined
        type="error"
      >
      Ultimas devoluciones
      </v-col>
    </v-row>
    {{ kpisuo }}
  </div>
</template>

<script>

import { mapActions, mapState} from 'vuex';
export default {

  methods:{
    ...mapActions(["getEstadistica"]),
  },
  mounted(){
    this.getEstadistica();
  },
  computed:{
    ...mapState(["kpis","kpisuo","kpisud"])
  },
  
}
</script>

<style scoped>

.border{
  border-radius: 5px;
  border: 1px solid gray;
}
.letranegra{
  font: 500;
  font-size: 2rem;
}
.grafica{
  margin-top: 1rem;
  padding: 10px;
}
</style>