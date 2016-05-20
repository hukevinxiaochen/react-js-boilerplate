// app.js
var React = require('react');

// node_modules/react-responsive
import MediaQuery from 'react-responsive';

// node_modules/material-ui
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

// Custom Components
import SideBar from './sidebar';

// Data Model
var pages = [{name: "About Us", path: "/about-us"},
            {name: "Wedding Party", path: "/wedding-party"},
            {name: "Ceremony & Reception", path: "/ceremony-reception"},
            {name: "Accommodations", path: "/accommodations"},
            {name: "Transportation", path: "/transportation"},
            {name: "Things To Do", path: "/things-to-do"},
            {name: "Registry", path: "/registry"}];

// component
var App = React.createClass({
    toggleSideBar: function () { 
        this.drawer.handleToggle();
    },
    render: function () {
        return(
            <MuiThemeProvider muiTheme={getMuiTheme()}>
                <div>
                    <MediaQuery maxWidth={840}>
                        <AppBar title="E &amp; K" 
                            onLeftIconButtonTouchTap={this.toggleSideBar} />
                    </MediaQuery>
                    <SideBar pages={pages}
                        ref={(ref) => this.drawer = ref}
                        className="sidebar" />
                    <section>
                        {this.props.children}
                    </section>
                </div>
            </MuiThemeProvider>
        );
    }
});

export default App;
