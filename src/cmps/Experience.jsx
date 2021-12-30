import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import Timeline from './Timeline';

const Experience = () => {

    const history = useHistory();

    useEffect(() => {
        history.push("/experience");
    }, [])

    return (
        <section id="experience" className=" experience slide-in-bck-center">

            <div className="main-container">
                <div className="intro">
                    <h2 className="main-title">Experience</h2>
                    <span className="fs16">What I did so far. </span>
                    <p className="fs16">mmm... What will be my next stop?</p>
                </div>
                <div className="subject main-container">
                    <Timeline />
                </div>
            </div>

        </section>
    )

}


export default Experience