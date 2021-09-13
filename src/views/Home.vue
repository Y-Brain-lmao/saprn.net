<template>
  <div id="mascot"></div>
  <div id="welcome">
    <h3>CHÀO MỪNG BẠN ĐẾN VỚI SARPN.NET</h3>
    <h6>Hy vọng Server Gta San SARPN.NET sẽ mang đến cho bạn những <br> phúc giây vui vẻ cùng với bạn bè!!!!</h6>
    <button @click="doSomething()" ripple>Khám phá</button>
  </div>
</template>

<script>
export default {
  name: "Home",
  methods:{
    doSomething(){
      console.log("Do Something")
    }
  }
};
</script>
<style scoped>
#mascot {
  width: 50vw;
  height: 70vh;

  background: url("../assets/img/mascot.png");
  background-repeat: no-repeat;
  margin-left: 680px;
  margin-top: 80px;
}
#welcome {
  position: absolute;

  width: 727px;
  height: 98px;
  top: 50%;
  

  font-family: Roboto;
  
  text-align: center;

  color: #373737;
}
#welcome h3{
font-style: normal;
  font-weight: bold;
  font-size: 25px;
}
#welcome h6{
 font-size:15px;
 font-weight: 350;
 padding-top:10px

}
#welcome button {
 color:white;
 background-color: #3A46D6; /*Nếu như browser không support linear */
 background-image: linear-gradient(to left,#3A46D6,#030627);
 border:none;
 border-radius: 100px;
 padding: 15px;
 padding-left: 30px;
  padding-right: 30px;

 font-weight: 250;
 filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
 margin-top: 15px;
}
button:hover{
        cursor: pointer;

}
[ripple] .ripple--container .ripple--body {
  opacity: 0.5 !important;
  background-color: rgba(0, 0, 0, 0.1) !important;
  -webkit-animation: rippler 2500ms;
          animation: rippler 2500ms;
}
</style>
