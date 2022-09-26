import React from "react";
import Project from "./Project/Project";
class Projects extends React.Component {
        
        
    constructor(props) {
        super(props)
        this.state = {
            projects: [
                {id: 1, title: 'Stats dont Lie',
                skills: ['JavaScript' , 'HTML', 'CSS', 'GIT', 'API'],
                images: ['1', '2', '3', '4', '5'],
                repository: 'stats-dont-lie',
                description: 
                `The app allows you to check stat averages of an NBA player for a specific season
                It will show his picture, team, name, anthropometry and, of course, stats.
                The custom badge system will reward player a badge if his average of specific stat
                satisfies the minimum value.`},
                
                {id: 2, title: 'Pokemon Team Builder',
                skills: ['TypeScript' , 'HTML', 'CSS', 'Angular', 'GIT'],
                images: ['1', '2', '3', '4', '5'],
                repository: 'pokemon-team-builder',
                description: 
                `You can build a team of pokemons. There is a pool of nine pokemons to choose from
                Each pokemon has different elemental type and attack. Once you click on a pokemon,
                you will see its evolution form and type. Once you add a pokemon to your team,
                you will be able to see who is on your team at the bottom of the page`}

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