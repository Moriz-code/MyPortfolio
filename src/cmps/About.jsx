import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";


import hit from '../Images/about/hit.png';
import ca from '../Images/about/codingacademy.png';

//logos
import htmlLogo from '../Images/logos/html5.png'
import jsLogo from '../Images/logos/js.png';
import cssLogo from '../Images/logos/css3.png';
import reactLogo from '../Images/logos/react.png';
import vueLogo from '../Images/logos/vue.png';
import sassLogo from '../Images/logos/sass.png';
import nodeLogo from '../Images/logos/nodejs.png';
import esLogo from '../Images/logos/es6.png';
import jQuery from '../Images/logos/jquery.gif';


const About = () => {

    const history = useHistory();


    useEffect(() => {
        history.push("/about");
    }, [])



    return (
        <section id="about" className="about slide-in-bck-center">
            <div className="info-txt">
                <div className="main-container intro">
                    <h2 className="main-title">About Me!</h2>
                    <span className="fs16">Just some more details.</span>

                </div>

                <div className="subjects-container">
                    <div className="education main-container">
                        <div className="title">

                            Education
                    </div>
                        <div className="subject eduction-info">
                            <ul>
                                <li className="swing-in-top-fwd"><a href="https://www.hit.ac.il/telem/B.A"><img className="logo" src={hit} alt="logo" /></a>
                                    <span className="fs28">B.A in Instructional Design</span>
                                    <p className="fs20">Interactive Multimedia Design, Programming, Technology & Information Systems </p>

                                </li>

                                <li className="swing-in-top-fwd"><a href="https://www.coding-academy.org/"><img className="logo" src={ca} alt="logo" /></a>
                                    <span className="fs28">Full Stack Developer</span>
                                    <p className="fs20">Intensive Coding Bootcamp (640+ hours) that qualifies Full Stack developers</p>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="skills">
                        <div className="main-container skills-info">
                            <div className="title">

                                Skills
                    </div>
                            <div className="subject">
                                <div className="logo-container">
                                    <img src={htmlLogo} title="HTML5" alt="html5" />
                                    <img src={jsLogo} title="Java Script" alt="JS" />
                                    <img src={cssLogo} title="CSS 3" alt="CSS3" />
                                    <img src={esLogo} title="ES6" alt="ES6" />
                                    <img src={sassLogo} title="SASS" alt="SASS" />
                                    <img src={reactLogo} title="React" alt="React" />
                                    <img src={vueLogo} title="Vue" alt="Vue" />
                                    <img src={nodeLogo} title="Node.js" alt="Node" />
                                    <img src={jQuery} title="jQuery" alt="jQuery" />
                                </div>
                            </div>
                        </div>
                    </div>



                </div>
            </div>

        </section>
    )

}

export default About

