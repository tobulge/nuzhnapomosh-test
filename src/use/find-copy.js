export function useFindCopy (id, objects) {
  const checkedArr = Array.from(objects.value)
  return checkedArr.some(arr => arr[arr.length - 1].id === id)
}
