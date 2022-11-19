import s from './Main.module.css';

function Main() {
  return (
    <div className={s.Main}>
      <p>Front End Developer.</p>
      <p>
        My hobbies are Coding, Filmmaking and Editing, Computers and Technologies in general,
        Basketball, and Video Games.
      </p>
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
