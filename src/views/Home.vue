<template>
  <div class="general">
    <Header/>
    <Cumplimientos/>
    
  </div>
</template>

<script>

import Header from '@/views/Home/Header.vue'
import Cumplimientos from '@/views/Home/Cumplimientos.vue'
  export default {
    name: 'Home',
    components: { Header, Cumplimientos },
  }
</script>

<style scope>

.vitrina {
  border: 1px solid rgb(182, 179, 179);
  border-radius: 5px;

}
.sub{
  margin: 5px;
  height: 400px;
  background-color: rgb(182, 179, 179);
  border-radius: 5px ;
  display: grid;
  font-size: 1.2rem;
  text-align: center;
  align-content: center;
}
.general{
  width: 100%;
  padding: 10px;
}
</style>
  
