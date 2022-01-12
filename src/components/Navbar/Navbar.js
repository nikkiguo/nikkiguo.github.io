import React from "react";
import './Navbar.css';
import { Link } from 'react-scroll';


function Navbar() {
    return (
        <nav className="NavbarItems">
            <h1 className="navbar-logo">Nikki Guo</h1>
            <ul className="nav-menu">
                <li>
                    <Link
                        to="/about"
                        smooth={true}
                        duration={700}
                        className="nav-links">
                        About
                    </Link>
                </li>
                <li>
                    <Link
                        to="/projects"
                        smooth={true}
                        duration={700}
                        className="nav-links">
                        Projects
                    </Link>
                </li>
                <li>
                    <Link
                        to="/art"
                        smooth={true}
                        duration={700}
                        className="nav-links">
                        Art
                    </Link>
                </li>
                <li>
                    <a
                        href="https://www.linkedin.com/in/nikkiguo"
                        target='_new'
                        className="nav-links">
                        Resume
                    </a>
                </li>
            </ul>
        </nav>
    )

}

export default Navbar;

