import React, { useEffect } from 'react';

import ProjectList from './ProjectList';
import { useHistory } from "react-router-dom";


const Projects = (props) => {


    const history = useHistory();


    useEffect(() => {
        history.push("/projects");
    }, [])


    const { projects } = props
    return (
        <section id="projects" className="projects slide-in-bck-center" >
            <div className="main-container">
                <div className="intro">
                    <h2 className="main-title">My Latest Projects</h2>
                    <span className="fs16">or those I really like</span>
                    <p className="fs16">You can view more of my projects on <a href="https://github.com/Moriz-code">GitHub </a></p>
                </div>
                <div className="projects-container">
                    <ProjectList projects={projects} />
                </div>

            </div>
        </section>
    )
}

export default Projects