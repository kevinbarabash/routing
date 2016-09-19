import {createStore} from 'redux'

let reducer = require('./reducer')

const store = createStore(reducer, { color: 'pink' }, window.devToolsExtension && window.devToolsExtension())

if (module.hot) {
    module.hot.accept('./reducer', function () {
        reducer = require('./reducer')
        store.replaceReducer(reducer)
    })
}

export {store as default}
