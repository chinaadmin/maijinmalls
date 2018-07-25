<template>
  <section class="app-main" style="min-height: 100%">
    <keep-alive>
      <router-view v-if="!$route.meta.noCache || true"></router-view>
    </keep-alive>
    <router-view v-if="$route.meta.noCache"></router-view>
<!--     <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive || true"></router-view> -->
  </section>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    cachedViews() {
      return this.$store.state.tagsView.cachedViews
    }
    // key() {
    //   return this.$route.name !== undefined ? this.$route.name + +new Date() : this.$route + +new Date()
    // }
  }
}
</script>
<style lang="css">
	.app-main{
		margin-top: 100px;
	}
/*   .fade-enter-active, .fade-leave-active {
  transition: opacity 50ms;
}
.fade-enter, .fade-leave-to .fade-leave-active below version 2.1.8 {
  opacity: 0;
} */
</style>