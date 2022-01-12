import React from "react";
import './Projects.css';
import Pulse from 'react-reveal/Pulse';
import { NewsHeaderCard } from 'react-ui-cards';

function Projects() {

    return (
        <div id="/projects">
            <div className="Projects">
                <h1>Projects</h1>
                <div className="Project-Row">
                    <NewsHeaderCard
                        float
                        href='https://github.com/nikkiguo/Ripple-App'
                        thumbnail='/images/projects/ripple.png'
                        title='Ripple'
                        className='Project-Card'
                        author='Android Mobile App, Winner at SheCreates Makeathon'
                        tags={['Java', 'Firebase', 'CRUD', 'Google Cloud API']}
                    />
                    <NewsHeaderCard
                        float
                        href='https://github.com/nikkiguo/Speed-Draw'
                        thumbnail='/images/projects/speed-draw.png'
                        title='Speed Draw'
                        className='Project-Card'
                        author='Web App'
                        tags={['React', 'Pexels API', 'JSX', 'HTML', 'CSS']}
                    />
                </div>
                <div className="Project-Row">
                    <NewsHeaderCard
                        float
                        href='https://github.com/nikkiguo/Projectile-Motion-Simulator'
                        thumbnail='/images/projects/projectile-motion.png'
                        title='Projectile Motion Simulator'
                        className='Project-Card'
                        author='Java GUI'
                        tags={['Java', 'Swing', 'HTML', 'OOP']}
                    />
                    <NewsHeaderCard
                        float
                        href='https://github.com/nikkiguo/nikkiguo.github.io'
                        thumbnail='/images/projects/personal-website.png'
                        title='Personal Portfolio'
                        className='Project-Card'
                        author='Website'
                        tags={['React', 'Figma', 'JSX', 'HTML', 'CSS']}
                    />
                </div>
                <div className="Project-Row">
                    <NewsHeaderCard
                        float
                        href='https://journal.stemfellowship.org/doi/pdf/10.17975/sfj-2020-001'
                        thumbnail='/images/projects/research.png'
                        title='Rising Sea Levels Research'
                        className='Project-Card'
                        author='Data Visualizations, Published Abstract'
                        tags={['Python', 'Jupyter Notebook', 'Pandas']}
                    />
                    <NewsHeaderCard
                        float
                        thumbnail='/images/projects/uniify.png'
                        title='Uniify'
                        className='Project-Card'
                        author='Finalist at the UW Health Informatics Challenge'
                        tags={['UX/UI', 'Figma', 'Project Pitch']}
                    />
                </div>
            </div>
        </div>
    )

}

export default Projects;

