<template>
  <div id="Init">
    <!--<top class="top"></top>-->
    <transition>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  import Top from './layouts/top.vue'
  export default {
    components: { Top }
  }
</script>

<style>
  html, body {
    height: 100%;
    width: 100%;
    overflow-x: hidden;
  }
  #Init .top{margin-bottom: 46px;}
</style>
