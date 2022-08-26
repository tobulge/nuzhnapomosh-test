<template>
  <button v-if="!link" class="btn reset-btn" :type="btnType" :disabled="disabled">
    <template v-if="!loading">{{ text }}</template>
    <app-loading v-else color="#ffffff" class="btn__loading" />
  </button>
  <a v-else class="btn" :href="href">{{ text }}</a>
</template>

<script>
import AppLoading from '@/components/AppLoading'
export default {
  name: 'AppBtn',
  components: { AppLoading },
  props: {
    text: {
      type: String,
      required: true
    },
    link: {
      type: Boolean,
      default: false
    },
    href: {
      type: String,
      default: '#'
    },
    btnType: {
      type: String,
      default: 'button'
    },
    disabled: {
      type: Boolean
    },
    loading: Boolean
  }
}
</script>

<style lang="scss" scoped>
  @import "@/scss/variables";

  .btn {
    position: relative;
    min-height: 58px;
    padding: 20px 40px;
    font-weight: 500;
    font-size: 16px;
    line-height: 18px;
    color: $white;
    text-align: center;
    text-transform: uppercase;
    background-color: $red;
    transition: background-color .3s ease;

    &:hover,
    &:focus-visible {
      outline: none;
      background-color: $red-hover;
    }

    &[disabled] {
      background-color: $gray;
      cursor: not-allowed;
    }

    &__loading {
      position: absolute;
      left: 50%;
      top: 50%;
      width: 30px;
      height: 30px;
      transform: translate(-50%, -50%);
    }

    @media (max-width: $mobile) {
      padding: 10px;
      font-size: 14px;
    }
  }
</style>
