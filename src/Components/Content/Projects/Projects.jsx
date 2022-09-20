import React from "react";
import Project from "./Project/Project";
class Projects extends React.Component {
        
        
    constructor(props) {
        super(props)
        this.state = {
            projects: [
                {id: 1, title: 'Stats dont Lie'},
                {id: 2, title: 'Pokemon App'}
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