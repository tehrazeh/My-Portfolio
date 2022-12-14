import React from "react";
import Project from "./Project/Project";
import s from "./Projects.module.css"
class Projects extends React.Component {
        
        
    constructor(props) {
        super(props)
        this.state = {
            projects: [
                {id: 1, title: 'Eyes Holo',
                skills: ['React' , 'Redux', 'API', 'SASS'],
                images: ['1', '2', '3', '4', '5'],
                repository: 'eyes-holo',
                deployInfo: 'https://eyes-holo.vercel.app/',
                description: 
                `Discover interesting details and stats about every hero and item in Dota 2.
                Lores, roles of heroes, components of an item. It has it all`},
                {id: 2, title: 'Stats dont Lie',
                skills: ['JavaScript' , 'API'],
                images: ['1', '2', '3', '4', '5'],
                repository: 'stats-dont-lie',
                deployInfo: 'https://chipper-queijadas-0ddbcd.netlify.app/',
                description: 
                `Check stat averages of an NBA player for a specific season.
                It will show his picture, team, name, anthropometry and, of course, stats.
                Player can earn a badge for outstanding performance in one or more caterogries.`},               
                {id: 3, title: 'Pokemon Team Builder',
                skills: ['TypeScript', 'Angular'],
                images: ['1', '2', '3', '4', '5'],
                repository: 'pokemon-team-builder',
                deployInfo: false,
                description: 
                `You can build a team of pokemons.
                Each pokemon has different elemental type and attack. Once you click on a pokemon,
                you will see its evolution form and type.`}

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