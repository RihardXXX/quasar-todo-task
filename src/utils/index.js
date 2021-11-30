// тут будет кастомные функции для всего проекта

// сортировка в алфватином порядке
const sortTitle = (a, b) => {
  const nameA = a.title.toLowerCase(), nameB = b.title.toLowerCase()
  if (nameA < nameB) return -1
  if (nameA > nameB) return 1
  return 0 // Никакой сортировки
}

export {
  sortTitle
}
