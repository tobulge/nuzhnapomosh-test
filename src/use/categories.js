import { useStore } from 'vuex'
import { onMounted } from 'vue'

export function useCategories () {
  const store = useStore()
  onMounted(async () => {
    await store.dispatch('categories/getCategories')
  })
}
