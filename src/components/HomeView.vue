<template>
 <div class="container">
   <div class="content">
     <div class="nav-bar">
       <el-menu
           default-active="2"
           class="el-menu-vertical-demo"
           @open="handleOpen"
           @close="handleClose"
           text-color="#fff"
           active-text-color="#ffd04b">
         <div class="text_wrapper">
           <h1 class="fonts">Teleport</h1>
         </div>
         <el-submenu index="1">
           <div class="flex-box">
             <el-menu-item-group>
               <div class="df df1 margin_box hover">
                 <el-menu-item index="1-3"><i class="fa-solid fa-file font-size djs"></i></el-menu-item>
                 <el-menu-item index="1-3" class="text margin_2">{{ $store.state.name }}</el-menu-item>
               </div>
             </el-menu-item-group>
             <el-menu-item-group>
               <div class="df js">
                 <el-menu-item index="1-3" class="border"><i class="fa-solid fa-ruble-sign djs font-size"></i></el-menu-item>
                 <el-menu-item index="1-3" class="text left margin_2">{{ $store.state.balanse }}</el-menu-item>
                 <el-menu-item index="1-3" class="text left">
                   <span class="span2 background">{{ $store.state.number }}</span>
                 </el-menu-item>
               </div>
             </el-menu-item-group>
             <el-menu-item-group>
               <div class="df js1">
                 <el-menu-item index="1-3"><i class="fa-solid fa-globe font-size djs"></i></el-menu-item>
                 <el-menu-item index="1-3" class="text margin_2">{{ $store.state.document }}</el-menu-item>
               </div>
             </el-menu-item-group>
             <el-menu-item-group>
               <div class="df js2">
                 <el-menu-item index="1-3"><i class="fa-solid fa-users font-size djs"></i></el-menu-item>
                 <el-menu-item index="1-3" class="text">{{ $store.state.group }}</el-menu-item>
               </div>
             </el-menu-item-group>
             <el-menu-item-group>
               <div class="df js3">
                 <el-menu-item index="1-3"><i class="fa-solid fa-book-open font-size djs"></i></el-menu-item>
                 <el-menu-item index="1-3" class="text margin_4">{{ $store.state.education }}</el-menu-item>
               </div>
             </el-menu-item-group>
             <el-menu-item-group>
               <div class="df js4">
                 <el-menu-item index="1-3"><i class="fa-solid fa-gear font-size djs"></i></el-menu-item>
                 <el-menu-item index="1-3" class="text margin_2" style="margin: 0 9px;">{{ $store.state.setting }}</el-menu-item>
               </div>
             </el-menu-item-group>
           </div>
         </el-submenu>
         <el-submenu index="1">
           <div class="align-items">
             <div class="content_box">
               <el-menu-item-group>
                 <div class="df df1 flex_2">
                   <i class="fa-solid fa-arrow-right-from-bracket font-size djs"></i>
                   <el-menu-item index="1-3" class="text text_2">{{ $store.state.exit }}</el-menu-item>
                 </div>
               </el-menu-item-group>
               <el-menu-item-group>
                 <div class="df df1 flex_3">
                   <el-menu-item index="1-3" class="null"><i class="fa-solid fa-sun djs"></i></el-menu-item>
                   <el-menu-item index="1-3" class="text">{{ $store.state.tema }}</el-menu-item>
                   <el-form-item>
                     <el-switch v-model="form.delivery" aria-checked="true" class="checkbox" @change="soon"></el-switch>
                   </el-form-item>
                 </div>
               </el-menu-item-group>
             </div>
           </div>
         </el-submenu>
       </el-menu>
     </div>
     <vHeader class="header"/>
     <div class="modal">
       <MyDialog
           v-model:show="dialogVisible">
         <div class="box">
           <div class="flex-modal fonts">
             <h1>{{ modal }}</h1>
             <span class="button-close" @click="shoe_modal">
               <img :src="require(`@/assets/img/close.svg`)" alt="">
             </span>
           </div>
           <div class="form fonts">
               <label>Название папки</label>
               <input type="text" v-model="message" :placeholder="placeholder">
           </div>
           <div class="btn-modal">
             <el-button class="el-btn cancel" type="primary" @click="shoe_modal">{{ cancel }}</el-button>
             <el-button class="el-btn save" type="primary" @click="submit">{{ save }}</el-button>
           </div>
         </div>
       </MyDialog>
     </div>
     <div class="modal">
       <MyDialog
           v-model:show="dialogVisible2">
         <div class="box">
           <div class="flex-modal fonts">
             <div class="delete">
               <i class="fa-solid fa-trash-can"></i>
             </div>
             <span class="button-close" @click="el">
               <img :src="require(`@/assets/img/close.svg`)" alt="">
             </span>
           </div>
           <div class="form2 fonts">
             <h4>{{ $store.state.delete }}</h4>
             <p>{{ $store.state.delete_2 }}</p>
           </div>
           <div class="btn-modal2">
             <el-button class="el-btn cancel width" type="primary" @click="shoe_modal">{{ cancel }}</el-button>
             <el-button class="el-btn save width" type="primary" @click="remove">{{ $store.state.delete3 }}</el-button>
           </div>
         </div>
       </MyDialog>
     </div>
   </div>
   <div class="background_5">
     <div class="products_2">
       <div class="container__2">
         <div class="content__3">
           <div class="text-wrapper_22">
             <h1>{{ $store.state.folders }}</h1>
             <p>{{ $store.state.total }}</p>
           </div>
           <div class="btn">
             <el-button :class="{ background : change_3 }" @click="add" type="primary" plain class="span_3" style="color: #68A4FF">
               <i class="fa-solid fa-plus"></i>
               {{ $store.state.created }}
             </el-button>
           </div>
         </div>
       </div>
       <div class="product-container" style="z-index: 0;">
         <swiper :navigation="true" :modules="modules" class="mySwiper ">
           <swiper-slide class="product-card">
             <div class="container-card_2" v-for="(product, idx) in products" :key="product.id">
               <div class="card" :class="{white : !soon}">
                 <div class="content-flex">
                   <div class="number color">
                     <span>{{ idx += 1 }}</span>
                   </div>
                   <div class="edit color" @click="delete2">
                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512">
                       <path
                           d="M64 360C94.93 360 120 385.1 120 416C120 446.9 94.93 472 64 472C33.07 472 8 446.9 8 416C8 385.1 33.07 360 64 360zM64 200C94.93 200 120 225.1 120 256C120 286.9 94.93 312 64 312C33.07 312 8 286.9 8 256C8 225.1 33.07 200 64 200zM64 152C33.07 152 8 126.9 8 96C8 65.07 33.07 40 64 40C94.93 40 120 65.07 120 96C120 126.9 94.93 152 64 152z"/>
                     </svg>
                   </div>
                 </div>
                 <div class="column">
                   <div class="flex-direction">
                     <div class="img_card">
                       <img src="../assets/img/Folder.svg" alt="folder" v-if="night">
                       <img src="../assets/img/Folder2.svg" alt="" v-if="day">
                     </div>
                     <div class="text-footer-card">
                       <h1>{{ product }}</h1>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </swiper-slide>
           <swiper-slide class="product-card" style="justify-content: start!important;">
             <div class="card" v-for="(product, idx) in products" :key="product.id">
               <div class="content-flex">
                 <div class="number color">
                   <span>{{ idx += 8 }}</span>
                 </div>
                 <div class="edit color"  @click="delete2">
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512">
                     <path
                         d="M64 360C94.93 360 120 385.1 120 416C120 446.9 94.93 472 64 472C33.07 472 8 446.9 8 416C8 385.1 33.07 360 64 360zM64 200C94.93 200 120 225.1 120 256C120 286.9 94.93 312 64 312C33.07 312 8 286.9 8 256C8 225.1 33.07 200 64 200zM64 152C33.07 152 8 126.9 8 96C8 65.07 33.07 40 64 40C94.93 40 120 65.07 120 96C120 126.9 94.93 152 64 152z"/>
                   </svg>
                 </div>
               </div>
               <div class="column">
                 <div class="flex-direction">
                   <div class="img_card">
                     <img src="../assets/img/Folder.svg" alt="folder" v-if="night">
                     <img src="../assets/img/Folder2.svg" alt="" v-if="day">
                   </div>
                   <div class="text-footer-card">
                     <h1>{{ product }}</h1>
                   </div>
                 </div>
               </div>
             </div>
           </swiper-slide>
         </swiper>
       </div>
     </div>
       <div class="container-create">
         <div class="content_box_2">
           <div class="text_22">
             <h1>{{ $store.state.create }}</h1>
             <p>{{ $store.state.month }}</p>
           </div>
           <div class="btn_22">
             <el-button type="primary" plain class="span">
               <i class="fa-solid fa-plus"></i>
               {{ $store.state.created_2 }}
             </el-button>
           </div>
         </div>
       </div>
       <div class="container__23 my-page">
         <div class="content__23">
           <div class="product_2 margin_3" v-for="card in cards" :key="card.id">
             <div class="wrapper_1">
               <div class="card-text color">
                 <div class="box2">{{ card.id }}</div>
                 <h4>{{ card.my_site }}</h4>
               </div>
               <div class="main">
                 <div class="contact">
                   <div class="img">
                     <img src="../assets/img/bx_bxs-user-circle.svg" class="js11" alt="contact">
                     <img src="../assets/img/contact.svg" class="js22 dn" alt="folder-next">
                   </div>
                   <div class="text-wrapper">
                     <h4>{{ card.blogger }}</h4>
                     <div class="box_2">
                       <ul>
                         <li class="li">{{ card.active }}</li>
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
               <p class="p-text" v-if="inshow">Переместить</p>
             </div>
           </div>
           <div class="footer-text23" @click="true_2" v-if="box">
             <p class="p-text_2">{{ loading }}</p>
           </div>
           <div class="main_7"  v-if="inshow2">
             <div class="product_22 margin_3" v-for="card in cards" :key="card.id">
               <div class="wrapper_1">
                 <div class="card-text color">
                   <div class="box2">{{ card.id }}</div>
                   <h4>{{ card.my_site }}</h4>
                 </div>
                 <div class="main">
                   <div class="contact">
                     <div class="img">
                       <img src="../assets/img/bx_bxs-user-circle.svg" class="js11" alt="contact">
                       <img src="../assets/img/contact.svg" class="js22 dn" alt="folder-next">
                     </div>
                     <div class="text-wrapper">
                       <h4>{{ card.blogger }}</h4>
                       <div class="box_2">
                         <ul>
                           <li class="li">{{ card.active }}</li>
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
                 <p class="p-text" v-if="inshow">Переместить</p>
               </div>
             </div>
           </div>
           <div class="text_2" v-if="collapse_2" @click="collapse_add">
             <p>{{ collapse }}</p>
           </div>
         </div>
       </div>
   </div>
 </div>
