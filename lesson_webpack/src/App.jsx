import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>React</h1>
                <h2>Webpack</h2>
                <h2>Webpack</h2>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));