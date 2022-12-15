import s from './Resume.module.css'
const Resume = (props) => {
    return (
        <div className={s.resume}>
            <div className={s.ResumeBlock}>
                <div className={s.blockTitle}>
                    <img src={require('./Images/summary.png')} alt='summary' />
                    <h3>Summary</h3>
                </div>
                <ul>
                    <li>Started learning JS, HTML and CSS in early <b>2020</b>. Strenghtened and improved knowledge
                    by building websites for friends and colleagues.</li>
                    <li>In January <b>2021</b> enrolled in Sheridan College to 
                    improve fundamentals, learn new technologies and experience team work.</li>
                    <li>Graduated with
                    Honors in April <b>2022</b> and been learning new technologies and building my
                    dream projects ever since.</li>
                    <li><b>Now</b> looking for a new challenge as a front end developer.</li>              
                      
                </ul>
            </div>
            <br></br>
            <div className={s.ResumeBlock}>
                <div className={s.blockTitle}>
                    <img src={require('./Images/education.png')} alt='education' />
                    <h3>Education</h3>
                </div>
                <ul>
                    <li><b>Computer Programming Diploma</b></li>
                    <li><b>Sheridan College</b>, Oakville, ON</li>
                    <li>Jan 2021 - Apr 2022. <b>3.87 GPA</b>, Honors</li>
                    <li><b>Coursework</b>: </li>
                    <li>
                        Web Programming, Interactive User Interface Design,
                        Mobile Web-based Applications
                        Fundamentals of Software Design, Database Design & Implementation,
                        Object Oriented Programming 1 & 2 - Java, Web Development,
                        Data Structures and Algorithm Development - C
                    </li>
                </ul>

            </div>
            <br></br>
            <div className={s.ResumeBlock}>
                <div className={s.blockTitle}>
                    <img src={require('./Images/experience.png')} alt='experience' />
                    <h3>Experience</h3>
                </div>
                <ul>
                    <li><b>Freelance Web Developer</b></li>
                    <li>Mar 2020 - Dec 2020</li>
                    <li>Built a <b>website</b> for sale of concrete rings business. It had registration and order forms, contacts, and order history</li>
                    <li>Built 3 simple yet <b>eye-catching portfolios</b> for fellow students using JavaScript, HTML, and CSS.</li>
                    <li>2 out of 3 students landed a <b>job</b> with the help of portfolio.</li>
                </ul>
            </div>
        </div>
    )
}

export default Resume