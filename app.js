// app.js
var React = require('react');

// node_modules/material-ui
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import SideBar from './sidebar';

var App = React.createClass({
    render: function () {
        return(
            <MuiThemeProvider muiTheme={getMuiTheme()}>
                <div>
                    <aside> 
                        <SideBar className="sidebar" />
                    </aside>
                    {this.props.children}
                </div>
            </MuiThemeProvider>
        );
    }
});

export default App;
