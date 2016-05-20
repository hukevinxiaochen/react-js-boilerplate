// index.js

/*
 * Front-end libraries we rely on.
 * - React
 * - Material-UI
 * - react-router
 * - react-responsive
*/

var React = require('react');
var ReactDOM = require('react-dom');
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();


// App Components
import App from './components/app';

// Pages
import Home from './pages/home';
import AboutUs from './pages/aboutUs';
import WeddingParty from './pages/weddingparty';
import CeremonyAndReception from './pages/ceremonyreception';
import Accommodations from './pages/accommodations';
import Transportation from './pages/transportation';
import ThingsToDo from './pages/thingstodo';
import Registry from './pages/registry';

// Routing
import Router from 'react-router/lib/Router';
import Route from 'react-router/lib/Route';
import hashHistory from 'react-router/lib/hashHistory';
import IndexRoute from 'react-router/lib/IndexRoute';

var pageD = {
    aboutus: "/about-us" 
};

// Render
ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path={pageD.aboutus}  component={AboutUs} />
            <Route path="/ceremony-reception" component={CeremonyAndReception} />
            <Route path="/wedding-party" component={WeddingParty} />
            <Route path="/accommodations" component={Accommodations} />
            <Route path="/transportation" component={Transportation} />
            <Route path="/things-to-do" component={ThingsToDo} /> 
            <Route path="/registry" component={Registry} />
        </Route>
    </Router>
), document.getElementById('app'));