</template>

<script>
import vHeader from "@/components/vHeader";
import {Swiper, SwiperSlide} from 'swiper/vue';
import MyDialog from "@/components/vDialog";
import "swiper/css";
import "swiper/css/navigation";
import {Navigation} from "swiper";
import axios from "axios";
export default {
name: "HomeView",
  data() {
    return {
      change: false,
      dialogVisible: false,
      dialogVisible_2: false,
      text_h1: false,
      click_h1: true,
      text_2: true,
      active_23: true,
      dialogVisible2: false,
      active_24: false,
      warning: false,
      day: false,
      night: true,
      products: [],
      posts: [],
      posts_2: [],
      cards: [],
      products_card: [],
      modal: "Переименовать папку",
      message: '',
      placeholder: "Введите название папки",
      cancel: "Отмена",
      save: "Сохранить",
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      change_23: false,
      change_2: false,
      show: false,
      loading: "еще",
      collapse: "свернуть",
      active: false,
      active_2: false,
      box: true,
      inshow2: false,
      change_4: false,
      change_3: false,
      collapse_2: false,
      show4: false,
      show3: false,
    }
  },
  setup() {
    return {
      modules: [Navigation],
    };
  },
  methods: {
    add() {
      this.change = true
      this.dialogVisible = true
    },
    shoe_modal() {
      this.dialogVisible = false
      this.change = false
    },
    showDialog() {
      this.dialogVisible = true
    },
    inshow() {
      this.dialogVisible = false
      let navbar = document.querySelector('.nav-bar')
        navbar.style.zIndex = '2'
      this.active = false
      this.active_2 = true
    },
    submit: function() {
      this.dialogVisible = false
      this.change = false
      this.warning = false;
      var counter = this.products.length;

      for (var i = 0; i < counter; i++) {
        if (this.products[i] === this.message) {
          this.warning = true;
          break;
        }
      }
      if (this.warning === false) {
        this.products.push(this.message);
        this.message = "";
      }
    },
    onSubmit() {
      console.log('submit!');
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    remove: function(x) {
      this.products.splice(x, 1);
      this.dialogVisible2 = false
    },
    delete2() {
      this.dialogVisible2 = true
    },
    add23() {
      this.change = true
      this.change_2 = false
      this.change_4 = false
      this.inshow2 = true
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
      let product = document.querySelector('.container__23')
      product.classList.toggle('height')
      setTimeout(() => {
        this.active = true
        this.active_2 = true
        this.inshow2 = true
        this.collapse_2 = true
      }, 250)
      this.box = false
    },
    collapse_add() {
      setTimeout(() => {
        let product = document.querySelector('.container__23')
        product.classList.remove('height')
        this.active = false
        this.active_2 = false
        this.inshow2 = false
        this.box = true
      }, 250)
      this.collapse_2 = false
    },
    el() {
      this.dialogVisible2 = false
    },
    soon() {
        let nav_bar = document.querySelector('.el-menu')
        let hover = document.querySelector('.hover')
        let text_wrapper = document.querySelector('.text_wrapper h1')
        let header = document.querySelector('.header')
        let my_page = document.querySelector('.my-page')
        let container = document.querySelector('.background_5')
        let p_text_2 = document.querySelector('.p-text_2')
        let card = document.querySelectorAll('.card')
        let text = document.querySelectorAll('.text')
        let dialog__content = document.querySelector('.dialog')
        let djs = document.querySelectorAll('.djs')
        let text_footer_card = document.querySelectorAll('.text-footer-card h1')
        let number = document.querySelectorAll('.number')
        let product = document.querySelectorAll('.product[data-v-78415a2a]')
        let number_2 = document.querySelector('.text-wrapper_22 h1')
        let number_3 = document.querySelector('.text_22 h1')
        let img1 = document.querySelectorAll('.js11')
        let img2 = document.querySelectorAll('.js22')
        let product_2 = document.querySelectorAll('.product_2')
        let is_active = document.querySelectorAll('.el-menu-item.is-active')
        let btn1 = document.querySelectorAll('.btn_1')
        let text_h4 = document.querySelectorAll('.card-text h4')
        let text_wrapper_2 = document.querySelectorAll('.text-wrapper h4')
        let active = document.querySelectorAll('.el-menu-item.is-active')

      nav_bar.classList.toggle('white')
      hover.classList.toggle('hover2')
      text_wrapper.classList.toggle('color_10')
      header.classList.toggle('background_2')
      my_page.classList.toggle('background_2')
      container.classList.toggle('background_2')
      p_text_2.classList.toggle('dn')
      img1.forEach((elements1) => {
        elements1.classList.toggle('dn')
      })
      text_h4.forEach((text) => {
        text.classList.toggle('black')
      })
      text_wrapper_2.forEach((text_wrapper_2) => {
        text_wrapper_2.classList.toggle('black')
      })
      img2.forEach((elements2) => {
        elements2.classList.toggle('db')
      })
      product_2.forEach((product) => {
        product.classList.toggle('white')
      })
      is_active.forEach((is) => {
        is.classList.toggle('black')
      })
      btn1.forEach((btn) => {
        btn.classList.toggle('back-blue')
      })
      text.forEach((elem) => {
        elem.classList.toggle('black')
      })
      product.forEach((ele) => {
        ele.classList.toggle('white')
      })
      card.forEach((el) => {
        el.classList.toggle('white')
      })
      djs.forEach((e) => {
        e.classList.toggle('blue_2')
      })
      text_footer_card.forEach((event) => {
        event.classList.toggle('color_26')
      })
      number.forEach((event) => {
        event.classList.toggle('background_8')
      })
      active.forEach((ac) => {
        ac.classList.toggle('black')
      })
      number_2.classList.toggle('black')
      number_3.classList.toggle('black')
      dialog__content.classList.toggle('white')
    },
  },
  mounted() {
    axios
        .get('http://localhost:3000/products-card')
        .then(response => (this.products = response.data))

    axios
        .get('http://localhost:3000/products')
        .then(response => (this.products_card = response.data))

    axios
        .get('http://localhost:3000/card')
        .then(response => (this.cards = response.data))

  },
  components: {
    vHeader,
    Swiper,
    SwiperSlide,
    MyDialog,
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700;400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');

.container__2 {
  display: flex;
  justify-content: center;
  width: 98%;
}
.height {
  height: 103vh!important;
}
.delete {
  margin: 0 auto 16px;
  font-size: 45px;
  color: #578FFC;
  width: 4%;
}
.text_22 {
  font-weight: 600;
  font-family: 'Poppins', sans-serif;
  width: 44.5%;
  margin: 0 auto;
}
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
.hover-back {
  background: #ebedf2;
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
  color: #0057FF;
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
.footer-text23 p {
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
.product_22 {
  height: 225px;
  background: #272C44;
  border-radius: 4px;
  padding: 22px;
  display: flex;
  justify-content: space-between;
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
.box2 {
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
.li {
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
.background_white{
  background: #ffffff!important;
}
.white {
  background: #ffffff!important;
}
.background_2{
  background: #e7e9ee;
}
.btn-modal2 {
  display: flex;
  justify-content: center;
  margin: 0 0 36px;
}
.fa-sun {
  font-size: 29px;
}
.blue_2 {
  color: #5D7993!important;
}
.black {
  color: #000;
}
.content {
  display: flex;
  height: 8.4vh;
}
.form input {
  width: 390px;
  height: 48px;
  background: #272C44;
  border-radius: 4px;
  border: none;
  padding: 14px 20px;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #7088AC;
  outline: none;
  display: block;
  margin: 2px 0 24px;
}
.width {
  width: 103px!important;
  height: 46px!important;
}
.form2 h4 {
  font-size: 20px;
  color: #94B3E2;
  font-weight: 500;
}
.form2 {
  text-align: center;
  font-weight: 400;
  line-height: 28px;
  margin: 0 0 30px;
}
.form2 p {
  font-size: 14px;
  color: #7088AC;
  margin: 0 0 3px;
}
.product-container {
  z-index: 0;
}
::placeholder {
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #7088AC;
}
.z-index {
  z-index: 0;
}

.el-btn{
  width: 187px;
  height: 46px;
  border-radius: 4px;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
}

.cancel {
  border: 1px solid #68A4FF;
  background: transparent;
  color: #68A4FF;
}

.save {
  background: #FD3162;
  border: none;
  color: #ffffff;
}

.button-close img {
  width: 24px;
  height: 24px;
  cursor: pointer;
}
.flex-modal {
  display: flex;
  justify-content: space-between;
}
.card-exit {
  width: 246px;
  height: 108px;
  background: #29324F;
  border-radius: 4px;
}

.index{
  z-index: 2;
}

.flex-modal h1 {
  font-weight: 500;
  font-size: 24px;
  line-height: 120%;
  color: #94B3E2;
  margin: auto;
}

.fonts {
  font-family: 'Roboto', sans-serif;
}

.form label {
  font-weight: 400;
  font-size: 14px;
  line-height: 30px;
  color: #94B3E2;
}

.form {
  margin: 36px 0 0;
}

.span_2 {
  color: #94B3E2 !important;
  width: 234px;
  height: 46px;
  background: #294C95;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  border: none;
  letter-spacing: 0.5px;
}

.button-close {
  position: relative;
  left: 20px;
  bottom: 20px;
}

.content__3 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  margin: 31px auto 5px;
}

.text-wrapper_22 {
  color: #ffffff;
  width: 48%;
  margin: 0 auto;
  font-weight: 600;
  font-family: 'Poppins', sans-serif;
}
.text-wrapper_22 h1 {
  font-size: 24px;
}
.text-wrapper_22 p {
  color: #839BB1;
  font-size: 13px;
}
.swiper {
  width: 100%;
  height: 100%;
}

.max-width {
  max-width: 76% !important;
  justify-content: center !important;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.text-wrapper h1 {
  font-size: 24px;
  line-height: 29px;
  padding: 0 0 8px;
}

.text-wrapper p {
  font-size: 13px;
  color: #94B3E2 !important;
}

.black {
  color: #000000!important;
}

.swiper-button-prev {
  left: 358px !important;
  right: auto;
}

.span_3 {
  color: #68A4FF;
  border: 1px solid #68A4FF;
  width: 234px;
  height: 46px;
  background: transparent;
}

.background {
  background: #0057FF;
  color: #ffffff !important;
  border: none;
}

.fa-plus {
  font-size: 15px;
  margin: 0 8px;
}

.product-card {
  display: flex;
  justify-content: center;
}

.card {
  width: 180px;
  height: 160px;
  background: #242A43;
  border-radius: 4px;
  margin: 20px 18px 32px;
  padding: 1px 0;
}

.number {
  width: 30px;
  height: 30px;
  background: #2B3455;
  border-radius: 4px;
  font-family: 'Poppins', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 8px;
}

.number span {
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
}

.color svg {
  /*color: #578FFC!important;*/
  fill: #0057FF;
  width: 6px;
}

.content-flex {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 88%;
  margin: 9px 0;
}

.product-card {
  display: flex;
  justify-content: end;
  max-width: 98.4%;
}

.back-blue {
  background: #68A4FF15;
  color: #267AF6;
}

.img_card img {
  width: 50px;
  height: 50px;
}

.img_card {
  display: flex;
  justify-content: center;
  margin: 0 0 14px;
}

.text-footer-card h1 {
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: #FFFFFF;
}

/* create  */


.text_2 {
  font-weight: 600;
  font-family: 'Poppins', sans-serif;
  width: 80.5%;
  margin: 0 auto;
}
.fa-plus {
  margin: 0 8px 0;
}
.text_22 h1 {
  font-size: 24px;
  line-height: 29px;
  color: #FFFFFF;
  padding: 0 0 8px;
}
.text_22 p {
  font-size: 13px;
  line-height: 16px;
  color: #94B3E2;
}
.span {
  background: #FD3162;
  border-radius: 4px;
  width: 234px;
  height: 46px;
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  line-height: 20px;
  color: #FFFFFF;
  border: none;
}
.span2 {
  width: 75px;
  height: 34px;
  background: #FD3162;
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  line-height: 20px;
  color: #FFFFFF;
  border: none;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.content_box_2 {
  display: flex;
  justify-content: space-between;
  max-width: 96%;
  margin: 0 0 18px;
}
.nav-bar {
  position: fixed;
}

.nav-bar {
  z-index: 2;
}
.dn {
  display: none;
}
.db {
  display: block;
}
.modal{
  z-index: 2;
}
.color_26 {
  color: #7A9BCD!important;
}
.hover2 {
  background: #dadada;
}
.el-menu-item.is-active {
  color: #ffffff;
}
.color_10 {
  color: #267AF6;
}
.background_8 {
  background: #AEC8FC!important;
}
.fa-arrow-right-from-bracket{
  color: #ffffff;
}
</style>