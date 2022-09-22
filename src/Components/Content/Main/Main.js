import s from './Main.module.css';

function Main() {
  return (
    <div className={s.Main}>
      <p>Seeking Junior Front End Developer position.</p>
      <p>
        My hobbies are Coding, Video Editing, Computers and Technologies in general,
        Basketball and Computer Games.
      </p>
      <div className={s.MainContainer}>
        <div className={s.MainSkills}>
          <h2>Hard Skills:</h2>
          <ul>
            <li>JavaScript, HTML, CSS</li>
            <li>React, TypeScript, Redux</li>
            <li>Relational Databases, REST API</li>
            <li>SOLID, OOP, Java, Git</li>
          </ul>
          <h2>Knowledgeable in:</h2>
          <ul>
            <li>Angular, Node JS, Linux</li>
            <li>C, .NET, jQuery, MongoDB</li>
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
