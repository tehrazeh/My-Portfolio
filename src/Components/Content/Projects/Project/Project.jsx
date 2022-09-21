import s from './Project.module.css';

const Project = (props) => {

    let skills = props.projectData.skills.map(skill => {
        return (
            <div className={s.dropdownMenuContainer} key={skill}>
                <img className={s.skillsPic} src={require(`../Images/${skill.toLowerCase()}.png`)} 
                alt='skill pic'/>
                <h3>{skill}</h3>
            </div>
        )      
        
    })
    return (
        <div className={s.projectContainer}>
                <div className={s.dropdown}>
                    <button className={s.dropdownButton}>Skills</button>
                    <div className={s.dropdownMenu}>
                        {skills}
                    </div>
                <div className={s.dropdown}>
                    <button className={s.dropdownButton}>Description</button>
                    <div className={s.dropdownMenu}>
                        <div className={s.dropdownMenuContainer}>
                            <span>
                                {props.projectData.description}
                            </span>
                        </div>
                    </div>
                </div>
                {/* <button>Description</button>
                <button>Link</button> */}
            </div>
            {/* {props.projectData.title} */}
        </div>
    )
}

export default Project