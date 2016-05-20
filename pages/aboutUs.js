import React from 'react';

var AboutUs = React.createClass({
    render: function () {
        return(
            <div className="content">
                <img className="feature" src="../images/dancing.jpg" />
                <p>Kevin and Erica first met during orientation week at Oberlin College. However, the exact timing of this momentous occasion is controversial. Erica remembers Kevin asking her to dance at the Orientation Swing Dance, but Kevin has no recollection of this event. He was first aware of Erica's existence while swimming at Chance Creek when he told her that she should not major in Biology. Fortunately, Erica did not take his advice, and never has since. Not a semester went by when they did not take at least one class together.</p>
                <blockquote>
                <p>Graduating</p>
                </blockquote>
                <blockquote>
                <p>New York</p>
                </blockquote>
                <blockquote>
                <p>Medical School</p>
                </blockquote>
                <ul>
                <li>How we got engaged</li>
                </ul>
                <blockquote>
                <p>After lengthy discussions about <em>their life philosophy</em>, Kevin and Erica schemed to bring both of their families together for Thanksgiving dinner in Lancaster where they announced their engagement.</p>
                </blockquote>
            </div>
        );
    }
});

export default AboutUs;
