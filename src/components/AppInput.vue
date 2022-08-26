<!--suppress ALL -->
<template>
  <label class="input-wrap" v-if="label">
    <span class="input-wrap__label">{{ label }}</span>
    <input class="input" :class="{ 'input--gray': gray }" :type="type" :name="name">
  </label>
  <input class="input" :type="type" :name="name" v-else>
</template>

<script>
export default {
  name: 'AppInput',
  props: {
    label: String,
    name: {
      String,
      required: true
    },
    type: {
      String,
      required: true
    },
    gray: Boolean
  }
}
</script>

<style lang="scss" scoped>
  @import "@/scss/variables";

  .input-wrap {
    display: block;

    &__label {
      display: block;
      margin-bottom: 24px;
      font-size: 20px;
      line-height: 25px;
    }

    @media (max-width: $mobile) {
      &__label {
        margin-bottom: 10px;
        font-size: 16px;
        line-height: 20px;
      }
    }
  }

  .input {
    width: 100%;
    padding: 12px 20px 11px;
    border: 1px solid $gray;
    font-size: 20px;
    line-height: 25px;
    transition-property: border-color, background-color;
    transition-duration: .3s;
    transition-timing-function: ease;

    &--gray {
      background-color: $light-gray;
    }

    &:focus {
      border-color: $dark-gray;
      background-color: $white;
      outline: none;
    }

    @media (max-width: $mobile) {
      padding-top: 7px;
      padding-bottom: 7px;
    }
  }
</style>
