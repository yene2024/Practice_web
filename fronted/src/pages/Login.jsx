import React from 'react';
import ReactDOM from 'react-dom';
import Form from '../components/Form';
import './styles.css';

function Login() {
    return (
        <div id="root">
            <div className="content">
                <img src="/home/yeneishla/Downloads/IMG_4002.png" alt="Logo" className="logo" />
                <div>Level You</div>
            </div>
            {/* Primer elemento aparte */}
            <div className="separate-element">
                <div className="text-style">Access Your Account</div>
                <div className="rectangle-large"></div>
                <div className="rectangle"></div>
                <Form route="/api/token/" method="login" />
            </div>
            {/* Segundo elemento aparte */}
            <div className="second-separate-element"></div>
        </div>
    );
}

export default Login;
