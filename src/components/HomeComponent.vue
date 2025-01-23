<template>
  <div class="full-page">
    <div class="sidebar">
      
    </div>
    <div class="bg-img">
      <img src="/resources/yo.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name:'HomeComponent'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.full-page{
  width: 100%;
  height: calc(100svh - 60px);
  background-color: inherit;
  color: inherit;
}
.bg-img{
  height: 100%;
}
img {
  height: 100%;
  object-fit: contain;
}
</style>
