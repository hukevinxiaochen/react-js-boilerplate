import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Link from 'react-router/lib/Link';
import IndexLink from 'react-router/lib/IndexLink'

var SideBar = React.createClass({
    getDefaultProps: function () {
        return {};
    },
    getInitialState: function () { 
        return {
            open: !window.matchMedia('(max-width: 840px)').matches 
        }
    },
    handleToggle: function () {
        this.setState({
            open: !this.state.open 
        });
    },
    handleClose: function (mql) {
        if (mql.matches) {
            this.setState({open: false});
        }
        else {
            this.setState({open: true});
        }
    },
    componentDidMount: function () {
        window.matchMedia('(max-width: 840px)').addListener(this.handleClose);
    },
    componentWillUnmount: function () {
        window.matchMedia('(max-width: 840px)').removeListener(this.handleClose);
    },
    render: function () {
        return (
            <Drawer width={200} open={this.state.open}>
                <IndexLink to="/"><MenuItem>Home</MenuItem></IndexLink>
                <Link to="/about-us"><MenuItem>About Us</MenuItem></Link>
                <MenuItem>Wedding Party</MenuItem>
                <MenuItem>Ceremony &amp; Reception</MenuItem>
                <MenuItem>Accommodations</MenuItem>
                <MenuItem>Transportation</MenuItem>
                <MenuItem>Things To Do</MenuItem>
                <Link to="/registry"><MenuItem>Registry</MenuItem></Link>
            </Drawer>
        );
    }
});

export default SideBar;
