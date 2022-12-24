import React from "react";
import './About.css';

function About() {
    return (
        <div id='/about'>
            <div className="About-me">
                <h1>About Me</h1>
                <div className="About-container">
                    <div className="About-container-child">
                        <img className="Profile-Img" src="/images/profile.jpg" alt="Profile" />
                    </div>
                    <div className="About-container-child">
                        <p className="About-description">
                            Hi, I’m Nikki! I am a second year Computer Science student at the University of Waterloo. <br /><br />
                            As a software developer, I aim to create products that make a meaningful impact for users. <br /><br />
                            Through past internships, side projects, and extracurriculars, I have attained skills in mobile/web development, data science, design, and leadership. <br /><br />
                            In my free time, I enjoy drawing, painting, reading, working out, running, and exploring the outdoors! <br /><br />
                            Feel free to <a className="About-link" href="https://www.linkedin.com/in/nikkiguo" target='_new'>reach out</a>! <br /><br />
                            <a className="About-link" href="https://www.github.com/nikkiguo" target='_new'>GitHub</a> &nbsp;| &nbsp;
                            <a className="About-link" href="https://www.linkedin.com/in/nikkiguo" target='_new'>LinkedIn</a> &nbsp;| &nbsp;
                            <a className="About-link" href="https://www.linkedin.com/in/nikkiguo" target='_new'>Resume</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default About

