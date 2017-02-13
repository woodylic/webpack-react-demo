import React from 'react';
import { render } from 'react-dom';

class HelloReact extends React.Component {
    render() {
        return(
            <div>Hello React!</div>
        );
    }
}

render(<HelloReact />, document.getElementById("app"));

if (module.hot) {
    module.hot.accept();
}