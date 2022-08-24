<template>
   <section class="page_1">
     <div class="container">
       <div class="content">
         <div class="img">
           <img :src="require(`/src/assets/img/${select.img2}`)" alt="ru">
         </div>
         <div class="select">
           <select class="select-items">
             <option>{{ select.name }}</option>
             <option>{{ select.name2 }}</option>
             <option>{{ select.name3 }}</option>
           </select>
         </div>
       </div>
       <div class="text-wrapper">
         <h1>{{ $store.state.contact }}</h1>
         <img src="../assets/img/Avatar.svg" alt="avatar">
       </div>
     </div>
   </section>
</template>

<script>
export default {
name: "vHeader",
  data() {
    return {
      select: {
        name: "RU",
        name2: "MS",
        name3: "NS",
        img2: "ru.svg",
      },
      value: ''
    }
  },
}
</script>

<style scoped>
.page_1 {
  padding: 40px 0;
  background: linear-gradient(117.42deg, #1E212D 0%, #21273D 0.01%, #1D202E 91.49%);
  border-bottom: 2px solid #2B3E6960;
  display: flex;
  width: 81.6%;
  height: 1vh;
  margin: 0 auto;
  position: fixed;
  right: 0;
  z-index: 1;
}
option {
 background: #272C44;
}
select {
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #FFFFFF;
  background: transparent;
  border: none;
  outline: none;
  max-width: 45px;
}
.img img {
  width: 20px;
  height: 13px;
}
.content {
  display: flex;
  align-items: start;
  margin: 0 50px;
}
.img {
  margin: 2px 0;
}
.text-wrapper img {
  width: 48px;
  height: 48px;
  margin: 0 16px;
}
.text-wrapper h1 {
  font-weight: 500;
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  line-height: 18px;
  text-align: right;
  color: #FFFFFF;
}
.text-wrapper {
  display: flex;
  align-items: center;
  margin: 10px 2px;
}
.container {
  display: flex;
  justify-content: end;
  width: 99%;
}
select option {
  color: #ffffff;
  padding: 8px 16px;
  border: 1px solid transparent;
  border-color: transparent transparent rgba(0, 0, 0, 0.1) transparent;
  cursor: pointer;
  user-select: none;
}
</style>
