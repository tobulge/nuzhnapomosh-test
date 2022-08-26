import { ref } from 'vue'

export function useChoiceList (props, emit) {
  const openedKey = ref(0)
  const isShowBtn = ref(true)

  function onOpened (val) {
    isShowBtn.value = val
  }

  function showItem (groups, group) {
    let isOpened = true
    if (groups.some(gr => gr.opened)) {
      isOpened = group.opened
    }
    return isOpened
  }

  function onCheck (val) {
    emit('check', val)
  }

  function onCheckBtnClick (group) {
    openedKey.value += 1
    emit('check', group)

    try {
      emit('opened', group.opened !== props.group.opened)
    } catch (e) {}
  }

  return {
    onCheck,
    onCheckBtnClick,
    showItem,
    onOpened,
    isShowBtn,
    openedKey
  }
}
