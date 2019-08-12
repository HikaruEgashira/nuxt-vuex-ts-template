<template>
  <!-- 左側に出現するサイドバー -->
  <section class="contents">
    <transition name="slide">
      <nav class="main" v-if="drawer"></nav>
    </transition>

    <transition name="fade">
      <nav class="back" @click="chDrawer()" v-if="drawer"></nav>
    </transition>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import * as Vuex from "vuex";

@Component
export default class Index extends Vue {
  $store!: Vuex.ExStore;

  // computed______________________________________________________
  //
  get drawer(): boolean {
    return this.$store.getters["visible/drawer"];
  }

  // method______________________________________________________
  //
  chDrawer(): void {
    this.$store.commit("visible/chDrawer", { bool: false });
  }
}
</script>

<style lang="sass" scoped>
.main
  position: absolute
  left: 0px
  top: 0px
  max-width: 300px
  width: 80vw
  height: 100vh
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.25)
  background: #fff
  z-index: 6

.back
  position: absolute
  left: 0px
  top: 0px
  width: 100vw
  height: 100vh
  background: rgba(100, 100, 100, 0.5)
  z-index: 5

/** one */
.slide-enter-active
  animation: navSlide .3s
@keyframes navSlide
  0%
    width: 0%
  100%
    width: 100%

/** two */
.slide-leave-active
  transition: transform .2s
.slide-leave-to
  transform: translateX(-100vw)

/** three */
.fade-enter-active, .fade-leave-active
  transition: all .3s ease
.fade-enter, .fade-leave-to
  opacity: 0
</style>
