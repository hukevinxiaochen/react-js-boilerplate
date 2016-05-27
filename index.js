import React from 'react';
import ReactDOM from 'react-dom';

// Create the component
class Hello extends React.Component {
    render () {
        return <h1>Hello</h1>
    }
}

// Mount or render to a DOM element
ReactDOM.render(<Hello />, document.getElementById('hello'));
