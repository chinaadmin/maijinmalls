<template>
  <div class="app-new-wrapper">
    <header-bar></header-bar>
    <div class="app-wrapper" :class="{hideSidebar:!sidebar.opened}">
      <sidebar class="sidebar-container"></sidebar>
      <div class="main-container">
      	<tags-view></tags-view>
        <navbar></navbar>
        <app-main></app-main>
      </div>
    </div>
  </div>
</template>

<script>
import { Navbar, Sidebar, AppMain, TagsView, HeaderBar } from './components'

export default {
  name: 'layout',
  components: {
    Navbar,
    Sidebar,
    AppMain,
    TagsView,
    HeaderBar
  },
  computed: {
    sidebar() {
      return this.$store.state.app.sidebar
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "src/styles/mixin.scss";
  .app-new-wrapper {
    @include clearfix;
    position: relative;
    width: 100%;
    .app-wrapper {
      @include clearfix;
      position: relative;
      height: 100%;
      width: 100%;
      .main-container{
        position: relative;
        top: 60px;
        height: 100%;
      }
    }
  }
</style>
