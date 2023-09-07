const showDateSeparator = (item, index, messages) => {
  if (index === 0) {
    return true
  }

  const previousMessage = messages[index - 1]
  const previousDate = new Date(previousMessage.created_at)
  const currentDate = new Date(item.created_at)
  return currentDate.getDate() !== previousDate.getDate()
}

export default showDateSeparator;