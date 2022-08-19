<template>
  <div class="account">
    <a class="account__link" href="#" aria-label="Перейти в личный кабинет">
      <div class="account__logo-wrap">
        <img class="account__avatar" src="@/assets/img/avatar.jpg" :alt="`Аватар пользователя ${userName}`">
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

  .account {
    width: 100%;
    max-width: 300px;

    &__link {
      display: inline-flex;
      align-items: center;
      outline: none;

      &:hover {
        .account {
          &__user-name {
            &::after {
              transform: scaleX(1);
            }
          }
        }
      }

      &:focus-visible {
        &:not(:active) {
          outline: 2px solid $red;
          outline-offset: 5px;
        }
      }

      &:active {
        .account {
          &__user-name {
            color: $gray;
            &::after {
              background-color: $gray;
            }
          }
        }
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
     }

    &__user-name {
      position: relative;

      &::after {
        content: "";
        position: absolute;
        bottom: -5px;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: $red;
        transform-origin: left;
        transform: scaleX(0);
        transition: transform .3s ease;
      }
    }
  }
</style>
