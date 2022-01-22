<template>
  <v-container justify="center">
    <v-col 
      cols="12"
      sm="6"
      md="6"
      lg="6"
    >
    <v-layout class="">
      <h2 class="display-2">Login de Usuarios</h2>
    </v-layout>
    <ul>
      <v-layout mt-5 v-if="errors.length">
        <li>
          <v-alert dense outlined type="error" v-for="(error,index) in errors" :key="index" md12>
            {{ error }}
          </v-alert>
        </li>
      </v-layout>
    </ul>

    <v-layout wrap mt-5 justify-center xs12 md6>
        <v-flex xs12 md12 wrap>
          <v-text-field placeholder="E-mail" v-model="formulario.email" @click="limpiarvalidacion"></v-text-field>
        </v-flex>
        <v-flex xs12 md12 wrap>
          <v-text-field type="password" counter="20" placeholder="Password" v-model="formulario.password" auto-complete="off" required></v-text-field>
        </v-flex>
    </v-layout>
    <v-layout mt-5 justify-center>
      <v-btn color="light-blue darken-4" elevation="9" large x-large dark @click="registrar">Ingresar</v-btn>
    </v-layout>
    <template>
      <div class="text-center">
        <v-dialog v-model="dialog" width="500" >
          <v-card>
            <v-card-title class="text-h5 grey lighten-2">
              Mensaje Curso AlfaWeb
            </v-card-title>
            <v-card-text class="espace15">
              <h4>{{ message }}</h4>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" text @click="dialog = false">Aceptar</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
    </template>
    </v-col>
  </v-container>
</template>

<script>
// import Firebase from 'firebase'
import { mapActions, mapState } from 'vuex';
// import axios from 'axios'

export default {
  data () {
    return {
      errors:[],
      loading: true,
      formulario:{
        email: "",
        password: "",
      },
      dialog: false,
      message:'',
      user:'',
    }
  },
  methods:{
    ...mapActions(['cambiarestado']),
    ...mapState(['estado']),
    registrar(){
      this.errors=[];
       if (!this.formulario.email) {
        this.errors.push('El correo electrónico es obligatorio.');
      } else if (!this.validEmail(this.formulario.email)) {
        this.errors.push('El correo electrónico debe ser válido.');
      }
      if (!this.formulario.password) {
        this.errors.push("La password es obligatoria.");
      }
      if (this.formulario.password.length>20) {
        this.errors.push("El largo de la password ha excedido el limite.");
      }
      if (this.errors.length>0){
        return false;
      }else{
        // const axiosInstance = axios.create({headers: {"Access-Control-Allow-Origin": "*"}});
        // axiosInstance
        // //SE COMENTA ACCESO A API POR ESTAR Access-Control-Allow-Origin has been blocked by CORS
        // .post('http://157.230.190.251/api/v1/cmodels/users/login', {
        //   username: this.email, 
        //   password: this.password
        // })
        // .then((accept) =>{
        //   console.log(accept);
        //   this.cambiarestado(); 
        //   this.$router.push({name : 'home'});
        //   this.estado=true;
        // })
        // .catch(e =>{
        //   this.cambiarestado(); 
        //   console.log(e)
        // })
        this.cambiarestado();
        this.$router.push({name : 'home'});
       
      }
    },
    validEmail(email) {
      var re = /\w+@\w+\.+[a-z]/;
      return re.test(email);
    },
    limpiarvalidacion(){
      this.errors=[];
    },

  },
  mounted(){
    this.loading=false;
  },
  computed:{
    ...mapState(['estado']),
  }

}
</script>

<style scope>
button{
  margin-left: 15px;
  margin-right: 15px;
}
li{
  width: 100%;
  list-style: none;
}
.espace15{
  margin-top: 15px;
}

.principal{
  width: 300px;  
}


</style>