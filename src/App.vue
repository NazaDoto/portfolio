<template>
  <NavbarComponent></NavbarComponent>
  <div class="full-page">

    <router-view></router-view>
  </div>
</template>

<script>
import NavbarComponent from './components/NavbarComponent.vue';
export default {
  name: 'App',
  components: {
    NavbarComponent,
  }
}
</script>

<style>
html{
  font-family: Arial, Helvetica, sans-serif;
  padding:0;
  margin:0;
}
body{
  background-color: rgb(51, 45, 62);
  color:white;
  margin:0;
}
.full-page {
  width: 100%;
  height: calc(100svh - 60px);
  background-color: inherit;
  background-image: url('/public/resources/rubick-bg.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  color: inherit;
  display: flex;
  flex-direction: row;
}
</style>
