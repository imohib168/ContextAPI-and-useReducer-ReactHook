const numberReducer = (state, action) => {
    switch (action.type) {
        case "INCREMENT":
            return state + 1;
        case "DECREMENT":
            return state - 1;
        case "MULTIPLY":
            return state * action.val;
        case "DEFAULT":
            return 1;
    }
}

export default numberReducer;