// index.js

/*
 * Front-end libraries we rely on.
 * - React
 * - Material-UI
*/

var React = require('react');
var ReactDOM = require('react-dom');

// React Components

var HelloWorld = React.createClass({
    render: function () {
        return(<h1>Hello World</h1>);
    }
});

// Render

ReactDOM.render(
    <HelloWorld />,
    document.getElementById('greeting')
);
