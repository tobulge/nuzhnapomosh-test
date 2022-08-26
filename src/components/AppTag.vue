<template>
  <ul class="tag reset-list">
    <li
      v-for="(item, i) in chain"
      class="tag__item"
      :key="item"
    >
      <span class="tag__text">{{ item.name }}</span>
      <button
        v-if="i === chain.length - 1"
        class="tag__close-btn reset-btn"
        type="button"
        @click="$emit('close', item.id)"
        :aria-label="`Удалить выбранную категорию «${item.name}»`"
      ></button>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'AppTag',
  props: {
    chain: {
      type: Array,
      required: true
    }
  },
  emits: ['close']
}
</script>

<style lang="scss" scoped>
  @import "@/scss/variables";

  .tag {
    display: inline-flex;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: -10px;

    &__item {
      display: inline-block;
      align-items: center;
      margin-bottom: 10px;
      padding: 8px 15px;
      background-color: $light-gray;

      &:first-child {
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
      }

      &:last-child {
        border-top-right-radius: 20px;
        border-bottom-right-radius: 20px;

        .tag {
          &__text {
            margin-right: 10px;
          }
        }
      }

      &:not(:last-child) {
        margin-right: -15px;

        &::after {
          content: "";
          display: inline-block;
          width: 10px;
          height: 10px;
          background-image: url("data:image/svg+xml,%3Csvg width='10' height='10' viewBox='0 0 10 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 4.73333H9' stroke='%23999999' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M5.2666 8.46667L8.99993 4.73333L5.2666 1' stroke='%23999999' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center;
        }
      }
    }

    &__text,
    &__close-btn {
      vertical-align: middle;
    }

    &__text {
      margin-right: 15px;
    }

    &__close-btn {
      position: relative;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: $white;
      transition: background-color .3s ease;

      &::before {
        content: "";
        display: inline-block;
        width: 8px;
        height: 8px;
        background-image: url("data:image/svg+xml,%3Csvg width='8' height='8' viewBox='0 0 8 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L6.97925 7' stroke='%23999999' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M6.97925 1L1 7' stroke='%23999999' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        transition: background-image .3s ease;
      }

      &::after {
        content: "";
        position: absolute;
        top: -10px;
        right: -10px;
        bottom: -10px;
        left: -10px;
      }

      &:hover,
      &:focus-visible {
        outline: none;
        background-color: $red;

        &::before {
          background-image: url("data:image/svg+xml,%3Csvg width='8' height='8' viewBox='0 0 8 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L6.97925 7' stroke='%23ffffff' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M6.97925 1L1 7' stroke='%23ffffff' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
        }
      }
    }
  }
</style>
