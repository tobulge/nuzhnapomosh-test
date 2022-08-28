<template>
  <div class="account">
    <a class="account__link" href="#" aria-label="Перейти в личный кабинет">
      <div class="account__logo-wrap">
        <img
          class="account__avatar"
          src="@/assets/img/avatar.jpg"
          :alt="`Аватар пользователя ${userName}`"
          width="40"
          height="40"
        >
      </div>
      <span class="account__user-name">{{ userName }}</span>
    </a>
  </div>
</template>

<script>
export default {
  name: 'AppAccount',
  props: {
    userName: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "@/scss/variables";
  @import "@/scss/mixins/underline";

  .account {
    display: flex;
    flex-wrap: wrap;

    &__link {
      display: inline-flex;
      align-items: center;

      &:hover {
        @include underline-hover('.account', 'user-name')
      }

      &:focus-visible {
        @include underline-focus;
      }

      &:active {
        @include underline-active;
      }
    }

    &__logo-wrap {
      overflow: hidden;
      width: 40px;
      height: 40px;
      margin-right: 20px;
      border-radius: 50%;
    }

    &__avatar {
      display: block;
      width: 100%;
      height: auto;
     }

    &__user-name {
      position: relative;

      @include underline
    }

    @media (max-width: $mobile) {
      &__logo-wrap {
        width: 30px;
        height: 30px;
        margin-right: 0;
      }

      &__user-name {
        display: none;
      }
    }
  }
</style>
