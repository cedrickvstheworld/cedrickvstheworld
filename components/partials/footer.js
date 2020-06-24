import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub, faFacebookF, faGoogle, faSkype} from '@fortawesome/free-brands-svg-icons';
import { github_profile, facebook_profile, skype_profile } from '../../contents/links';

export default function Footer() {
  return (
    <div className="footer-external-links-container">
      <div>
        <ul className="footer-external-links-list">
          <li className="external-links-wrapper">
            <a href={github_profile} rel="noopener noreferrer" target="_blank">
              <FontAwesomeIcon className="grey-text text-darken-1 footer-github-icon" icon={faGithub}  size="3x"/>
            </a>
          </li>
          <li className="external-links-wrapper">
            <a href={facebook_profile} rel="noopener noreferrer" target="_blank">
              <FontAwesomeIcon className="grey-text text-darken-1 footer-fb-icon" icon={faFacebookF}  size="3x"/>
            </a>
          </li>
          <li className="external-links-wrapper">
            <a href={skype_profile} rel="noopener noreferrer" target="_blank">
              <FontAwesomeIcon className="grey-text text-darken-1 footer-skype-icon" icon={faSkype}  size="3x"/>
            </a>
          </li>
        </ul>
      </div>
      <div className="center center-align">
        <p className="grey-text text-darken-1 gmail-line">
          <FontAwesomeIcon className="grey-text text-darken-1 footer-google-icon" icon={faGoogle}/>
          &nbsp;cedrickdomingo048@gmail.com
        </p>
        <p className="grey-text text-darken-1">CEDRICK VS THE WORLD <span className="light-blue-text">©2020</span></p>
      </div>
    </div>
  );
}