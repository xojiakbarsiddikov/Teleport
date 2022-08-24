<template>
 <div class="container__23">
   <div class="content__23">
     <div class="product_2 margin_3" v-for="card in cards" :key="card.id">
       <div class="wrapper_1">
         <div class="card-text color">
           <div class="box">{{ card.id }}</div>
           <h4>{{ card.my_site }}</h4>
         </div>
         <div class="main">
           <div class="contact">
             <div class="img">
               <img src="../assets/img/bx_bxs-user-circle.svg" alt="contact">
             </div>
             <div class="text-wrapper">
               <h4>{{ card.blogger }}</h4>
               <div class="box_2">
                 <ul>
                   <li>{{ card.active }}</li>
                 </ul>
               </div>
             </div>
           </div>
           <div class="id_wrapper">
             <div class="main-text">
               <p class="margin">{{ card.id_text }}</p>
               <p>{{ card.ru }}</p>
             </div>
           </div>
         </div>
         <div class="main-footer">
           <div class="main_1">
             <p class="p">{{ card.follower }}</p>
             <div class="boxsing">
               <div class="wrap">
                 <i class="fa-solid fa-user"></i>
               </div>
               <p class="number_2">{{ card.number }}</p>
             </div>
           </div>
           <div class="main_1">
             <p class="p">{{ card.ctr }}</p>
             <div class="boxsing">
               <div class="wrap background-red">
                 <i class="fa-solid fa-chart-pie color-red"></i>
               </div>
               <p class="number_2 color-red">{{ card.number_2 }}</p>
             </div>
           </div>
           <div class="main_1">
             <p class="p">{{ card.watch }}</p>
             <div class="boxsing">
               <div class="wrap background-yellow">
                 <i class="fa-solid fa-eye color-yellow"></i>
               </div>
               <p class="number_2 color-yellow">{{ card.number_3 }}</p>
             </div>
           </div>
         </div>
       </div>
       <div class="wrapper_2">
         <div class="btn_wrapper_2">
           <el-button  type="primary" class="btn_1">
             <i class="fa-solid fa-pencil"></i>
             <span>{{ card.change }}</span>
           </el-button>
           <el-button type="primary" class="btn_2">
             <i class="fa-solid fa-folder-open"></i>
             <span>{{ card.open }}</span>
           </el-button>
         </div>
         <div class="footer_btn">
           <div class="folder" v-if="change"></div>
             <img src="../assets/img/Postpone.svg" class="img" @click="add" alt="folder-next">
           <i class="fa-solid fa-link"></i>
           <img src="../assets/img/Duplicate.svg" alt="duplicate">
           <i class="fa-solid fa-signal"></i>
           <i class="fa-solid fa-trash-can"></i>
         </div>
         <p class="p-text" v-if="inshow">Переместить</p>
       </div>
     </div>
     <div class="footer-text" @click="true_2" v-if="box">
       <p>{{ loading }}</p>
     </div>
       <div class="main_7"  v-if="active">
         <div class="product_2 margin_3" v-for="card in cards" :key="card.id">
           <div class="wrapper_1">
             <div class="card-text color">
               <div class="box">{{ card.id_3 }}</div>
               <h4>{{ card.my_site }}</h4>
             </div>
             <div class="main">
               <div class="contact">
                 <div class="img">
                   <img src="../assets/img/bx_bxs-user-circle.svg" alt="contact">
                 </div>
                 <div class="text-wrapper">
                   <h4>{{ card.blogger }}</h4>
                   <div class="box_2">
                     <ul>
                       <li>{{ card.active }}</li>
                     </ul>
                   </div>
                 </div>
               </div>
               <div class="id_wrapper">
                 <div class="main-text">
                   <p class="margin">{{ card.id_text }}</p>
                   <p>{{ card.ru }}</p>
                 </div>
               </div>
             </div>
             <div class="main-footer">
               <div class="main_1">
                 <p class="p">{{ card.follower }}</p>
                 <div class="boxsing">
                   <div class="wrap">
                     <i class="fa-solid fa-user"></i>
                   </div>
                   <p class="number_2">{{ card.number }}</p>
                 </div>
               </div>
               <div class="main_1">
                 <p class="p">{{ card.ctr }}</p>
                 <div class="boxsing">
                   <div class="wrap background-red">
                     <i class="fa-solid fa-chart-pie color-red"></i>
                   </div>
                   <p class="number_2 color-red">{{ card.number_2 }}</p>
                 </div>
               </div>
               <div class="main_1">
                 <p class="p">{{ card.watch }}</p>
                 <div class="boxsing">
                   <div class="wrap background-yellow">
                     <i class="fa-solid fa-eye color-yellow"></i>
                   </div>
                   <p class="number_2 color-yellow">{{ card.number_3 }}</p>
                 </div>
               </div>
             </div>
           </div>
           <div class="wrapper_2">
             <div class="btn_wrapper_2">
               <el-button  type="primary" class="btn_1">
                 <i class="fa-solid fa-pencil"></i>
                 <span>{{ card.change }}</span>
               </el-button>
               <el-button type="primary" class="btn_2">
                 <i class="fa-solid fa-folder-open"></i>
                 <span>{{ card.open }}</span>
               </el-button>
             </div>
             <div class="footer_btn">
               <div class="folder"></div>
               <img src="../assets/img/Postpone.svg" class="img" alt="folder-next">
               <i class="fa-solid fa-link"></i>
               <img src="../assets/img/Duplicate.svg" alt="duplicate">
               <i class="fa-solid fa-signal"></i>
               <i class="fa-solid fa-trash-can"></i>
             </div>
             <p class="p-text" v-if="show3">Переместить</p>
           </div>
         </div>
       </div>
     <div class="text_2" v-if="collapse_2" @click="collapse_add">
       <p>{{ collapse }}</p>
     </div>
   </div>
 </div>
