<template>
 <div class="container-create">
   <div class="content_box">
     <div class="text_2">
       <h1>{{ $store.state.create }}</h1>
       <p>{{ $store.state.month }}</p>
     </div>
     <div class="btn">
       <el-button type="primary" plain class="span">
         <i class="fa-solid fa-plus"></i>
         {{ $store.state.created_2 }}
       </el-button>
     </div>
   </div>
 </div>
</template>

<script>
export default {
name: "vCreate",
}
</script>

<style scoped>
.text_2 {
  font-weight: 600;
  font-family: 'Poppins', sans-serif;
  width: 44.5%;
  margin: 0 auto;
}
.fa-plus {
  margin: 0 8px 0;
}
 .text_2 h1 {
   font-size: 24px;
   line-height: 29px;
   color: #FFFFFF;
   padding: 0 0 8px;
 }
 .text_2 p {
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
 .content_box {
   display: flex;
   justify-content: space-between;
   max-width: 96%;
   margin: 0 0 18px;
 }
</style>