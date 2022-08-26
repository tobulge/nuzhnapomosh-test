class Category {
  constructor ({ name, id, groups, opened, checked }) {
    this.name = name
    this.id = id
    this.groups = groups
    if (opened === false) this.opened = opened
    if (checked === false) this.checked = checked
  }
}

export function useCategory ({ obj, parent }, getGroups) {
  const category = new Category({
    ...obj,
    ...(obj.groups.length && { opened: false })
  })

  if (!obj.groups.length) category.checked = true
  if (obj.groups.length) category.groups = getGroups(obj.groups, category)
  if (parent && parent !== category) category.parent = parent

  return category
}
