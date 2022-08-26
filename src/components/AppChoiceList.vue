<template>
  <ul class="choice-list reset-list" :class="{'choice-list--main': main}">
    <li v-show="showItem(groups, group)" v-for="group in groups" :key="group">
      <button
        v-show="isShowBtn"
        class="choice-list__btn reset-btn"
        type="button"
        :class="{
          'choice-list__btn--children': group.groups.length,
          'choice-list__btn--opened': group.opened
        }"
        :key="openedKey"
        @click="onCheckBtnClick(group, groups)"
      >
        {{ group.name }}
      </button>

      <app-choice-list
        v-show="group.opened"
        v-if="group.groups.length"
        :groups="group.groups"
        :group="group"
        :key="openedKey"
        @check="onCheck"
        @opened="onOpened"
      />
    </li>
  </ul>
</template>

<script>
import { useChoiceList } from '@/use/choice-list'
export default {
  name: 'AppChoiceList',
  props: ['groups', 'group', 'main'],
  emits: ['check', 'opened'],

  setup (props, { emit }) {
    return {
      ...useChoiceList(props, emit)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "@/scss/variables";
  @import "@/scss/mixins/custom-scrollbar";

  .choice-list {
    &--main {
      border-radius: 5px;
      border: 1px solid $gray;
      max-height: 300px;
      overflow-y: auto;
      background-color: $white;

      @include scrollbar
    }

    &__btn {
      position: relative;
      display: block;
      width: 100%;
      padding: 15px 60px 15px 20px;
      font-weight: 500;
      font-size: 17px;
      line-height: 20px;
      text-align: left;
      cursor: pointer;
      transition: background-color .3s ease;

      &:hover,
      &:focus-visible {
        background-color: $light-gray;
        outline: none;
      }

      &:active {
        background-color: $gray;
      }

      &::before,
      &::after {
        content: "";
        position: absolute;
        top: 50%;
        width: 10px;
        height: 10px;
        opacity: 0;
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        transform: translateY(-50%);
      }

      &::before {
        left: 25px;
        background-image: url("data:image/svg+xml,%3Csvg width='10' height='12' viewBox='0 0 10 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M7.47412 11L2.49141 6L7.47412 1' stroke='%23999999' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
      }

      &::after {
        right: 25px;
        background-image: url("data:image/svg+xml,%3Csvg width='10' height='12' viewBox='0 0 10 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2.49136 11L7.47407 6L2.49136 1' stroke='%23999999' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
      }

      &--children {
        &::after {
          opacity: 1;
        }

        &.choice-list__btn--opened {
          &::after {
            opacity: 0;
          }
        }
      }

      &--checked {
        background-color: $light-gray;
      }

      &--opened {
        padding-left: 50px;
        padding-right: 25px;
        color: $middle-gray;
         &::before {
           opacity: 1;
         }
      }
    }
  }
</style>
