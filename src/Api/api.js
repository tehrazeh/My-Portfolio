import * as axios from 'axios';


export const getProjectInfo = async (repositoryName) => {   
    const projectData = await axios.get(`https://api.github.com/repos/tehrazeh/${repositoryName}/commits`)
    return projectData
}