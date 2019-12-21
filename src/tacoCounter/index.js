const { createStore } = Redux;


const { subscribe, dispatch, getState } = createStore(reducer);

subscribe(() => render(getState()))


const incrementButton = document.getElementById('increment');
incrementButton.addEventListener('click', e => dispatch({ type: "INCREMENT" }));


const decrementButton = document.getElementById('decrement');
decrementButton.addEventListener('click', e => dispatch({ type: "DECREMENT" }));


const decrementsButton = document.getElementById('decrements');
decrementsButton.addEventListener('click', e => dispatch({ type: "DECREMENTS" }));


const incrementsButton = document.getElementById('increments');
incrementsButton.addEventListener('click', e => dispatch({ type: "INCREMENTS" }));


store.dispatch({ type: 'RED' });