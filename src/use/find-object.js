let result

export function useFindObj (arr, id) {
  arr.forEach(obj => {
    if (obj.id === id) {
      result = obj
    } else if (obj.groups.length) {
      useFindObj(obj.groups, id)
    }
  })

  return result
}