</template>

<script>
import axios from 'axios'
export default {
name: "myPage",
  data() {
    return {
      cards: [],
      loading: "еще",
      collapse: "свернуть",
      active: false,
      active_2: false,
      box: true,
      change_4: false,
      change_3: false,
      collapse_2: false,
      show4: false,
      show3: false,
    }
  },
  methods: {
    add() {
      this.change = true
      this.change_2 = false
      this.change_4 = false
      this.inshow = true
      this.change_3 = false
      this.show = false
      this.show3 = false
      this.show4 = false
      this.show1 = false
    },
    add1() {
      this.change = false
      this.change_2 = false
      this.change_4 = false
      this.inshow = false
      this.change_3 = true
      this.show = false
      this.show3 = true
      this.show4 = false
      this.show1 = false
    },
    add2() {
      this.change = false
      this.change_2 = false
      this.change_3 = false
      this.change_4 = true
      this.inshow = false
      this.show = false
      this.show3 = false
      this.show4 = true
      this.show1 = false
    },
    create() {
      this.change = false
      this.change_2 = true
      this.change_3 = false
      this.change_4 = false
      this.inshow = false
      this.show = true
      this.show3 = false
      this.show4 = false
      this.show1 = false
    },
    true_2() {
      setTimeout(() => {
        this.active = true
        this.active_2 = true
        this.collapse_2 = true
      }, 250)
      this.box = false
    },
    collapse_add() {
      setTimeout(() => {
        this.active = false
        this.active_2 = false
        this.box = true
      }, 250)
        this.collapse_2 = false
    }
  },
  mounted() {
    axios
        .get('http://localhost:3000/card')
        .then(response => (this.cards = response.data))
  }
}
</script>

