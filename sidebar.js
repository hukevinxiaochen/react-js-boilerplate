import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Link from 'react-router/lib/Link';
import IndexLink from 'react-router/lib/IndexLink'

var SideBar = React.createClass({
    render: function () {
        return (
            <Drawer style={{position: "static"}} width={200}>
                <IndexLink to="/"><MenuItem>Home</MenuItem></IndexLink>
                <Link to="/about-us"><MenuItem>About Us</MenuItem></Link>
                <MenuItem>Wedding Party</MenuItem>
                <MenuItem>Ceremony &amp; Reception</MenuItem>
                <MenuItem>Accommodations</MenuItem>
                <MenuItem>Transportation</MenuItem>
                <MenuItem>Things To Do</MenuItem>
                <MenuItem>Registry</MenuItem>
            </Drawer>
        );
    }
});

export default SideBar;
