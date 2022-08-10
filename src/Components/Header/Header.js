import s from './Header.module.css';

function Header() {
  return (
    <div className={s.Header}>
      <button>Projects</button>
      <button>Resume</button>
      <button>About</button>
      <button>Contact</button>
    </div>
  );
}

export default Header;
