let nextContent = 0

export const setShowContent = filter => ({
  type: 'SET_SHOW_CONTENT',
  filter
})

export const toggleContent = id => ({
  type: 'TOGGLE_CONTENT',
  id
})

export const ShowContent = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_A: 'SHOW_A',
  SHOW_B: 'SHOW_B'
}

export const IncrementScore = {
    type: 'INCREMENT_SCORE',
}

export const DecrementScore = {
    type: 'DECREMENT_SCORE',
}

export const ResetScore = {
    type: 'RESET_SCORE',
}