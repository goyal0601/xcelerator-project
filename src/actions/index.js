
export const incrementLike = data => ({
  type: 'INCREMENT_LIKE',
  id: data.id
})

export const incrementDislike = data => ({
  type: 'INCREMENT_DISLIKE',
  id: data.id
})

export const bookmarkChange = data => ({
  type: 'BOOKMARK_CHANGE',
  id: data.id
})