<style scoped>
 .btn_1 {
   width: 236px;
   height: 46px;
   background: #2C3955;
   border-radius: 4px;
   border: none;
   font-weight: 500;
   font-size: 14px;
   line-height: 17px;
   letter-spacing: 0.5px;
   color: #68A4FF;
 }
 .text_2 p {
   font-size: 16px;
   line-height: 20px;
   text-align: center;
   color: #68A4FF;
   margin: 0 0 50px;
   cursor: pointer;
 }
 .p-text{
   font-weight: 700;
   font-size: 12px;
   line-height: 14px;
   letter-spacing: 0.5px;
   color: #FFFFFF;
   margin: 20px 0 0;
 }
 @keyframes mymove {
   from {left: 0px;}
   to {left: 200px;}
 }
 .fa-signal, .fa-link, .fa-tr, .fa-trash-can {
   color: #68A4FF;
 }
 .footer_btn {
   display: flex;
   align-items: center;
   justify-content: space-between;
   margin: 30px 0 0;
 }
 .folder {
   width: 48px;
   height: 48px;
   background: #0057FF;
   border-radius: 40px;
   display: flex;
   justify-content: center;
   align-items: center;
   position: absolute;
 }
 .img {
   position: relative;
   left: 12px;
   width: 24px;
   height: 24px;
 }
 .content__23 {
   width: 79%;
 }
 .product_2 {
   height: 225px;
   background: #272C44;
   border-radius: 4px;
   padding: 22px;
   display: flex;
   justify-content: space-between;
 }
 .footer-text p {
   font-size: 16px;
   line-height: 20px;
   text-align: center;
   color: #68A4FF;
   margin: 0 0 26px;
   cursor: pointer;
 }
 .margin_3 {
   margin: 0 0 16px;
 }
 .folder img {
   width: 24px;
   height: 24px;
 }
 .fa-folder-open, .fa-pencil{
   margin: 0 6px;
 }
 .main_1 {
   margin: 0 37px 0;
 }
 .container__23 {
   display: flex;
   justify-content: end;
   max-width: 98%;
   font-family: 'Poppins', sans-serif;
   background: linear-gradient(117.42deg, #1E212D 0%, #21273D 0.01%, #1D202E 91.49%);
   height: 53.6vh;
 }
 .btn_2 {
   width: 236px;
   height: 46px;
   opacity: 0.8;
   border: 1px solid #68A4FF;
   border-radius: 4px;
   background: transparent;
   display: block;
   margin: 10px 0 0;
   color: #68A4FF;
   font-weight: 500;
   font-size: 14px;
   line-height: 17px;
   letter-spacing: 0.5px;
 }
 .card-text{
   display: flex;
   margin: 0 0 22px;
 }
 .card-text h4 {
   font-weight: 500;
   font-size: 20px;
   line-height: 24px;
   margin: 0 17px 0;
 }
 .color-yellow{
   color: #FD9331!important;
   width: 52px;
   display: flex;
   justify-content: center;
   align-items: center;
 }
 .background-yellow {
   background: #FD9331;
 }
 .color {
   color: #FFFFFF;
 }
 .background-red {
   background: #BC31FD20!important;
 }
 .wrapper_2 {
   margin: 0 13px;
 }
 .box {
   width: 25px;
   height: 25px;
   background: #0057FF;
   border-radius: 3px;
   display: flex;
   justify-content: center;
   align-items: center;
 }
 .img img {
   width: 60px;
   height: 60px;
 }
 .color-red {
   color: #BC31FD!important;
 }

 .text-wrapper {
   margin: 0 67px;
 }
 .number_2{
   font-weight: 500;
   font-size: 20px;
   line-height: 24px;
   margin: 0 8px 0;
 }
 .text-wrapper h4 {
   font-weight: 500;
   font-size: 18px;
   line-height: 21px;
   color: #FFFFFF;
   margin: 0 0 11px;
 }
 .main-footer {
   margin: 22px auto 0;
   display: flex;
   align-items: center;
   width: 60%;
 }
 ul li {
   font-weight: 600;
   font-size: 14px;
   line-height: 17px;
   color: #81C784;
   list-style-position: inside;
 }
 .margin {
   margin: 0 0 7px;
 }
 .contact {
   display: flex;
   justify-content: space-between;
   max-width: 13.6%;
   margin: 0 42px;
 }
 .boxsing p {
   font-weight: 500;
   font-size: 20px;
   line-height: 24px;
   color: #FD3162;
 }
 .box_2 {
   width: 109px;
   height: 25px;
   background: rgba(129, 199, 132, 0.1);
   border-radius: 4px;
   display: flex;
   justify-content: center;
   align-items: center;
 }
 .id_wrapper p{
   font-weight: 400;
   font-size: 14px;
   line-height: 17px;
   color: #94B3E2;
 }
 .main {
   display: flex;
   justify-content: space-between;
   align-items: center;
 }
 .wrap {
   width: 24px;
   height: 24px;
   background: #FD316223;
   border-radius: 4px;
   color: #FD3162!important;
   display: flex;
   justify-content: center;
   align-items: center;
   font-size: 15px;
 }
.p {
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #94B3E2;
  opacity: 0.78;
  margin: 0 0 7px;
}
.boxsing {
  display: flex;
}
</style>