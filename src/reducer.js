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

document.addEventListener('popstate', (e) => {
    console.log(e)
})

module.exports = reducer;
