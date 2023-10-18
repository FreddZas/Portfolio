import './styles/ContactPage.css';

const ContactPage = ({ darkMode }) => {
  return (
    <main className={`main ${darkMode ? 'dark__mode' : ''}`}>
      <div className="page-1">
        <div className="page-1__body container">
          
        </div>

        <div className="social container">
          <div>
            <a href="https://www.linkedin.com/in/freddy-zambrano-astorga-2590b2157/">
                <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
          <div>
            <a href="https://github.com/FreddZas" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
          <div>
            <a href="https://wa.me/+51994256486" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-whatsapp"></i>
            </a>
          </div>
          <div>
            <a href="https://www.instagram.com/freddzam/" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>

        <div className="cody">
          {[...Array(10)].map((_, index) => (
            <img key={index} src="./images/cod.png" alt="" />
          ))}
        </div>
      </div>
    </main>
  );
}

export default ContactPage;