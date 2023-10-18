import { Link } from 'react-router-dom';
import './styles/NavBar.css';

const NavBar = ({ darkMode, toggleMode }) => {

  return (
    <div className={`h__container ${darkMode ? 'dark__mode' : ''}`}>
      <header>
        <div className='logo__container'>
          <Link to="/">
            <img src="" alt="" />
            <h1  className={`logo ${darkMode ? 'dark__mode' : ''}`}>Freddy Zambrano Astorga</h1>
          </Link>
        </div>
        <div className="secondLogo__container"> 
          <h2 className={`logo__two ${darkMode ? 'dark__mode' : ''}`}>Logo dos</h2>
        </div>
        {/*Navigator Bar */}
        <div className='options'>
            <ul className="nav__bar" >
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/project">Projects</Link></li>
            <li><Link to="/tech">Technologies</Link></li>
            <li><Link to="/reference">References</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            </ul>
        </div>
        {/* Mobile Menu */}
        <nav className='darkMode_nav'>
          <div className={`button__container ${darkMode ? 'dark__mode' : ''}`} >
            <button
              className={`theme__btn ${darkMode ? 'dark__mode' : ''}`}
              onClick={() => {
                toggleMode();
              }}
              style={{ backgroundImage: `url(${!darkMode ? './sun.jpg' : '/moon.jpg'})` }}
            ></button>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default NavBar;