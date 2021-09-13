<template>
<div id="Navbar">
 <div id="logo">
  <router-link to="/">
  <img src="../assets/img/logo.png" width="120" height="120" alt="">
    </router-link> 
 </div>
 <div id="event">
    <router-link to="/su-kien">Sự kiện</router-link>
 </div>
 <div id="forum">
  <router-link to="/forum">Diễn Đàn</router-link>

 </div>
   <div id="card">
  <router-link to="/nap-the">Nạp thẻ</router-link>

 </div>
 <div id="dow">
  <a href="">Tải game</a>

 </div>
</div>

    
</template>

<script>
export default {
 name:"Navbar"
}
</script>

<style>
img{
    position: absolute;
    text-align: center;

}
#Navbar{
 display: grid;
 grid-template-columns: .45fr 1.55fr 1fr 1fr .75fr .75fr .75fr .75fr 1.25fr 1.25fr 1.25fr 1.25fr 1.25fr .75fr;
}
#logo{
 grid-column: 2;
 text-align: center;
}
#event{
 grid-column: 10;
}
#forum{
grid-column: 11;
}
#card{
 grid-column: 12;
}
#dow {
 grid-column: 13;
}
#event,#forum,#card,#dow {
 margin-top: 50px;
}
</style>