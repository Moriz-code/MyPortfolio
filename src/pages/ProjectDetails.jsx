import React, { useEffect, useState } from 'react';
import NavBar from '../cmps/NavBar';


import projectService from '../services/project.service';


const ProjectDetails = (props) => {

    const [project, setProject] = useState('');


    useEffect(async () => {
        const currentProject = await projectService.getById(props.match.params.id);
        setProject(currentProject);
    }, [])



    return (<>
        <NavBar></NavBar>
        {project ?
            <div className="project-container">
                <div className="head">
                    <h1 className="main-title">{project.title}</h1>
                    <span className="fs28">{project.description}</span>
                </div>

                <div className="content">
                    <div className="details">
                        <div>
                            <h3 className="title">About the project</h3>
                            <p>{project.about}</p>
                        </div>

                        <div>
                            <h2 className="title">Technical sheet</h2>
                            <p>Code technologies I got involved with while working on this project.</p>
                            <ul>
                                {project.technical.map((tech, i) => <li key={i}>{tech}</li>)}
                            </ul>
                        </div>

                        <div className="links">
                            {project.github ? <button className="git-btn" onClick={() => window.location.href = project.github}>Github</button> : ''}

                            <button className="blue bg txt" onClick={() => window.location.href = project.website}>View the Website</button>
                        </div>


                    </div>
                    <div className="image">
                        <img src={project.imgs[1]}></img>
                    </div>

                </div>
            </div> : ''
        }
    </>)

}
export default ProjectDetails


{/* <Carousel> 

                        {/* {project.imgs.map((img, i) => {
                            return <Carousel.Item key={i}>
                                <img
                                    className="d-block w-100"
                                    src={img}
                                    alt={img}
                                /> */}

{/* </Carousel.Item> */ }
{/* })}
                    </Carousel> */}