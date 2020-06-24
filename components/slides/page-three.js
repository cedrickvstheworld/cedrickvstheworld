import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub, faFacebook, faGoogle, faSkype} from '@fortawesome/free-brands-svg-icons';
import { github_profile, facebook_profile, skype_profile } from '../../contents/links';
import Footer from '../partials/footer';

export default class Contact extends React.Component {
  render() {
    return (
      <div id="contact-page-wrapper" className="container grey-text text-lighten-2">
        <div className="row">
          <div className="col s12 m10 l10 contact-form-container">
            <header className="contact-header">
              <h3><b>Ping Me</b></h3>
              <p className="grey-text text-darken-1 description">Veniam minim aliqua laboris irure veniam sunt tempor officia eiusmod qui fugiat.</p>
            </header>
            <section className="contact-form">
              <div className="message-content">
                
              </div>
              <div className="input-container">
                <input className="contact-input" placeholder="Your Name"/>
                <input className="contact-input" placeholder="Your Email"/>
                <textarea className="contact-input" id="contact-text-area" placeholder="Message"></textarea>
              </div>
              <div className="contact-form-footer">
                <a href="" className="waves-effect waves-light btn btn-large">
                  Send
                </a>
              </div>
            </section>
          </div>
          <div className="col s12 m2 l2 contact-links">
            <div className="">
              <div className="container">
                <div className="contact-link-container">
                  <a href={github_profile} rel="noopener noreferrer" target="_blank">
                    <FontAwesomeIcon className="grey-text text-darken-1 contact-link"  id="contact-link-0" icon={faGithub}  size="3x"/>
                  </a>
                </div>
                <div className="contact-link-container">
                  <a href={facebook_profile} rel="noopener noreferrer" target="_blank">
                    <FontAwesomeIcon className="grey-text text-darken-1 contact-link" id="contact-link-1" icon={faFacebook}  size="3x"/>
                  </a>
                </div>
                <div className="contact-link-container">
                  <a href={skype_profile} rel="noopener noreferrer" target="_blank">
                    <FontAwesomeIcon className="grey-text text-darken-1 contact-link" id="contact-link-2" icon={faSkype}  size="3x" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="contact-footer">
          <Footer />
        </div>
      </div>
    );
  }
}