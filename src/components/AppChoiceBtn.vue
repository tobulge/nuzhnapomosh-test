<template>
  <button class="choice-btn reset-btn" type="button">
    <span class="choice-btn__text">{{ text }}</span>
  </button>
</template>

<script>
export default {
  name: 'AppChoiceBtn',
  props: {
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "@/scss/variables";
  @import "@/scss/mixins/underline";

  .choice-btn {
    display: flex;
    align-items: center;
    cursor: pointer;

    &::before {
      content: "";
      width: 40px;
      height: 40px;
      margin-right: 20px;
      border: 1px solid $gray;
      border-radius: 50%;
      background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 1V19' stroke='%23999999' stroke-width='1.5' stroke-linecap='round'/%3E%3Cpath d='M1 10H19' stroke='%23999999' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E%0A");
      background-size: 20px;
      background-repeat: no-repeat;
      background-position: center;
    }

    &:hover {
      @include underline-hover('.choice-btn', 'text')
    }

    &:focus-visible {
      @include underline-focus;
    }

    &:active {
      @include underline-active;
    }

    &--opened {
      &::before {
        transform: rotate(45deg);
      }
    }

    &__text {
      position: relative;

      @include underline;
    }
  }
</style>
