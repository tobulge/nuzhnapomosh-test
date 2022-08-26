<template>
  <div class="inner">
    <the-header class="inner__header"/>
    <the-control-panel class="inner__aside"/>
    <app-inner-content class="inner__content"/>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader'
import TheControlPanel from '@/components/TheControlPanel'
import AppInnerContent from '@/components/AppInnerContent'

export default {
  name: 'FundraiserLayout',
  components: {
    TheHeader, AppInnerContent, TheControlPanel
  }
}
</script>

<style lang="scss" scoped>
  @import "@/scss/variables";

  .inner {
    display: grid;
    grid-template-columns: repeat(16, 1fr);
    grid-template-areas:
      "h h h h h h h h h h h h h h h h"
      "a a a c c c c c c c c c c c c c";
    grid-auto-rows: min-content auto;
    min-height: 100vh;

    &__header {
      grid-area: h;
    }

    &__aside {
      grid-area: a;
    }

    &__content {
      grid-area: c;
    }

    @media (max-width: $desktop-min) {
      grid-template-areas:
        "h h h h h h h h h h h h h h h h"
        "a a a a c c c c c c c c c c c c";
    }

    @media (max-width: $tablet-big) {
      grid-template-areas:
        "h h h h h h h h h h h h h h h h"
        "a a a a a c c c c c c c c c c c";
    }

    @media (max-width: $tablet-small) {
      grid-template-columns: repeat(4, 1fr);
      grid-template-areas:
        "h h h h"
        "a a a a"
        "c c c c";
    }
  }
</style>
