<template>
  <ul v-if="tags.length" class="tags reset-list">
    <li class="tags__item" v-for="tag in tags" :key="tag">
      <app-tag  class="tags__tag" :chain="tag" @close="onClose"/>
    </li>
  </ul>
</template>

<script>
import AppTag from '@/components/AppTag'

export default {
  name: 'AppTags',
  props: {
    tags: Array
  },
  emits: ['close'],

  setup (_, { emit }) {
    function onClose (val) {
      emit('close', val)
    }

    return {
      onClose
    }
  },

  components: {
    AppTag
  }
}
</script>

<style lang="scss" scoped>
  .tags {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    &__item {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      &:not(:last-child) {
        margin-bottom: 10px;
      }
    }

  }
</style>
