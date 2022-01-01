import React from 'react';
import close from '../Images/close.png';


const ProjectDetails = (props) => {

    const { project, onClose } = props;

    return (<>
        <div className="head">

            <div>
                <h1>{project.title}</h1>
                <span className="fs24 blue txt">{project.description}</span>
            </div>

            <div>
                <button onClick={onClose}><img src={close} alt="close" /></button>
            </div>
        </div>

        <div className="content">
            <div className="details fs18">
                <div className="info">

                    <div>
                        <h3 className="title">About the project</h3>
                        <p className="blue txt fs18">{project.about}</p>
                    </div>

                    <div>
                        <h2 className="title">Technical sheet</h2>
                        <p>Code technologies I got involved with while working on this project</p>
                        <ul>
                            {project.technical.map((tech, i) => <li className="blue txt" key={i}>{tech}</li>)}
                        </ul>
                    </div>
                </div>

                <div className="links">

                    {project.github ? <button className="git-btn" onClick={() => window.open(project.github, '_blank')}>Github</button> : ''}

                    {project.website ? <button className="blue bg txt" onClick={() => window.open(project.website, '_blank')}>View the Website</button> : ''}
                </div>

            </div>
            <div className="image">
                <img src={project.imgs[1]} alt="project" />
            </div>


        </div>

    </>)
}

export default ProjectDetails




