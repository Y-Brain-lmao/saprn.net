<template>
 <Navbar/>
  <router-view/>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;500&display=swap');

 *{
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
 }
 #app{
  background-color: #E5E5E5;
  width: 100vw;
  height: 100vh;
  max-width: 100vw;
  
 }
 a{
  text-decoration: none;
  color:#373737
 }
</style>


<script>
import Navbar from "./components/HelloWorld"
export default {
 components:{
   Navbar
 }
}
</script>
