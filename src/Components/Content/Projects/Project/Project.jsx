import s from './Project.module.css';
import gitHubImage from '../../../Sidebar/Images/github.png';
import { getProjectInfo } from '../../../../Api/api';
import { useState, useEffect } from 'react';
import { Link} from 'react-router-dom';


const Project = (props) => {

    const skills = props.projectData.skills.map(skill => {
        return (
            <img className={s.skillsPic} src={require(`../SkillsImages/${skill.toLowerCase()}.png`)}
                alt='skill pic' key={skill} />
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

    return (
        <div className={s.projectContainer} >
            <div className={s.projectTitle}>
                <p>{props.projectData.title}</p>
                <a href={`https://github.com/tehrazeh/${props.projectData.repository}`}>
                    <button className={s.titleButton} >
                        <img className={s.titleButtonImage} src={gitHubImage} alt='github' />
                    </button>
                </a>
                <Link to={`/projects/${props.projectData.id}/screenshots`}
                    state={{
                        images: props.projectData.images,
                        imagesFolder: `ProjectsImages/${props.projectData.repository}-images`
                    }}>
                    <button className={s.titleButton} >
                        <img className={s.titleButtonImage} src={require(`../ProjectsImages/assets/screenshots.png`)} alt='visibility' />
                    </button>
                </Link>
                <Link to='/notdeployed'>
                    <button className={s.titleButton} >
                        <img className={s.titleButtonImage} src={require(`../ProjectsImages/assets/website.png`)} alt='visibility' />
                    </button>
                </Link>
            </div>
            <div className={s.skills}>
                Skills: {skills}
            </div>
            <img className={s.projectPreview} src={require(`../ProjectsImages/${props.projectData.repository}-images/preview.png`)}
                alt='skill pic' />
            <div className={s.dropdownContainer}>
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
        </div>
    )
}

export default Project