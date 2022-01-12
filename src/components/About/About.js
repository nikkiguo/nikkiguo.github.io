import React from "react";
import './About.css';
import "animate.css/animate.min.css";
import Fade from 'react-reveal/Fade';


function About() {
    return (
        <div id='/about'>
            <div className="About-me">
                <h1>About Me</h1>
                <div className="About-container">

                    <div className="About-container-child">
                        <Fade duration={1500}>
                            <img className="Profile-Img" src="/images/profile.jpg" alt="Profile" />
                        </Fade>
                    </div>

                    <div className="About-container-child">
                        <Fade duration={1500}>
                            <p className="About-description">
                                Hi, I’m Nikki! I am a first year Computer Science student at the University of Waterloo. <br /><br />
                                As a software developer, I aim to create products that make a meaningful impact for users. <br /><br />
                                Through past internships, side projects, and extracurriculars, I have attained skills in mobile/web development, data science, design, and leadership. <br /><br />
                                In my free time, I like to draw, paint, read books, run, volunteer in my community, and explore the outdoors. <br /><br />
                                Feel free to <a className="About-link" href="https://www.linkedin.com/in/nikkiguo" target='_new'>reach out</a>! <br /><br />
                                <a className="About-link" href="https://www.github.com/nikkiguo" target='_new'>GitHub</a> &nbsp;| &nbsp;
                                <a className="About-link" href="https://www.linkedin.com/in/nikkiguo" target='_new'>LinkedIn</a> &nbsp;| &nbsp;
                                <a className="About-link" href="https://www.linkedin.com/in/nikkiguo" target='_new'>Resume</a>
                            </p>
                        </Fade>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default About

