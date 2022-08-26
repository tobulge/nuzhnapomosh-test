<template>
  <div class="choice">
    <app-tags class="choice__tags" v-if="checkedCategories.length" :tags="checkedCategories" @close="onClose" />

    <div class="choice__wrap" @click="onListClick">
      <app-loading v-if="loading" class="choice__loading"/>
      <app-choice-btn
        v-else
        :class="{ 'choice-btn--opened': isListOpened}"
        :text="checkedCategories.length ? 'Выбрать еще' : 'Выбрать'"
        @click="onOpenBtnClick"
      />
      <app-checkboxes-list
        v-if="!loading"
        v-show="isListOpened"
        class="choice__list"
        :groups="categories"
        :main="true"
        @check="onCheck"
      />
    </div>
  </div>
</template>

<script>
import AppCheckboxesList from '@/components/AppChoiceList'
import AppChoiceBtn from '@/components/AppChoiceBtn'
import AppTags from '@/components/AppTags'
import { useChoice } from '@/use/use-choice'
import AppLoading from '@/components/AppLoading'
export default {
  name: 'AppChoice',
  props: ['categories'],

  setup (props) {
    return {
      ...useChoice(props)
    }
  },

  components: {
    AppLoading,
    AppTags,
    AppChoiceBtn,
    AppCheckboxesList
  }
}
</script>

<style lang="scss" scoped>
  .choice {
    &__loading {
      width: 40px;
      height: 40px;
    }

    &__tags {
      margin-bottom: 60px;
    }

    &__wrap {
      position: relative;
      z-index: 1;
      display: inline-block;
      width: 100%;
      max-width: 340px;
      pointer-events: none;

      & > * {
        pointer-events: auto;
      }
    }

    &__list {
      position: absolute;
      top: -10px;
      left: 0;
      transform: translateY(-100%);
    }
  }
</style>
