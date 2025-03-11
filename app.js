//import React from 'react';

const parent = React.createElement(
    "div",
    {id:'parent',xyz:'something'},
    [
        React.createElement("div",{id:"child"},[
            React.createElement("h1",{id:"heading1"},"H1 is live"),
            React.createElement("h2",{id:"heading2"},"H2")
        ]),
        React.createElement("div",{id:"child2"},[
            React.createElement("h1",{id:"heading3"},"H1"),
            React.createElement("h2",{id:"heading4"},"H2")
        ])
    ]
);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);
console.log(parent);

