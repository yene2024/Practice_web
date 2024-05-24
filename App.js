import React, { useState } from 'react';

const App = () => {
    const [text, setText] = useState("Click me for functionality");

    const clickMe = () => {
        setText("I was clicked, the JavaScript is working");
    };

    return (
        <div style={{ width: '5916px', height: '3054px', position: 'relative', background: 'white' }}>
            <div style={{ width: '5902px', height: '3054px', left: '14px', top: '0', position: 'absolute' }}>
                <div style={{ width: '5902px', height: '3054px', left: '0', top: '0', position: 'absolute' }}>
                    <div style={{
                        width: '5902px',
                        height: '3054px',
                        left: '0',
                        top: '0',
                        position: 'absolute',
                        background: 'linear-gradient(105deg, #38054A 0%, rgba(39, 17, 128, 0.85) 11%, rgba(45, 0, 104, 0.83) 15%, rgba(31, 14, 112, 0.90) 24%, rgba(46, 0, 104, 0.89) 31%, rgba(32, 15, 112, 0.89) 60%, rgba(46, 0, 104, 0.90) 70%, rgba(42, 9, 116, 0.89) 86%, rgba(39, 18, 128, 0.88) 90%, #38054A 97%)'
                    }}></div>
                    <div style={{ width: '181.77px', height: '78.49px', left: '3838.53px', top: '150.86px', position: 'absolute' }}></div>
                    <div style={{ width: '46.71px', height: '39.76px', left: '2998.73px', top: '1929.29px', position: 'absolute' }}></div>
                </div>
                <div style={{
                    width: '294.49px',
                    height: '78.49px',
                    left: '365.58px',
                    top: '159.59px',
                    position: 'absolute',
                    color: 'white',
                    fontSize: '64px',
                    fontFamily: 'Inter',
                    fontWeight: '400',
                    wordWrap: 'break-word'
                }}>Level You</div>
            </div>
            <button onClick={clickMe}>Click me</button>
            <div className="testClass" style={{ backgroundColor: 'yellow' }}>{text}</div>
        </div>
    );
};

export default App;
