import React from 'react';
import ProjectPreview from './ProjectPreview';

const ProjectList = (props) => {

    const { projects } = props
    return (<>
        {projects.map(project => <ProjectPreview key={project.id} project={project} />)}
    </>)
}
export default ProjectList