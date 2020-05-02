import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';


const ProjectPreview = (props) => {

    const { project } = props

    useEffect(() => {
        // console.log(props.project);

    }, [])

    return (<>
        <Link to={`/${project.id}`}>
            <div className="project square-ratio">
                <img src={project.imgs[0]} />
                <div className="overlay">
                    <ul>
                        {project.technical.map((tech => {
                            return <li className="blue bg txt swing-in-top-fwd">{tech}</li>
                        }))}
                    </ul>
                </div>

            </div>
        </Link>
    </>)
}
export default ProjectPreview