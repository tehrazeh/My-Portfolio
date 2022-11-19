import s from './Main.module.css';
import Typewriter from 'typewriter-effect';

function Main() {
  return (
    <div className={s.Main}>
      <p className={s.glitch}>
        <span aria-hidden="true">Front End Developer</span>Front End
        Developer<span aria-hidden="true">Front End Developer</span>
        
      </p>
      <div className={s.typewriter}>     
        <Typewriter
          options={{
            strings: ['I love React.js', 'I know how to pilot an airliner',
            'I am lefthanded',  'I am decent video editor', 'I have 5,156 hours in Dota 2', 
            'I can build a PC', 'I am a huge NBA fan' ],
            autoStart: true,
            loop: true,
            delay: 105,
            pauseFor: 500
          }}
        />
      </div>
      <div className={s.MainContainer}>
        <div className={s.MainSkills}>
          <h2>Technologies:</h2>
          <ul>
            <li>JavaScript, HTML, CSS, SCSS/SASS </li>
            <li>React, TypeScript, Redux</li>
            <li>SQL/MySQL, Node.js, MongoDB</li>
            <li>Java, Angular, C, Git</li>
          </ul>
          <h2>Practices and Methodoligies:</h2>
          <ul>
            <li>OOP, SOLID</li>
            <li>Agile, Scrum, Waterfall</li>
          </ul>
        </div>
        <div className={s.MainSkills}>
          <h2>Soft Skills:</h2>
          <h3>I do not want to relist everybody's favorite
            hardworking, responsible, teamplayer etc.</h3>
          <h3>
            I love to see me and my team succeed and meet the goals.
          </h3>
          <h3>
            If I see my colleague being sad, I will try to chear them up.
          </h3>
          <h3> I do not hesitate to ask questions if I did not understand the task to 100%. </h3>
          <h3>
            A programmer is always learning, so persistent, so obsessive, such a powerful nerd.
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Main;
