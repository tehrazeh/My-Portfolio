import s from './Project.module.css';
import gitHubImage from '../../../Sidebar/Images/github.png';
import ImageSlider from '../ImageSlider/ImageSlider';


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
                            <span>
                            github stats
                            </span>
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