const numberReducer = (state, action) => {
    switch (action.type) {
        case "INCREMENT":
            return state + action.val;
        case "DECREMENT":
            return state - action.val;
        case "MULTIPLY":
            return state * action.val;
        case "DEFAULT":
            return 1;
        default:
            throw new Error();
    }
}

export default numberReducer;