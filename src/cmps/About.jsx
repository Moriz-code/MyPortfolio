import React from 'react';

import Timeline from './Timeline';

import skills from '../Images/about/intelligence.png';
import work from '../Images/about/work.png';
import eduction from '../Images/about/eduction.png';
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
import esLogo from '../Images/logos/es6.png'

// import { lazyload } from 'react-lazyload';

// @lazyload({
//     height: '100%',
//     once: true,
//     offset: 100
// })



const About = () => {
    return (
        <section id="about" className="about bounce-in-top">
            <div className="info-txt">
                <div className="main-container intro">
                    <h2 className="main-title">About Me</h2>
                    <span className="fs16">Just some more details.</span>
                    <p className="fs16">btw, nice to have you here</p>
                </div>

                <div className="subjects-container">
                    <div className="education main-container">
                        <div className="title">
                            {/* <img className="icon" src={eduction} /> */}
                       Education
                    </div>
                        <div className="subject eduction-info">
                            <ul>
                                <li><a href="https://www.hit.ac.il/telem/B.A"><img className="logo" src={hit} /></a>
                                    <span className="fs28">B.A in Instructional Design</span>
                                    <p className="fs20">Learning & Instruction, Technology & Information Systems, Interactive Multimedia Design</p>

                                </li>

                                <li><a href="https://www.coding-academy.org/"><img className="logo" src={ca} /></a>
                                    <span className="fs28">Full Stack Developer</span>
                                    <p className="fs20">Intensive coding bootcamp (640+ hours) that qualifies Full Stack developers</p>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="skills">
                        <div className="main-container skills-info">
                            <div className="title">
                                {/* <img className="icon" src={skills}></img> */}
                       Skills
                    </div>
                            <div className="subject">
                                <div className="logo-container">
                                    <img src={htmlLogo} title="HTML5"></img>
                                    <img src={jsLogo} title="Java Script"></img>
                                    <img src={cssLogo} title="CSS 3"></img>
                                    <img src={esLogo} title="ES6"></img>
                                    <img src={sassLogo} title="SASS"></img>
                                    <img src={reactLogo} title="React"></img>
                                    <img src={vueLogo} title="Vue"></img>
                                    <img src={nodeLogo} title="Node.js"></img>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="exprience">
                        <div>


                            <div className="title main-container">
                                {/* <img className="icon" src={work}></img> */}
                       Experience
                    </div>
                            <div className="subject main-container">
                                <div>
                                    <Timeline></Timeline>
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

