import React from 'react';

var WeddingParty = React.createClass({
    render: function () {
        return (
            <div className="content">
                <h3>Wedding Party</h3>
                    <ul>
                        <li>Maid of Honor
                            <ul>
                                <li>Photo</li>
                                <li>Info</li>
                            </ul>
                        </li>
                        <li>Best Man
                            <ul>
                                <li>Photo</li>
                                <li>Info</li>
                            </ul>
                        </li>
                    </ul>
            </div>
        );
    }
});

export default WeddingParty;
