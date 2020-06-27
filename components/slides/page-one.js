import React from 'react';
import {Link} from "react-awesome-slider/dist/navigation";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub, faFacebookF, faGoogle, faSkype, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { github_profile, facebook_profile, skype_profile, linked_in } from '../../contents/links';

export default class AboutPage extends React.Component {
  render() {
    return (
      <div id="page-one-wrapper" className="container grey-text text-lighten-3">
        <div id="content-wrapper">
          <h3 className="hello">Hello, <span className="hello-secondary">my&nbsp;name&nbsp;is</span></h3>
          <h3 className="my-name teal-text text-lighten-2">Cedrick Domingo</h3>

          <div className="about-description grey-text">
            <span>I am a programer and a software developer with expertise in web development.</span><br />

            <span>You can check out the recent projects that I made or have collaborated with at the&nbsp;
              <b>
                <Link className="grey-text text-lighten-2 text-highlight"  href="/portfolio">
                  portfolio page
                </Link></b>.</span><br />

            <span>Feel free to get in touch with me through the&nbsp;
              <b>
                <Link className="grey-text text-lighten-2 text-highlight"  href="/contact">
                  contact page
                </Link>
              </b>.</span>
          </div>


          <div className="about-page-links">
            <ul className="footer-external-links-list">
              <li className="about-links-wrapper">
                <a href={github_profile} rel="noopener noreferrer" target="_blank">
                  <FontAwesomeIcon className="grey-text text-darken-1 about-link" icon={faGithub}  size="3x"/>
                </a>
              </li>
              <li className="about-links-wrapper">
                <a href={linked_in} rel="noopener noreferrer" target="_blank">
                  <FontAwesomeIcon className="grey-text text-darken-1 about-link" icon={faLinkedin}  size="3x"/>
                </a>
              </li>
              <li className="about-links-wrapper">
                <a href={facebook_profile} rel="noopener noreferrer" target="_blank">
                  <FontAwesomeIcon className="grey-text text-darken-1 about-link" icon={faFacebookF}  size="3x"/>
                </a>
              </li>
              <li className="about-links-wrapper">
                <a href={skype_profile} rel="noopener noreferrer" target="_blank">
                  <FontAwesomeIcon className="grey-text text-darken-1 about-link" icon={faSkype}  size="3x"/>
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>
    );
  }
}