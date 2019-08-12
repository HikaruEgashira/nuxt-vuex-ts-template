<template>
  <section class="contents">

    <transition name="slide">
      <nav class="main" v-if="dialog">
        <slot />
      </nav>
    </transition>

    <transition name="fade">
      <nav class="back" @click="chDialog()" v-if="dialog"></nav>
    </transition>

  </section>
</template>

<script lang="ts">
  import { Component, Vue } from "nuxt-property-decorator";
  import * as Vuex from "vuex";

  @Component
  export default class Index extends Vue {
    $store!: Vuex.ExStore;

    get dialog(): boolean {
      return this.$store.getters["visible/dialog"];
    }

    chDialog(): void {
      this.$store.commit("visible/chDialog", { bool: false });
    }

  }
</script>

<style lang="sass" scoped>
.main
  position: absolute
  left: 10vw
  top: 10vh
  max-width: 300px
  width: 80vw
  height: 80vh
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.25)
  background: #fff
  z-index: 6
  border-radius: 8px

.back
  position: absolute
  left: 0px
  top: 0px
  width: 100vw
  height: 100vh
  background: rgba(100, 100, 100, 0.5)
  z-index: 5

/** animation */
.slide-enter-active, .slide-leave-active
  transition: all .2s ease
.slide-enter, .slide-leave-to
  transform: scale(.5)
  opacity: 0

.fade-enter-active, .fade-leave-active
  transition: all .3s ease
.fade-enter, .fade-leave-to
  opacity: 0
</style>