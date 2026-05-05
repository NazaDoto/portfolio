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
:root {
  --dota-text: white;
  --dota-muted: grey;
}

html {
  font-family: Arial, Helvetica, sans-serif;
  padding: 0;
  margin: 0;
  overflow-x: hidden;
}

body {
  background-color: rgb(51, 45, 62);
  color: white;
  margin: 0;
  overflow-x: hidden;
}

.full-page {
  width: 100%;
  height: calc(100svh - 60px);
  background-image: url('/public/resources/rubick-bg.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center top;
  color: inherit;
  display: flex;
  flex-direction: row;
  background-attachment: fixed;
  overflow: hidden;
}

@media (max-width:850px) {
  .full-page {
    height: auto;
    min-height: calc(100svh - 60px);
    background-position-x: 70%;
    overflow-x: hidden;
  }
}
</style>
