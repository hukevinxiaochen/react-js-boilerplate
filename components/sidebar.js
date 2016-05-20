import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Link from 'react-router/lib/Link';
import IndexLink from 'react-router/lib/IndexLink'

var SideBar = React.createClass({
    getInitialState: function () { 
        return {
            // Open when window is wide enough.
            open: !window.matchMedia('(max-width: 840px)').matches,
            docked: !window.matchMedia('(max-width: 840px)').matches,
            mql: window.matchMedia('(max-width: 840px)')
        }
    },
    handleToggle: function () {
        this.setState({ open: !this.state.open }); 
    },
    handleClose: function () {
        this.setState({ open: !this.state.mql.matches });
    },
    dockedToggle: function (mql) {
        this.setState({
            docked: !mql.matches,
            open: !mql.matches});
    },
    componentDidMount: function () {
        this.state.mql.addListener(this.dockedToggle);
    },
    componentWillUnmount: function () {
        this.state.mql.removeListener(this.dockedToggle);
    },    
    render: function () {
        var menuItems = this.props.pages.map(
            (page) => {
                return <Link to={page.path} onTouchTap={this.handleClose}>
                    <MenuItem>{page.name}</MenuItem>
                    </Link>
            }
        ); 

        return (
            <Drawer width={200} 
                open={this.state.open}
                docked={this.state.docked}
                onRequestChange={(open) => this.setState({open})}>
                <IndexLink to="/" onTouchTap={this.handleClose}>
                    <MenuItem>Home</MenuItem>
                </IndexLink>
                {menuItems}
            </Drawer>
        );
    }
});

export default SideBar;
