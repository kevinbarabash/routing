import React from 'react';
import {connect} from 'react-redux';

import store from './store';

const Layout = (props) => {
    const style = {
        backgroundColor: props.color,
        padding: 16,
    }

    const colors = ['pink', 'orange', 'plum', 'lime', 'lavender'];

    return <div style={style}>
        <h2>Hello, world</h2>
        {props.children}
        <div>
            {colors.map(color => <button 
                key={color}
                style={{marginRight:10, fontSize: 24}}
                onClick={(e) => {
                    history.pushState({color}, '', `/${color}`)
                    store.dispatch({type: 'color', color})
                }}
            >{color}</button>)}
        </div>
    </div>
}

const ConnectedLayout = connect((state, ownProps) => {
    return Object.assign({}, state, ownProps);
})(Layout);

export {ConnectedLayout as default};
