import React from "react";
import Project from "./Project/Project";
import s from "./Projects.module.css"
class Projects extends React.Component {
        
        
    constructor(props) {
        super(props)
        this.state = {
            projects: [
                {id: 1, title: 'Stats dont Lie',
                skills: ['JavaScript' , 'API'],
                images: ['1', '2', '3', '4', '5'],
                repository: 'stats-dont-lie',
                deployInfo: 'https://chipper-queijadas-0ddbcd.netlify.app/',
                description: 
                `The app allows you to check stat averages of an NBA player for a specific season.
                It will show his picture, team, name, anthropometry and, of course, stats.
                The custom badge system will reward player a badge if his average of specific stat
                satisfies the minimum value.`},
                
                {id: 2, title: 'Pokemon Team Builder',
                skills: ['TypeScript', 'Angular'],
                images: ['1', '2', '3', '4', '5'],
                repository: 'pokemon-team-builder',
                deployInfo: false,
                description: 
                `You can build a team of pokemons. There is a pool of nine pokemons to choose from
                Each pokemon has different elemental type and attack. Once you click on a pokemon,
                you will see its evolution form and type. Once you add a pokemon to your team,
                you will be able to see who is on your team at the bottom of the page`}

            ]
        }
    }


    render () {
        const projectComponents = this.state.projects.map(project => {
            return <Project key={project.id} projectData={project} />
        })       
        return <div className={s.ProjectsContainer}>{projectComponents}</div>
    }
}

export default Projects;