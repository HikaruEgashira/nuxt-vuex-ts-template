<template>
  <section>
    <DefNavigation />
    <nuxt />
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({
  components: {
    "DefNavigation": () => import("~/components/DefNav.vue")
  }
})
export default class Index extends Vue {}
</script>

<style lang="sass" scoped>
section
  position: absolute
  width: 100vw
  height: 100vh
</style>
