<template>
  <header class="header">
    <div class="header__wrap container">
      <a class="header__logo logo" href="/" aria-label="Перейти на главную">
        <img src="@/assets/img/logo-dark.svg" alt="Логотип Нужна Помощь">
      </a>
      <app-account user-name="Екатерина"/>
    </div>
  </header>
</template>

<script>
import AppAccount from '@/components/AppAccount'
export default {
  name: 'TheHeader',

  components: {
    AppAccount
  }
}
</script>

<style lang="scss" scoped>
  @import "@/scss/variables";

  .header {
    padding-top: 40px;
    padding-bottom: 40px;
    background-color: $light-gray;

    &__wrap {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &__logo {
      flex-shrink: 0;
      width: 258px;
      margin-right: 50px;

      &:focus-visible {
        outline: 2px solid $red;
        outline-offset: 5px;
      }
    }
  }

  .logo {
    display: inline-flex;
  }
</style>
