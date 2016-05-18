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
import App from './app';
import Home from './home';
import AboutUs from './aboutUs';

// React Router
import Router from 'react-router/lib/Router';
import Route from 'react-router/lib/Route';
import hashHistory from 'react-router/lib/hashHistory';
import IndexRoute from 'react-router/lib/IndexRoute';

// Render
ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/> 
            <Route path="/about-us" component={AboutUs}/> 
        </Route>
    </Router>
), document.getElementById('app'));

// ReactDOM.render(
//     <HelloWorld />,
//     document.getElementById('greeting')
// );
