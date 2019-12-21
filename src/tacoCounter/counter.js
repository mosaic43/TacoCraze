import { createStore } from 'redux'


function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    case 'LOTSMORE':
        return state + 5
    case `LOTSLESS`:
        return state - 5

    default:
      return state
  }
}

let store = createStore(counter)

store.subscribe(() => console.log(store.getState()))

store.dispatch({ type: 'INCREMENT' })

store.dispatch({ type: 'INCREMENT' })

store.dispatch({ type: 'DECREMENT' })

store.dispatch({ type: 'LOTSMORE' })

store.dispatch({ type: 'LOTSLESS' })
