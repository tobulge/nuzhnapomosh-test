export function useGetTagData () {
  const result = []
  return {
    result,
    push (tagObj) {
      result.unshift({ name: tagObj.name, id: tagObj.id })
      if (tagObj.parent) {
        this.push(tagObj.parent)
      }
    }
  }
}
