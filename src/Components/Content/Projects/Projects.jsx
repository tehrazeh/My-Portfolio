import React from "react";
import Project from "./Project/Project";
class Projects extends React.Component {
        
        
    constructor(props) {
        super(props)
        this.state = {
            projects: [
                {id: 1, title: 'Stats dont Lie',
                skills: ['JavaScript' , 'HTML', 'CSS', 'GIT', 'API'],
                description: 
                `The app allows you to check stat averages of an NBA player for a specific season
                It will show his picture, team, name, anthropometry and, of course, stats.
                The custom badge system will reward player a badge if his average of specific stat
                satisfies the minimum value.`}
            ]
        }
    }

    render () {
        let projectComponents = this.state.projects.map(project => {
           return <Project key={project.id} projectData={project} />
        })

        return (
            <div>{projectComponents}</div>
        )
    }
}

export default Projects;