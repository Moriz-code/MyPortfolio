let gProjects = require('../data/project.json');


const query = () => {
    return gProjects
}

const getById = (projectId) => {
    let project = gProjects.filter(project => project.id === projectId)
    return project[0]
}


export default {
    query,
    getById

}

