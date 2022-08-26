import { useStore } from 'vuex'
import { computed, ref } from 'vue'
import { useFindObj } from '@/use/find-object'
import { useFindCopy } from '@/use/find-copy'
import { useGetTagData } from '@/use/tag-data'

export function useChoice (props) {
  const store = useStore()
  const isListOpened = ref(false)
  const checkedCategories = computed(() => store.getters['checked/tags'])

  function onOutsideClick (e) {
    if (!e._inListClick) {
      isListOpened.value = false
      document.body.removeEventListener('click', onOutsideClick)
    }
  }

  function onListClick (e) {
    e._inListClick = true
  }

  function onOpenBtnClick (e) {
    isListOpened.value = !isListOpened.value

    if (isListOpened.value) {
      document.body.addEventListener('click', onOutsideClick)
    }
  }

  function onCheck (val) {
    const id = val.id
    const openedCategory = ref(useFindObj(props.categories, id))

    if (val.groups.length) {
      openedCategory.value.opened = !openedCategory.value.opened
    }

    if (openedCategory.value.checked && !useFindCopy(openedCategory.value.id, checkedCategories)) {
      const tag = useGetTagData()
      tag.push(openedCategory.value)
      store.commit('checked/setChecked', tag.result)
    }
  }

  function onClose (id) {
    const checkedArr = Array.from(checkedCategories.value)
    const index = checkedArr.findIndex(childArr => childArr[childArr.length - 1].id === id)
    store.commit('checked/removeChecked', index)
  }

  return {
    onCheck,
    onOpenBtnClick,
    onListClick,
    onClose,
    isListOpened,
    loading: computed(() => store.getters['categories/loading']),
    checkedCategories
  }
}
