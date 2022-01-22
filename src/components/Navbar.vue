<template>
  <v-app-bar app color="white" :class="{'fondoactivo' : estado}">
      <v-btn href="" to="/" text>
        <img alt="Logo empresa" src="@/assets/empresa.png" >
      </v-btn>
      <!-- SI ESTA LOGEADO MUESTRA ESTAS OPCIONES -->
      <template v-if="estado">
        <v-btn href="" to="/admin" text disabled>
          <span class="mr-2">Company</span>
        </v-btn>
        <v-btn href="" to="/admin" text  >
          <span class="mr-2">Home</span>
        </v-btn>
        <v-btn href="" to="/admin" text  disabled>
          <span class="mr-2">Ordenes</span>
        </v-btn>
        <v-btn href="" to="/admin" text disabled>
          <span class="mr-2">Inventario</span>
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn href="" to="/admin" text disabled>
          <span class="mr-2">Profile</span>
        </v-btn>
        <v-btn  @click="cerrarSesion" placeholder="Logout">Logout</v-btn>
      </template>
      <!-- SI NO ESTA LOGUEADO MUESTRA ESTAS OPCIONES -->
    </v-app-bar>
</template>

<script>
// import Firebase from 'firebase'
import { mapActions, mapState } from 'vuex';

  export default {
    data: () => ({
      user:null,
    }),
    // SI ESTA LOGUEADO RESCATA EL USUARIO.
    created(){
      if (this.estado==false){
        console.log("negativo");
      }else{
        console.log("positivo");
      }
      // Firebase.auth().onAuthStateChanged(user => {
      //   if (user){
      //     this.user=user
      //   }else {
      //     this.user=null
      //   }
      // })
    },
    methods:{
      ...mapActions(['cambiarestado']),
      // CERRAR LA CESION.
      cerrarSesion(){
        // this.$router.matched.meta.login=false;
        // Firebase.auth().signOut().then(() => {
        //     this.user=null;
        //     const options= {type:"success",message:"Usuario desconectado correctamente"};
        //     this.$message({
        //       ...options,
        //     });
        //     //elimar error de errutar 
        //     this.$router.push({name: 'home'}).catch(() => {});
          
        // });
        this.cambiarestado(); 
        this.$router.push({name: 'login'}).catch(() => {});
      },
    },
    computed:{
      ...mapState({
        estado: (state) =>{
          return state.estado;
        }
      })
    }
  }
</script>

<style scope>

img{
  width: 50px;
  height: 50px;
}
.fondoactivo{
  background-color: black;
  color:white;
}
</style>