import React from 'react';

const Layout = (props) =>
    <div style={{backgroundColor: 'orange'}}>
        <h2>Hello, world</h2>
        {props.children}
    </div>;

export {Layout as default};
