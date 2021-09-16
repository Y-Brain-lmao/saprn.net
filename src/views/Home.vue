<template>
  <div class="welcome">
    <div id="mascot"></div>
    <div id="welcome">
      <h3>CHÀO MỪNG BẠN ĐẾN VỚI SARPN.NET</h3>
      <h6>
        Hy vọng Server Gta San SARPN.NET sẽ mang đến cho bạn những <br />
        phúc giây vui vẻ cùng với bạn bè!!!!
      </h6>
      <button @click="doSomething()" ripple>Khám phá</button>
    </div>
  </div>
  <div class="aboutUs">
    <img
      src="https://s3-alpha-sig.figma.com/img/3f68/62f8/1cd1805c9488c00e4ce9931d7d6cc9f9?Expires=1632700800&Signature=MLzJ0FOcwKV5gNNdzKExIamupLOq5g3boY3f1kLcTJ3K4vNjZP~MpATJiiyn3gxr29HfaYzDjm2odGukzF1Pio51mbUKrTICCqBGeGxyktqiCxhOpVYfLAg8S~fTe1XJXphNAvWOkMOiwuRj39LFJ8MF2xbw7j-vedOyPLdcrcVpUi1fQtHgbxQvUhNSXyaLdhRFpwlddkOqXZrNdfK2onySeGy14BCafcbqB2pLkeido3LBiREr6gn5Y80C-8kJIOvPeOh60eKMh7B8QfEFxb6j18ctg95FCKwiQaXFuafw~vNInNvuYKuX~S0ffUVL~KBiudaUSwG4PoP1j9ff9A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
      alt="image"
    />
    <h4 style="text-shadow: 1px 1px #D1D1D1;">Về chúng tôi</h4>
    <div class="group1  w3-panel w3-mobile" id="about1">
      <div class="content">
        <h2 style="font-weight:400">
          Bạn sẽ trải nghiệm được những gì khi chơi máy chủ của chúng tôi?
        </h2>
        <p style="font-weight:200">
          Sự tận tình hỗ trợ từ các admin,các cộng tác viên,các eshop,thậm chí
          là các member thân thiện khác đang sinh sống và làm việc tại SARPN.NET
        </p>
      </div>
    </div>
    <div class="group1 group2" id="about2">
      <div class="content">
        <h2 style="font-weight:400;">
        Mục đích thành lập máy chủ SARPN.NET là gì?
        </h2>
        <p style="font-weight:200">
          Chúng tôi là những người muốn góp một ít gì đó vào cộng đồng GTA SAN ONLINE của Việt Nam. Và bạn, chính bạn những member chơi game một cách có ích cho cộng đồng hãy giúp đỡ, có ý thức để máy chủ SARPN.NET phát triển mạnh         

        </p>
      </div>
    </div>
    <div class="bxh w3-container">
      <table class="w3-table-all">
        <tr>
          <th></th>
          <th style="font-weight:500"><h3>BXH</h3></th>
          <th></th>
        </tr>
        <tr style="background-color:#E0E1FF">
          <th>STT</th>
          <th>USERNAME</th>
          <th>Level</th>
        </tr>
        <tr>
          <td>Jill</td>
          <td>Smith</td>
          <td>50</td>
        </tr>
        <tr style="background-color:#E0E1FF">
          <td>Eve</td>
          <td>Jackson</td>
          <td>94</td>
        </tr>
        <tr>
          <td>Adam</td>
          <td>Johnson</td>
          <td>67</td>
        </tr>
        <tr style="background-color:#E0E1FF">
          <td>Bo</td>
          <td>Nilson</td>
          <td>35</td>
        </tr>
      </table>
    </div>
  </div>
  <div class="footer">
    <div class="rule">
      <h3 style="font-weight:500;text-align:center;padding-top:10px">
        Một số lưu ý khi tham gia máy chủ
      </h3>
      <h5>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore totam
        velit at officia a laboriosam qui ab, exercitationem non veniam sapiente
        eum voluptatum repudiandae unde molestiae praesentium quis quaerat eius.
      </h5>
      <h5>
        <button class="w3-button w3-blue w3-round-xxlarge">Xem luật</button>
      </h5>
      <div class="img">
           <h5 style="font-size:90%">
              <img src="../assets/img/logo.png" class="w3-image" width="180" height="180" alt=""><br>
              <div class="icon">
              <a href="#"><i class="fab fa-facebook"></i></a>
              <a href="#">              <i class="fab fa-discord" style="margin-left:50px"></i>
</a>

              </div>

           </h5>
           
      </div>
      
    </div>
  </div>
</template>

<script>
import "../assets/css/home.css";
export default {
  name: "Home",
  data() {
    return {
      bxh: "<<<Bảng xếp hạng>>>",
    };
  },
  methods: {
    doSomething() {
      console.log("Do Something");
    },
  },
};
</script>
<style scoped></style>
