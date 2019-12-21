const initialState = {
    value: 0,
    color: 'green',
}

function deepCopy (x){
    return JSON.parse(JSON.stringify(x))
}



const reducer = (state = initialState, action) => {
    let { type } = action;
    if (type === "INCREMENT") {
        return {
            value: state.value + 1
        }
    }
    if (type === "DECREMENT") {
        return {
            value: state.value -1
        }
    }
    if (type === "DECREMENTS") {
        return {
            value: state.value -5
        }
    }
    if (type === "INCREMENTS") {
        return {
            value: state.value + 5
        }
    }
    if (type === "RED") {
        return { 
            state, color: 'red'
        }
    }

    return state
}
