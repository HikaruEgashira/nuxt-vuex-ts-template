<template>
  <section>
    <app-contents />
    <app-button />
  </section>
</template>

<script lang="ts">
  import { Component, Vue } from "nuxt-property-decorator";

  @Component({
    components: {
      AppButton: () => import("~/components/AppButton.vue"),
      AppContents: () => import("~/components/AppContents.vue")
    }
  })
  export default class Index extends Vue {}
</script>

<style lang="sass" scoped></style>
