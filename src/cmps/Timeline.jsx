import React from 'react';

import mamram from '../Images/about/mamram.png';
import flyingcargo from '../Images/about/flyingcargo.jpg';
import stratasys from '../Images/about/stratasys.png';
import amdocs from '../Images/about/amdocs.png';
import johnbryce from '../Images/about/johnbryce.png';
import haaretz from '../Images/about/haaretz.png';
import codex from '../Images/about/codex.jpeg';



const Timeline = () => {
    return (
        <div className="timeline">
                        <div className="circle-container">
                <section className="tl no-border"></section>
                <section className="tr no-border"></section>
                <div className="flex">
                    <span className="circle"><img src={haaretz} alt="haaretz" /></span>
                </div>
                <section className="bl"></section>
                <section className="br"></section>
            </div>
            <section className="info no-border">
                <h3>Frontend Developer (React Team)<span className="fs16">Jun 2020 - present</span></h3>
                <span>
                    <ul>
                        <li>Creating new responsive and pixel perfect features from scratch </li>
                        <li>Building and maintaining reusable components used by 3 different web apps (Haaretz.co.il, the marker.com, Haaretz.com)</li>
                        <li>Troubleshooting and resolving complex programming problems</li>
                        <li>Writing E2E tests</li>
                    </ul>
                </span>
            </section>

            {/* sections for design  */}
            <section></section>
            <section></section>

            <section className="info">
                <h3>Frontend Developer <span className="fs16">Apr 2020 – July 2020 (temp project)</span></h3>
                <span>
                    <ul>
                        <li>Developed using REACT and SASS</li>
                        <li>Sketched wireframes, prototyped concepts and created UI designs for better user experience</li>
                    </ul>
                </span>
            </section>
            <div className="circle-container">
                <section className="tl"></section>
                <section className="tr"></section>
                <div className="flex">
                    <span className="circle"><img src={codex} alt="codex" /></span>
                </div>
                <section className="bl"></section>
                <section className="br"></section>
            </div>

            <div className="circle-container">
                <section className="tl"></section>
                <section className="tr"></section>
                <div className="flex">
                    <span className="circle"><img src={johnbryce} alt="jb" /></span>
                </div>
                <section className="bl"></section>
                <section className="br"></section>
            </div>
            <section className="info">
                <h3>Instructional Designer  <span className="fs16">Jun 2018 - Sep 2019</span></h3>
                <span>
                    <ul>
                        <li>Designed and developed custom learning products like: eLearning courses, videos, interactive simulations and web job aids</li>
                        <li>Worked collaboratively with subject matter experts to identify and set learning goals according to the target audience's training needs</li>
                        <li>Managed multiple projects from different fields of knowledge</li>
                    </ul>
                </span>
            </section>

            {/* sections for design  */}
            <section></section>
            <section></section>

            <section className="info">
                <h3>Instructional Designer  <span className="fs16">April 2018 - Jun 2018 (temp project)</span></h3>

                <span>
                    <ul>
                        <li>Planned, designed and developed simulations and e-learnings</li>
                        <li>Created training modules for CRM software</li>
                    </ul>
                </span>
            </section>
            <div className="circle-container">
                <section className="tl"></section>
                <section className="tr"></section>
                <div className="flex">
                    <span className="circle"><img src={amdocs} alt="amdocs" /></span>
                </div>
                <section className="bl"></section>
                <section className="br"></section>
            </div>

            <div className="circle-container">
                <section className="tl"></section>
                <section className="tr"></section>
                <div className="flex">
                    <span className="circle"><img src={stratasys} alt="stratasys" /></span>
                </div>
                <section className="bl"></section>
                <section className="br"></section>
            </div>
            <section className="info">
                <h3>IT Technician  <span className="fs16">Apr 2013 - Aug 2017</span></h3>

                <span>
                    <ul>
                        <li>Installed, tested and configured complex hardware, software, and networking systems</li>
                        <li>Supported over 1200 users worldwide, complex incidents resolution and professionalism</li>
                        <li>Created products for software and new procedures to improve department productivity</li>
                    </ul>
                </span>
            </section>

            <section></section>
            <section></section>
            <section className="info">
                <h3>Helpdesk Technician <span className="fs16">Jul 2011 - Jun 2012</span></h3>

                <span>
                    <ul >
                        <li>Supported over 600 user’s problems resolution (company programs, remote control, mail server)</li>
                    </ul>
                </span>
            </section>

            <div className="circle-container">
                <section className="tl"></section>
                <section className="tr"></section>
                <div className="flex">
                    <span className="circle"><img src={flyingcargo} alt="fc" /></span>
                </div>
                <section className="bl"></section>
                <section className="br"></section>
            </div>


            <div className="circle-container">
                <section className="tl"></section>
                <section className="tr"></section>
                <div className="flex mamram">
                    <span className="circle"><img src={mamram} alt="mamram" /></span>
                    <span>Mamram</span>
                </div>
                <section className="bl"></section>
            </div>
            <section className="info">
                <h3>Assimilate Information Systems & Network Manager </h3>
                <span><ul>
                    <li>Installed & configured hardware, software, and networking systems</li>
                    <li>Trained new soldiers, created a training program and kept it up to date.</li>
                    <li>Supported over 3000 users from different units</li>
                </ul></span>
            </section>


        </div>)



}

export default Timeline