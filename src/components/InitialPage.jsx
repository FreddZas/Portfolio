import { Link } from 'react-router-dom';
import "./styles/InitialPage.css"

const InitialPage = ({ onClick }) => {
  return (
    <div className='initialbtn'>
      <button className="welcomeBtn" onClick={onClick}>
        <Link to="/">InitialPage</Link>
      </button>
    </div>
  );
}

export default InitialPage;