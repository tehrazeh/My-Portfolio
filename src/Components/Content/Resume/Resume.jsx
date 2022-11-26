import s from './Resume.module.css'
const Resume = (props) => {
    return (
        <div className={s.resume}>
            <div className={s.ResumeBlock}>
                <h3>Summary</h3>
                <h4>
                    Sheridan graduate, Front-End developer. Love to code my ideas into reality.
                </h4>
                <ul>
                    <li>Enjoy strengthening my skills through practice.</li>
                    <li>Building apps that solve a problem for people and have nifty features.</li>
                    <li>Ensuring code is scalable, responsive, and easy to maintain</li>
                    <li>Polishing skills with practice and never-ending learning.</li>
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
            <br></br>
            <div className={s.ResumeBlock}>
                <h3>Experience</h3>
                <h4>Associate, Walmart, Dec 2021 - Present</h4>
                <h4>Freelance, May 2020 - December 2020</h4>
                <p>The main project was a web application for the sale of concrete rings business.
                After that, my focus shifted to simple yet eye-catching portfolios
                for fellow students using JavaScript, HTML, and CSS.
                Then college started, and I stopped to focus on my studies.
                </p>
            </div>
        </div>
    )
}

export default Resume