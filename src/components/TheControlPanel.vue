<template>
  <aside class="control-panel">
    <app-control-btn class="control-panel__btn" text="Панель управления"/>
  </aside>
</template>

<script>
import AppControlBtn from '@/components/AppControlBtn'
export default {
  name: 'TheControlPanel',

  components: {
    AppControlBtn
  }
}
</script>

<style lang="scss" scoped>
  @import "@/scss/variables";

  .control-panel {
    padding-top: 30px;
    padding-bottom: 30px;
    border-right: 1px solid $gray;
    background-color: $light-gray;

    &__btn {
      width: 100%;
    }

    @media (max-width: $tablet-small) {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      padding-top: 0;
      padding-bottom: 0;

      &__btn {
        width: auto;
      }
    }
  }
</style>
