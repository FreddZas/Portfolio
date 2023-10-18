import { useState } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import NavBar from './components/shared/NavBar';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ProjectPage from './components/ProjectPage';
import TechPage from './components/TechPage';
import ReferencePage from './components/ReferencePage';
import ContactPage from './components/ContactPage';
import InitialPage from './components/InitialPage';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [initialPageClicked, setInitialPageClicked] = useState(false);

  const toggleMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div>
      {!initialPageClicked && (<InitialPage onClick={() => {setInitialPageClicked(true)}} />)}{initialPageClicked && (<><NavBar darkMode={darkMode} toggleMode={toggleMode} />
          <Routes>
            <Route path="/" element={<HomePage darkMode={darkMode} />} />
            <Route path="/about" element={<AboutPage />} darkMode={darkMode} />
            <Route path="/project" element={<ProjectPage />} darkMode={darkMode}/>
            <Route path="/tech" element={<TechPage />}darkMode={darkMode} />
            <Route path="/reference" element={<ReferencePage />} darkMode={darkMode}/>
            <Route path="/contact" element={<ContactPage />} darkMode={darkMode}/>
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;