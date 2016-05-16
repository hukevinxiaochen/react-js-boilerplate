// index.js

/*
 * Front-end libraries we rely on.
 * - React
 * - Material-UI
*/

var React = require('react');
var ReactDOM = require('react-dom');
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

// Import Material-UI stuff
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyAwesomeReactComponent from './MyAwesomeReactComponent';
import SideBar from './sidebar';

// React Components

// var HelloWorld = React.createClass({
//     render: function () {
//         return(<h1>Hello World</h1>);
//     }
// });

const App = () => (
    <MuiThemeProvider muiTheme={getMuiTheme()}>
    <SideBar />
    </MuiThemeProvider>
);

// Render

ReactDOM.render(
    <App />,
    document.getElementById('app')
);

// ReactDOM.render(
//     <HelloWorld />,
//     document.getElementById('greeting')
// );
