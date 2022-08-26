import { computed } from 'vue'
import { useStore } from 'vuex'
import { useCategory } from '@/use/category'

export function useModifiesCategories () {
  const store = useStore()

  function getModifiedCategories (arr = [], parent) {
    return arr.map(obj => {
      return useCategory({ obj, parent }, getModifiedCategories)
    })
  }

  return computed(() => {
    const startArr = Array.from(store.getters['categories/categories'].groups)
    return getModifiedCategories(startArr)
  })
}
