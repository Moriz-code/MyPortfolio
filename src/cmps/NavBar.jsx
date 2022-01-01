import React from 'react';

import { Link, } from 'react-scroll';

const NavBar = (props) => {

    return (
        <header className="header">
            <a className="logo" href="#home">Mor's Portfolio<span className="red-dot">.</span></a>
            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" htmlFor="menu-btn"><span className="navicon" /></label>
            <ul className="menu">
                <ul className="nav-links">
                    <li>
                        <Link to={'/'} activeClass="active" to="home" spy={true} smooth={true} duration={300}>
                            Home
                      </Link>
                    </li>

                    <li>
                        <Link to={'/about'} activeClass="active" to="about" spy={true} smooth={true} duration={300}>
                            About
                      </Link>
                    </li>

                    <li>
                        <Link to={'/projects'} activeClass="active" to="projects" spy={true} smooth={true} duration={300}>
                            Projects
                      </Link>
                    </li>

                    <li>
                        <Link to={'/experience'} activeClass="active" to="experience" spy={true} smooth={true} duration={300}>
                            Experience
                      </Link>
                    </li>

                    <li>
                        <Link to={'/contact'} activeClass="active" to="contact" spy={true} smooth={true} duration={300}>
                            Contact
                      </Link>
                    </li>
                </ul>
            </ul>
        </header>
    )
}

export default NavBar