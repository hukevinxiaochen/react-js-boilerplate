import React from 'react';

var CeremonyAndReception = React.createClass({
    render: function () {
        return(
<div className="content">
            <h3>Ceremony and Reception</h3>
            <ul>
            <li>Picture of Venue</li>
            <li>Name</li>
            <li>Address</li>
            <li>Time of Ceremony
            <ul>
            <li>Reception begins immediately following ceremony</li>
            </ul>
            </li>
            </ul>
            <p>&lt;!-- Come early for croquet before the ceremony? --&gt;</p>
        </div>
        );
    }
});

export default CeremonyAndReception;
