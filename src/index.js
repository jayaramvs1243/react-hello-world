import React from 'react';
import ReactDOM from 'react-dom';

/* class HelloWorld extends React.Component {
    render() {
        return (
            <div>Hello World !</div>
        );
    }
} */

const user = {
    firstname: 'Jayaram',
    lastname: 'V S'
};

function username() {
    return user.firstname + ' ' + user.lastname;
}

function HelloWorld() {
    return (
        <div>
            <h1 style={{color: "red"}}>Hello {username()} !</h1>
            <h2>It's {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
}

ReactDOM.render(
    <HelloWorld />,
    document.getElementById('root')
);
