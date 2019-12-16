const initState = {
    MatchData: [
        {id: 0, image: "zero", value: 0, display: false},
        {id: 1, image: "zero", value: 0, display: false},
        {id: 2, image: "one", value: 1, display: false},
        {id: 3, image: "one", value: 1, display: false},
        {id: 4, image: "two", value: 2, display: false},
        {id: 5, image: "two", value: 2, display: false},
        {id: 6, image: "three", value: 3, display: false},
        {id: 7, image: "three", value: 3, display: false},
    ]
}

const rootReducer = (state = initState, action) => {
    return state;
}

export default rootReducer