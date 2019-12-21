import { ShowContent } from '../actions'

const showContent = (state = ShowContent.SHOW_ALL, action) => {
  switch (action.type) {
    case 'SET_SHOW_CONTENT':
      return action.filter
    default:
      return state
  }
}

export default showContent