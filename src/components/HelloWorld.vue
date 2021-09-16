<template>

 <div id="Navbar">
    <div id="logo" >
      <router-link to="/">
        <img src="../assets/img/logo.png" width="120" height="120" alt="" />
      </router-link>
    </div>
      <div id="event">
      <router-link to="/bxh">BXH</router-link>
    </div>
    <div id="forum">
      <router-link to="/forum">DIỄN ĐÀN</router-link>
    </div>
    <div id="card">
      <router-link to="/nap-the">NẠP THẺ</router-link>
    </div>
    <div id="dow">
      <router-link to="/dowland">TẢI GAME</router-link>
    </div>
    
    
 
  </div>

 


 
</template>

<script>
import "../assets/css/Navbar.css";
export default {
  name: "Navbar",
 
};
</script>

<style></style>
