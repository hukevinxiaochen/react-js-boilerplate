// app.js
var React = require('react');

// node_modules/material-ui
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import SideBar from './sidebar';

// node_modules/react-responsive
import MediaQuery from 'react-responsive';

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
                    <SideBar ref={(ref) => this.drawer = ref} className="sidebar" />
                    <section>
                        {this.props.children}
                    </section>
                </div>
            </MuiThemeProvider>
        );
    }
});

export default App;
