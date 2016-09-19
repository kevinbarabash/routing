const reducer = (state, action) => {
    // console.log(action);

    switch(action.type) {
        case 'color':
            return {
                ...state,
                color: action.color
            }
        default:
            return state
    }
}

module.exports = reducer;
