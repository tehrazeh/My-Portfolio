import s from './Resume.module.css'
const Resume = (props) => {
    return (
        <div>
            <div className={s.ResumeBlock}>
                <h3>Professional Summary</h3>
                <p>
                    Sheridan graduate, Front-End developer. Love to code my ideas into reality.
                    Enjoy solving coding problems and strengthen my skills through practice.
                </p>
                <ul>
                    <li>2 years of Front-End Development. JavaScript, HTML, CSS</li>
                    <li>React, TypeScript, Redux, Git</li>
                    <li>Knowledgeable in: Node JS, MySQL, Linux, Java</li>
                    <li>During studies continuously used: SOLID, OOP, Agile</li>
                    <li>3 years of experience working and team. Ability to communicate with
                        clients and colleagues in a respected manner.
                    </li>
                </ul>
            </div>
            <br></br>
            <div className={s.ResumeBlock}>
                <h3>Work Experience</h3>
                <h4>Walmart Associate, Dec 2021 - Present</h4>
                <ul>
                    <li>Dairy/Frozen associate with the duties of stocking products and helping customers</li>
                    <li>I do my best to help the customers and leave a positive 
                        impression about Walmart as a company.</li>
                    <li>As a responsible employee, I consistently make managers smile after my shift.</li>
                </ul>
            </div>
            <br></br>
            <div className={s.ResumeBlock}>
                <h3>Education</h3>
                <h4>Computer Programming Diploma</h4>
                <p>Sheridan College, Oakville, ON</p>
                <p>January 2021 – April 2022</p>
                <p>Honors, 3.87/4 GPA</p>
            </div>
        </div>
    )
}

export default Resume