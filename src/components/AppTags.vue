<template>
  <ul v-if="tags.length" class="tags reset-list">
    <li class="tags__item">
      <app-tag v-for="tag in tags" class="tags__tag" :chain="tag" :key="tag" @close="onClose"/>
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
    &__item {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    &__tag {
      &:not(:last-child) {
        margin-bottom: 10px;
      }
    }
  }
</style>
