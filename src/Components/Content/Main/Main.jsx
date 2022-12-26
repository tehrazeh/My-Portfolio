import s from './Main.module.css';
import Typewriter from 'typewriter-effect';
import { Link } from 'react-router-dom';

function Main() {

  const skills = [
    { skillName: 'html', image: 'html.png', isDaily: true },
    { skillName: 'css', image: 'css.png', isDaily: true },
    { skillName: 'javascript', image: 'javascript.png', isDaily: true },
    { skillName: 'react', image: 'react.png', isDaily: true },
    { skillName: 'redux', image: 'redux.png', isDaily: true },
    { skillName: 'sass/scss', image: 'sass.png', isDaily: true },
    { skillName: 'typescript', image: 'typescript.png', isDaily: true },
    { skillName: 'git', image: 'git.png', isDaily: true },
    { skillName: 'github', image: 'github.png', isDaily: true },
    { skillName: 'rest api', image: 'api.png', isDaily: true },
    { skillName: 'testing', image: 'testing.png', isDaily: true },
    { skillName: 'responsive design', image: 'responsive.png', isDaily: true },
    { skillName: 'angular', image: 'angular.png', isDaily: false },
    { skillName: 'node.js', image: 'nodejs.png', isDaily: false },
    { skillName: 'java', image: 'java.png', isDaily: false },
    { skillName: 'mysql/ mongodb', image: 'database.png', isDaily: false}
  ]
  return (
    <div className={s.Main}>
      <p className={s.glitch}>
        <span aria-hidden="true">Front End Developer</span>Front End
        Developer<span aria-hidden="true">Front End Developer</span>

      </p>
      <div className={s.name}>Hi! My name is Danila, and ...</div>
      <div className={s.typewriter}>
        <Typewriter
          options={{
            strings: ['I love React.js', 'I know how to pilot an airliner',
              'I am lefthanded', 'I am decent video editor', 'I have 5,156 hours in Dota 2',
              'I can build a PC', 'I am a huge NBA fan'],
            autoStart: true,
            loop: true,
            delay: 105,
            pauseFor: 500
          }}
        />
      </div>
      <div className={s.MainContainer}>
        <div className={s.MainBlock}>
          <h2>Tech Stack and Skills</h2>
          <h3>Using daily</h3>
          <div className={s.skillsSection}>
            {skills.map((skill) => {
              if (skill.isDaily)
                return <div className={s.skillBox} key={skill.skillName}>
                  <img src={require(`../../../Assets/Skills/${skill.image}`)} alt='skill'/>
                  <span>{skill.skillName.toUpperCase()}</span>
                </div>
            })}
          </div>
          <h3>Had experience</h3>
          <div className={s.skillsSection}>
            {skills.map((skill) => {
              if (!skill.isDaily)
                return <div className={s.skillBox} key={skill.skillName}>
                  <img src={require(`../../../Assets/Skills/${skill.image}`)} alt='skill' />
                  <span>{skill.skillName.toUpperCase()}</span>
                </div>
            })}
          </div>
        </div>
        <div className={s.MainBlock}>
          <h3>I care about performance and user experience of my applications.</h3>
          <h3>
            Love to follow best practices, learn new technologies, get better every day.
          </h3>
          <h3>
            I value teamwork and discipline in a workspace.
          </h3>
          <h3>Want me to become a member of your team?</h3>
          <h3>
            Do not hesitate to <Link to='/Contact'>contact</Link> me {`:)`}
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Main;
