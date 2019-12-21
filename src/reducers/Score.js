const Score = (state = [], action) => {
    switch (action.type) {
      case 'INCREMENT_SCORE':
        return state + 1

    case 'DECREMENT_SCORE':
        return state - 1

    case 'RESET_SCORE':
        state = 0
        return state
      default:
        return state
    }
  }
  
  export default Score