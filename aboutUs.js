import React from 'react';

var AboutUs = React.createClass({
    render: function () {
        return(
            <div className="content">
                <img className="feature" src="dancing.jpg" />
                <p>Kevin and Erica first met during orientation week at Oberlin College. However, the exact timing of this momentous occasion is controversial. Erica remembers Kevin asking her to dance at the Orientation Swing Dance, but Kevin has no recollection of this event. He was first aware of Erica's existence while swimming at Chance Creek when he told her that she should not major in Biology. Fortunately, Erica did not take his advice, and never has since. Not a semester went by when they did not take at least one class together.</p>
            </div>
        );
    }
});

export default AboutUs;
