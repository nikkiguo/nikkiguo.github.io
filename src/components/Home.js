import React from "react";
import Hero from './Hero/Hero';
import About from './About/About';
import Projects from './Projects/Projects';
import Art from './Art/Art';

function Home() {
    return (
        <div id='/'>
            <Hero />
            <About />
            <Projects />
            <Art />
            <footer style={{ padding:'1rem', backgroundColor:'#D4F3FD'}}>Made with ✨ by Nikki Guo</footer>
        </div>
    )

}

export default Home;

