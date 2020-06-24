import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub, faFacebookF, faGooglePlusG} from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <div className="footer-external-links-container">
      <div>
        <ul className="footer-external-links-list">
          <li className="external-links-wrapper">
            <a href="https://github.com/cedie712" rel="noopener noreferrer" target="_blank">
              <FontAwesomeIcon className="grey-text text-darken-1" icon={faGithub}  size="4x"/>
            </a>
          </li>
          <li className="external-links-wrapper">
            <a href="https://web.facebook.com/cedrick.domingo.75" rel="noopener noreferrer" target="_blank">
              <FontAwesomeIcon className="grey-text text-darken-1" icon={faFacebookF}  size="4x"/>
            </a>
          </li>
        </ul>
      </div>
      <div className="center center-align">
        <p className="grey-text text-darken-2">
          <FontAwesomeIcon className="grey-text text-darken-2" icon={faGooglePlusG}/>
          &nbsp;cedrickdomingo048@gmail.com
        </p>
        <p className="grey-text text-darken-2">CEDRICK DOMINGO <span className="light-blue-text">©2020</span></p>
      </div>
    </div>
  );
}