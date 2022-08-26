<template>
  <main class="content">
    <h1 class="content__title reset-default-margin">Создание сбора</h1>
    <fundraising-form/>
  </main>
</template>

<script>
import FundraisingForm from '@/components/FundraisingForm'

export default {
  name: 'AppInnerContent',

  components: {
    FundraisingForm
  }
}
</script>

<style lang="scss" scoped>
  @import "@/scss/variables";

  .content {
    padding: 50px 60px 90px;

    &__title {
      margin-bottom: 35px;
      font-size: 50px;
      line-height: 1;
    }

    @media (max-width: $tablet-small) {
      padding: 40px 50px 60px;

      &__title {
        font-size: 35px;
      }
    }

    @media (max-width: $mobile) {
      padding: 30px 20px;
    }
  }
</style>
