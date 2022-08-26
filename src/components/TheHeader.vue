<template>
  <header class="header">
    <div class="header__wrap container">
      <a class="header__logo logo" href="/" aria-label="Перейти на главную">
        <img src="@/assets/img/logo-dark.svg" alt="Логотип Нужна Помощь" width="258" height="35">
      </a>
      <app-account class="header__account" user-name="Екатерина"/>
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
    border-bottom: 1px solid $gray;
    background-color: $light-gray;

    &__wrap {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
    }

    &__logo {
      flex-shrink: 0;
      width: 258px;
      margin-right: 20px;
      outline: none;

      &:focus-visible {
        &:not(:hover) {
          outline: 2px solid $red;
          outline-offset: 9px;
        }
      }
    }

    &__account {
      width: 100%;
      max-width: 300px;
    }

    @media (max-width: $tablet-small) {
      &__logo {
        width: 200px;
      }

      &__account {
        width: auto;
      }
    }

    @media (max-width: $mobile) {
      &__logo {
        width: 150px;
      }
    }
  }

  .logo {
    display: inline-flex;
  }
</style>
