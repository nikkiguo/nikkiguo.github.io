import React from "react";
import Typist from 'react-typist';
import './Hero.css';

function Hero() {
    return (
        <header className="App-header">
            <span className="Header-text">
            <h1>Greetings! My name is Nikki.</h1>
                <h1>
                    <Typist cursor={{ show: false }}> I am a
                        <span className="Type-header"> software developer.
                            <Typist.Delay ms={500} />
                            <Typist.Backspace count={19} delay={1000} /> UW CS student.
                            <Typist.Delay ms={500} />
                            <Typist.Backspace count={14} delay={1000} /> lifelong learner. 
                        </span>
                    </Typist>
                </h1>
            </span>
        </header>
    )
}

export default Hero;

