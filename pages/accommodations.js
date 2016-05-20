var React = require('react');

var Accommodations = React.createClass({
    render: function () {
        return (
            <div className="content">
                <h3>Accommodations</h3>
                <ul>
                    <li>Picture of hotel</li>
                    <li>Address of hotel</li>
                    <li>How to make reservation</li>
                </ul>
            </div>
        );
    }
});

export default Accommodations;
