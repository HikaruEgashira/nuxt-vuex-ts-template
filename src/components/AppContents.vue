<template>
  <section>
    <div>{{ message }}</div>

    <button @click="chDialog">chDialog()</button>
    <app-dialog>
      {{ message }}
    </app-dialog>
  </section>
</template>

<script lang="ts">
  import { Component, Vue } from "nuxt-property-decorator";
  import * as Vuex from "vuex";

  @Component({
    components: {
      AppDialog: () => import("~/components/AppDialog.vue")
    }
  })
  export default class Index extends Vue {
    $store!: Vuex.ExStore;
    message: string = "Hello, World!";

    chDialog(): void {
      this.$store.commit("visible/chDialog", { bool: true });
    }

  }
</script>

<style lang="sass" scoped></style>
