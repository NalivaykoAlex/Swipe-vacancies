export const checkduplicates = (words) => {
  const word = []
  words.map(item => item.map(item =>
    word.push(item.header.toLowerCase().split(' ')[0])
  ))
  const result = {}
  word.forEach(a => {
    result[a] = result[a] + 1 || 1
  })
  const successWords = []
  for (let key in result)
    successWords.push({ 'name': key, 'count': result[key] })
  successWords.sort((a, b) => {
    return b.count - a.count
  })
  return successWords
}

export const checklength = (offset, count) => {
  if (offset >= count) {
    return true
  }
}