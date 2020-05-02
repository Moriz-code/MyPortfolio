import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import NavBar from '../cmps/NavBar';


import projectService from '../services/project.service';


//images

// import showroom1 from '../Images/projects/showroom.PNG';
// import showroom2 from '../Images/projects/showroom1.PNG';
// import showroom3 from '../Images/projects/showroom/showroom_devices.png';



const ProjectDetails = (props) => {

    const [project, setProject] = useState('');

    useEffect(async () => {
        const currentProject = await projectService.getById(props.match.params.id);
        setProject(currentProject);
    }, [])

    useEffect(() => {
        // this.props.history.push(`/`);
        console.log(project);

    })
    useEffect(() => {
        console.log('project', project);

    }, [project])



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