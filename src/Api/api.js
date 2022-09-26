import * as axios from 'axios';

const months= ["January","February","March","April","May","June","July",
            "August","September","October","November","December"];

const dateConversion = (date) => {
    let [year, month, day] = date.split('-')
    return `${months[month - 1]} ${day}, ${year}`
}

export const getProjectInfo = async (repositoryName) => {  
    const response = await axios.get(`https://api.github.com/repos/tehrazeh/${repositoryName}/commits`)
    const projectData = {
        dateCreated: dateConversion(response.data[response.data.length - 1].commit.committer.date.substring(0, 10)),
        totalCommits: response.data.length,
        lastChange: dateConversion(response.data[0].commit.committer.date.substring(0, 10))        
    }
    return projectData
}
