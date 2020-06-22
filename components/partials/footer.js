import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithubAlt, faFacebookF} from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <div id="footer-wrapper">
      <div id="footer-end-container">
        <div id="footer-end-wrapper" className="grey darken-4">
          <div>
            <div id="links-container" className="row">
              <div className="col s6 col-link">
                <div className="link-item-container">
                  <a href="https://github.com/cedie712" rel="noopener noreferrer" target="_blank">
                    <div className="link-item-container">
                      <FontAwesomeIcon className="white-text link-fa" icon={faGithubAlt}  size="2x"/>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col s6 col-link">
                <div className="link-item-container">
                  <a href="https://web.facebook.com/cedrick.domingo.75" rel="noopener noreferrer" target="_blank">
                    <div className="link-item-container">
                      <FontAwesomeIcon className="white-text link-fa" icon={faFacebookF}  size="2x"/>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="center center-align">
              <p className="yellow-text text-lighten-3"><i className="fab fa-google-plus-g "></i>&nbsp;cedrickdomingo048@gmail.com</p>
              <p className="grey-text text-darken-2">CEDRICK DOMINGO <span className="light-blue-text text-lighten-2">©2020</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}