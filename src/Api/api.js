import * as axios from 'axios';


export const getProjectInfo = (repositoryName) => {
    const projectInfo = {}   
    axios.get(`https://api.github.com/repos/tehrazeh/${repositoryName}/commits`)
        .then(response => {

            projectInfo.totalCommits = response.data.length;
            projectInfo.dateCreated = response.data[response.data.length - 1].commit.committer.date.substring(0, 10);
            projectInfo.lastChange = response.data[0].commit.committer.date.substring(0, 10)
        })

    return projectInfo
}