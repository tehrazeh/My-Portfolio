import s from './Project.module.css';
import gitHubImage from '../../../Sidebar/Images/github.png';
import ImageSlider from '../ImageSlider/ImageSlider';
import { getProjectInfo } from '../../../../Api/api';
import { useState, useEffect } from 'react';


const Project = (props) => {

    const skills = props.projectData.skills.map(skill => {
        return (
            <div className={s.dropdownMenuContainer} key={skill}>
                <img className={s.skillsPic} src={require(`../Images/${skill.toLowerCase()}.png`)}
                    alt='skill pic' />
                <h3>{skill}</h3>
            </div>
        )
    })

    const [repoStats, setRepoStats] = useState([])

    useEffect(() => {
        async function fetchData() {
            const request = await getProjectInfo(props.projectData.repository)
            setRepoStats(request)
            return request
        }
        fetchData()
    }, [props.projectData.repository])

    return (
        <div className={s.projectContainer}>
            <div className={s.projectTitle}>
                <h2>{props.projectData.title}</h2>
                <a href='https://github.com/tehrazeh/stats-dont-lie'>
                    <button className={s.gitHubButton} >
                        <img className={s.gitHubImage} src={gitHubImage} alt='github' />
                    </button>
                </a>
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
                            <span>
                                {props.projectData.description}
                            </span>
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
            <div>
                <ImageSlider
                    images={props.projectData.images}
                    imagesFolder={props.projectData.imagesFolder}
                />
            </div>
        </div>
    )
}

export default Project