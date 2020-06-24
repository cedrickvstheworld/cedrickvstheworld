import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons';
import {faGithub, faFacebook, faSkype} from '@fortawesome/free-brands-svg-icons';
import {github_profile, facebook_profile, skype_profile} from '../../contents/links';
import Footer from '../partials/footer';
import {inputWarning} from '../../static/js/helpers';

export default class Contact extends React.Component {
  constructor() {
      super();
      this.state = {
          name: '',
          email: '',
          message: '',
      }
      this.fetchFieldValue = this.fetchFieldValue.bind(this);
      this.submit = this.submit.bind(this);
  }

  fetchFieldValue(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  validateForm() {
    const {name, email, message} = this.state;
    const validEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const testEmail = validEmail.test(email)
    if (!name || !message || !testEmail) {
      if (!name) {
        inputWarning(document.getElementById('name'));
      }
      if (!testEmail) {
        inputWarning(document.getElementById('email'));
      }
      if (!message) {
        inputWarning(document.getElementById('contact-text-area'));
      }
      return false;
    }
    return true;
  }

  submit() {
    const testForm = this.validateForm();
    if (!testForm) {
      return false;
    }
    // using sendgrid to send email
  }

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
                <input className="contact-input" id="name" placeholder="Your Name"
                name="name" onChange={this.fetchFieldValue} value={this.state.name}/>
                <input className="contact-input" id="email" placeholder="Your Email"
                name="email" onChange={this.fetchFieldValue} value={this.state.email}/>
                <textarea className="contact-input" id="contact-text-area" placeholder="Message"
                name="message" onChange={this.fetchFieldValue} value={this.state.message}></textarea>
              </div>
              <div className="contact-form-footer">
                <button onClick={this.submit} className="waves-effect waves-light btn btn-large">
                  <FontAwesomeIcon icon={faPaperPlane} />&nbsp;
                  Send
                </button>
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