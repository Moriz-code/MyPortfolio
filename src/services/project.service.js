// const fs = require('fs');
let gProjects = require('../data/project.json');


const query = () => {
    return gProjects
}

const getById = (projectId) => {
    let project = gProjects.filter(project => project.id === projectId)
    return project[0]
}

// export default class projectService {

//     query = () => {
//         console.log('arrive');

//         return gProjects
//     }

//     getById = (projectId) => {
//         let project = gProjects.filter(project => project.id === projectId)
//         return project
//     }
// }


export default {
    query,
    getById

}

