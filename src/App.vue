<template>
  <NavbarComponent></NavbarComponent>
  <router-view></router-view>
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
  padding:0;
  margin:0;
}
body{
  background-color: rgb(51, 45, 62);
  color:white;
  margin:0;
}
</style>
