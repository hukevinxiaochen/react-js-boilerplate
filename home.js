import React from 'react';

var Home = React.createClass({
    render: function () {
        return(
            <section>
                <h1>Erica &amp; Kevin</h1>
                <img src="couple.jpg" className="feature" />
                <h2>April 29th, 2017</h2>
                <h3>Lancaster, Pennsylvania</h3>
            </section>
        );
    }
});

export default Home;
