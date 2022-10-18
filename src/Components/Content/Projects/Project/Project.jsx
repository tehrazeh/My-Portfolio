import s from './Project.module.css';
import gitHubImage from '../../../Sidebar/Images/github.png';
import ImageSlider from '../ImageSlider/ImageSlider';
import { getProjectInfo } from '../../../../Api/api';
import { useState, useEffect } from 'react';


const Project = (props) => {

    const [projectVisibility, setProjectVisibility] = useState(() => {
        return {
            body: 'hidden',
            toggleImage: 'show'
        }
    })

    const skills = props.projectData.skills.map(skill => {
        return (
            <div className={s.dropdownMenuContainer} key={skill} >
                <div className={s.dropdownSkills}>
                    <img className={s.skillsPic} src={require(`../SkillsImages/${skill.toLowerCase()}.png`)}
                        alt='skill pic' />
                    <h3>{skill}</h3>
                </div>

            </div>
        )
    })

    const [repoStats, setRepoStats] = useState({})

    useEffect(() => {
        const controller = new AbortController()
        async function fetchData() {
            try {
                const request = await getProjectInfo(props.projectData.repository)
                setRepoStats(request)
            } catch (e) {
                setRepoStats({
                    dateCreated: '3 hours before the Big Bang',
                    totalCommits: '∞ + 23',
                    lastChange: 'the day after tomorrow'
                })
            }

            return () => {
                controller.abort()
            }

        }
        fetchData()
    }, [props.projectData.repository])



    const toggleDisplayProjectBody = () => {
        if (projectVisibility.body === 'hidden') {
            setProjectVisibility(prev => ({ body: 'visible', toggleImage: 'hide' }))
        } else {
            setProjectVisibility(prev => ({ body: 'hidden', toggleImage: 'show' }))
        }
    }

    return (
        <div className={s.projectContainer} >
            <div className={s.projectTitle}>
                <p>{props.projectData.title}</p>
                <a href={`https://github.com/tehrazeh/${props.projectData.repository}`}>
                    <button className={s.gitHubButton} >
                        <img className={s.gitHubImage} src={gitHubImage} alt='github' />
                    </button>
                </a>
                <button className={s.gitHubButton} onClick={toggleDisplayProjectBody}>
                    <img className={s.gitHubImage} src={require(`../ProjectsImages/assets/${projectVisibility.toggleImage}.png`)} alt='visibility' />
                </button>
            </div>
            <div className={s.dropdownContainer}>
                <div className={s.dropdownElement}>
                    <button className={s.dropdownButton}>Skills</button>
                    <div className={s.dropdownMenu}>
                        {skills}
                    </div>
                </div>
                <div className={s.dropdownElement}>
                    <button className={s.dropdownButton}>Description</button>
                    <div className={s.dropdownMenu}>
                        <div className={s.dropdownMenuContainer}>
                            <p>
                                {props.projectData.description}
                            </p>
                        </div>
                    </div>
                </div>
                <div className={s.dropdownElement}>
                    <button className={s.dropdownButton}>Statistics</button>
                    <div className={s.dropdownMenu}>
                        <div className={s.dropdownMenuContainer}>
                            <p>
                                Date Created: {repoStats.dateCreated}
                            </p>
                        </div>
                        <div className={s.dropdownMenuContainer}>
                            <p>
                                Total Commits: {repoStats.totalCommits}
                            </p>
                        </div>
                        <div className={s.dropdownMenuContainer}>
                            <p>
                                Last Update: {repoStats.lastChange}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {projectVisibility.body === 'visible' &&
                <div>
                    <ImageSlider
                        images={props.projectData.images}
                        imagesFolder={`ProjectsImages/${props.projectData.repository}-images`}
                    />
                </div>
            }
        </div>
    )
}

export default Project