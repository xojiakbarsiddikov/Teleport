<template>
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
             <div class="df df1 margin_box">
               <el-menu-item index="1-3"><i class="fa-solid fa-file font-size"></i></el-menu-item>
               <el-menu-item index="1-3" class="text margin_2">{{ $store.state.name }}</el-menu-item>
             </div>
           </el-menu-item-group>
           <el-menu-item-group>
             <div class="df js">
               <el-menu-item index="1-3" class="border"><i class="fa-solid fa-ruble-sign font-size"></i></el-menu-item>
               <el-menu-item index="1-3" class="text left margin_2">{{ $store.state.balanse }}</el-menu-item>
               <el-menu-item index="1-3" class="text left">
                 <span class="span background">{{ $store.state.number }}</span>
               </el-menu-item>
             </div>
           </el-menu-item-group>
           <el-menu-item-group>
             <div class="df js1">
               <el-menu-item index="1-3"><i class="fa-solid fa-globe font-size"></i></el-menu-item>
               <el-menu-item index="1-3" class="text margin_2">{{ $store.state.document }}</el-menu-item>
             </div>
           </el-menu-item-group>
           <el-menu-item-group>
             <div class="df js2">
               <el-menu-item index="1-3"><i class="fa-solid fa-users font-size"></i></el-menu-item>
               <el-menu-item index="1-3" class="text">{{ $store.state.group }}</el-menu-item>
             </div>
           </el-menu-item-group>
           <el-menu-item-group>
             <div class="df js3">
               <el-menu-item index="1-3"><i class="fa-solid fa-book-open font-size"></i></el-menu-item>
               <el-menu-item index="1-3" class="text margin_4">{{ $store.state.education }}</el-menu-item>
             </div>
           </el-menu-item-group>
           <el-menu-item-group>
             <div class="df js4">
               <el-menu-item index="1-3"><i class="fa-solid fa-gear font-size"></i></el-menu-item>
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
                 <i class="fa-solid fa-arrow-right-from-bracket font-size color"></i>
                 <el-menu-item index="1-3" class="text text_2">{{ $store.state.exit }}</el-menu-item>
               </div>
             </el-menu-item-group>
             <el-menu-item-group>
               <div class="df df1 flex_3">
                 <el-menu-item index="1-3" class="null"><img src="../assets/img/Icon.svg" alt="sun" class="img"></el-menu-item>
                 <el-menu-item index="1-3" class="text">{{ $store.state.tema }}</el-menu-item>
                 <el-form-item>
                   <el-switch v-model="form.delivery" class="checkbox"></el-switch>
                 </el-form-item>
               </div>
             </el-menu-item-group>
           </div>
         </div>
       </el-submenu>
     </el-menu>
 </div>
</template>

<script>
export default {
name: "NavBar",
  data() {
   return {
     form: {
       name: '',
       region: '',
       date1: '',
       date2: '',
       delivery: false,
       type: [],
       resource: '',
       desc: ''
     }
   }
  },
  methods: {
    onSubmit() {
      console.log('submit!');
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  mounted() {
    let js = document.querySelector('.js')
    let span = document.querySelector('.span')
    let js1 = document.querySelector('.js1')
    let js2 = document.querySelector('.js2')
    let js3 = document.querySelector('.js3')
    let js4 = document.querySelector('.js4')
    let df1 = document.querySelector('.df1')

    df1.classList.add('hover')

    df1.addEventListener('click', () => {
      js.classList.remove('hover')
      js2.classList.remove('hover')
      df1.classList.add('hover')
      span.classList.remove('color')
      js1.classList.remove('hover')
      js3.classList.remove('hover')
      js4.classList.remove('hover')
    })

      js.addEventListener('click', () => {
        df1.classList.remove('hover')
        js.classList.add('hover')
        span.classList.toggle('color')
        js2.classList.remove('hover')
        js1.classList.remove('hover')
        js3.classList.remove('hover')
        js4.classList.remove('hover')
      })
    js1.addEventListener('click', () => {
      df1.classList.remove('hover')
      span.classList.remove('color')
      js1.classList.add('hover')
      js.classList.remove('hover')
      js2.classList.remove('hover')
      js3.classList.remove('hover')
      js4.classList.remove('hover')
    })
    js2.addEventListener('click', () => {
      df1.classList.remove('hover')
      js2.classList.add('hover')
      js1.classList.remove('hover')
      span.classList.remove('color')
      js3.classList.remove('hover')
      js4.classList.remove('hover')
      js.classList.remove('hover')
    })
    js3.addEventListener('click', () => {
      df1.classList.remove('hover')
      js3.classList.add('hover')
      span.classList.remove('color')
      js2.classList.remove('hover')
      js4.classList.remove('hover')
      js1.classList.remove('hover')
      js.classList.remove('hover')
    })
    js4.addEventListener('click', () => {
      df1.classList.remove('hover')
      js4.classList.add('hover')
      span.classList.remove('color')
      js3.classList.remove('hover')
      js2.classList.remove('hover')
      js1.classList.remove('hover')
      js.classList.remove('hover')
    })

  }
}
</script>

<style scoped>
 .nav-bar {
   position: fixed;
 }
</style>