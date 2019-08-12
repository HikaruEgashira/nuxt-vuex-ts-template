<template>
  <section>
    <button @click="chDrawer">chDrawer()</button>
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
    this.$store.commit("visible/chDrawer", { bool: true });
  }
}
</script>

<style lang="sass" scoped></style>
