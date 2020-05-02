import React, { useEffect } from 'react';

import mamram from '../Images/about/mamram.png';
import flyingcargo from '../Images/about/flyingcargo.jpg';
import stratasys from '../Images/about/stratasys.jpg';
import amdocs from '../Images/about/amdocs.png';
import johnbryce from '../Images/about/johnbryce.png';



const Timeline = () => {

    const description = ['Mamram', 'flyingcargo Ltd', 'Stratasys', 'Amdocs', 'JohnBryce']

    useEffect(() => {
        console.log('timeline');
    }, [])


    return (
        <div className="timeline">

            <div1 className="circle-container">
                <section className="tl no-border"></section>
                <section className="tr no-border"></section>
                <div className="flex">
                    <span className="circle"><img src={johnbryce} /></span>
                </div>
                <section className="bl"></section>
                <section className="br"></section>
            </div1>
            <section className="info no-border">
                <h3>Instructional Designer </h3>
                <span>
                    <ul>
                        <li>Designed and developed custom learning products like: eLearning courses, videos and interactive simulations</li>
                        <li>Worked collaboratively with subject matter experts to identify and set learning goals according to the target audience's training needs</li>
                        <li>Managed multiple projects from different fields of knowledge</li>
                    </ul>
                </span>


            </section>
            <section></section>

            <section></section>
            <section className="info">
                <h3>Instructional Designer</h3>
                <span>
                    <ul>
                        <li>Planned, designed and developed simulations and e-learnings</li>
                        <li>Created training modules for CRM software</li>
                    </ul>
                </span>
            </section>
            <div1 className="circle-container">
                <section className="tl"></section>
                <section className="tr"></section>
                <div className="flex">
                    <span className="circle"><img src={amdocs} /></span>
                </div>
                <section className="bl"></section>
                <section className="br"></section>
            </div1>

            <div1 className="circle-container">
                <section className="tl"></section>
                <section className="tr"></section>
                <div className="flex">
                    <span className="circle"><img src={stratasys} /></span>
                </div>
                <section className="bl"></section>
                <section className="br"></section>
            </div1>
            <section className="info">
                <h3>IT Technician</h3>
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
                <h3>Helpdesk Technician </h3>
                <span>
                    <ul >
                        <li>Supported over 600 user’s problems resolution (company programs, remote control, mail server)</li>
                    </ul>
                </span>
            </section>

            <div1 className="circle-container">
                <section className="tl"></section>
                <section className="tr"></section>
                <div className="flex">
                    <span className="circle"><img src={flyingcargo} /></span>
                </div>
                <section className="bl"></section>
                <section className="br"></section>
            </div1>


            <div1 class="circle-container">
                <section class="tl"></section>
                <section class="tr"></section>
                <div class="flex mamram">
                    <span class="circle"><img src={mamram} /></span>
                    <span>Mamram</span>
                </div>
                <section class="bl"></section>
            </div1>
            <section className="info">
                <h3>Assimilate Information Systems & Network Manager </h3>
                <span><ul>
                    <li>Installed & configured hardware, software, and networking systems</li>
                    <li>Trained new soldiers, created a training program and kept it up to date.</li>
                    <li>Supported over 3000 users from different units</li>
                </ul></span>
            </section>


        </div>)

    // return (<div>
    //     <div classNameNameName="timeline-container">
    //         <div>
    //             <span>2009-2011</span>
    //             <img src={mamram} />
    //         </div>

    //         <div>
    //             <span>2009-2010</span>
    //             <img src={flyingcargo} />
    //         </div>

    //         <div>
    //             <span>2011-2017</span>
    //             <img src={stratasys} />
    //         </div>

    //         <div>
    //             <span>2018</span>
    //             <img src={amdocs} />
    //         </div>

    //         <div>
    //             <span>2018-2019</span>
    //             <img src={johnbryce} />
    //         </div>

    //     </div>

    // </div>




}

export default Timeline