import React from 'react';

var Home = React.createClass({
    render: function () {
        return(
            <div className="content"> 
                <h1>Erica &amp; Kevin</h1>
                <img src="couple.jpg" className="feature" />
                <h2>April 29th, 2017</h2>
                <h3>Lancaster, Pennsylvania</h3>
            </div>
        );
    }
});

export default Home;
