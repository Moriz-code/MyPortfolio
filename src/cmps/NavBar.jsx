import React, { useState, useEffect } from 'react';

import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
// import { NavLink, Link } from 'react-router-dom';

const NavBar = (props) => {

    const [scroll, setScroll] = useState(0)

    useEffect(() => {
        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY < 100
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck)
            }
        })
    })


    const handleSetActive = (to) => {
        // history.push('/template');
        console.log(to);
    }

    return (
        <div className={`main-nav fixed  ${scroll ? '' : 'white bg'}`}>
            <div className="content">
                <div className="logo"><a href="#home">Mor's Protfolio<span className="red-dot">.</span></a></div>
                <ul>
                    <Link to={'/'} activeClass="active" to="home" spy={true} smooth={true} duration={300} onSetActive={handleSetActive}>
                        Home
                      </Link>
                    <Link to={'/about'} activeClass="active" to="about" spy={true} smooth={true} duration={300} onSetActive={handleSetActive}>
                        About
                      </Link>
                    <Link to={'/projects'} activeClass="active" to="projects" spy={true} smooth={true} duration={300} onSetActive={handleSetActive}>
                        Projects
                      </Link>
                    <Link to={'/contact'} activeClass="active" to="contact" spy={true} smooth={true} duration={300} onSetActive={handleSetActive}>
                        Contact
                      </Link>
                </ul>
            </div>
        </div>
    )
}

export default NavBar