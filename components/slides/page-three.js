import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons';
import {faGithub, faFacebook, faSkype, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {github_profile, facebook_profile, skype_profile, linked_in} from '../../contents/links';
import Footer from '../partials/footer';
import {inputWarning, Key} from '../../static/js/helpers';

export default class Contact extends React.Component {
  constructor() {
      super();
      this.state = {
          name: '',
          email: '',
          message: '',
          nameLabel: '',
          emailLabel: '',
          textareaLabel: '',
          btnLabel: 'Send'
      }
      this.fetchFieldValue = this.fetchFieldValue.bind(this);
      this.submit = this.submit.bind(this);
  }

  componentDidMount() {
    this._ismounted = true;
    this.showLabels();
    this.submitBtn = new Key(document, 13, this.submit);
  }

  componentWillUnmount() {
    this._ismounted = false
    this.submitBtn.unbind();
  }

  async showLabels() {
    await new Promise(r => setTimeout(r, 400));
    const name = 'Your Name';
    const email = 'Your Email';
    const textarea = 'write your message here. . .';
    for (let i in [...Array(name.length).keys()]) {
      if (this._ismounted) {
        await this.setState({nameLabel: this.state.nameLabel + name.charAt(parseInt(i))})
        await new Promise(r => setTimeout(r, 40));
      }
    }
    for (let i in [...Array(email.length).keys()]) {
      if (this._ismounted) {
        await this.setState({emailLabel: this.state.emailLabel + email.charAt(parseInt(i))})
        await new Promise(r => setTimeout(r, 40));
      }
    }
    for (let i in [...Array(textarea.length).keys()]) {
      if (this._ismounted) {
        await this.setState({textareaLabel: this.state.textareaLabel + textarea.charAt(parseInt(i))})
        await new Promise(r => setTimeout(r, 40));
      }
    }
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

  async submit() {
    const btn = document.getElementById('send-mail');
    const testForm = this.validateForm();
    if (!testForm) {
      return false;
    }
    await this.setState({btnLabel: 'SENDING'})
    btn.classList.add('btn-disable');
    // send email
    window.emailjs.init(`${process.env.EMAILJS_USER_ID}`)
    const templateParams = {
      name: this.state.name,
      email: this.state.email,
      content: this.state.message
    };
    await emailjs.send('gmail', `${process.env.EMAILJS_TEMPLATE_ID}`, templateParams)
    .then(async () => {
      await this.setState({btnLabel: 'Your message was sent!'})
      await new Promise(r => setTimeout(r, 2500));
    }, async () => {
      await this.setState({btnLabel: 'Sending Failed :('})
      await new Promise(r => setTimeout(r, 2500));
    });
    btn.classList.remove('btn-disable');
    this.setState({btnLabel: 'Send Again'})
  }

  render() {
    return (
      <div id="contact-page-wrapper" className="container grey-text text-lighten-2">
        <div className="row">
          <div className="col s12 m10 l10 contact-form-container">
            <header className="contact-header">
              <h3>Ping Me</h3>
              <p className="grey-text text-darken-1 description">Veniam minim aliqua laboris irure veniam sunt tempor officia eiusmod qui fugiat.</p>
            </header>
            <div className="contact-form">
              <div className="message-content">
                
              </div>
              <div className="input-container">
                <input className="contact-input" id="name" placeholder={this.state.nameLabel}
                name="name" onChange={this.fetchFieldValue} value={this.state.name}/>
                <input className="contact-input" id="email" placeholder={this.state.emailLabel}
                name="email" onChange={this.fetchFieldValue} value={this.state.email}/>
                <textarea className="contact-input" id="contact-text-area" placeholder={this.state.textareaLabel}
                name="message" onChange={this.fetchFieldValue} value={this.state.message}></textarea>
              </div>
              <div className="contact-form-footer">
                <button id="send-mail" onClick={this.submit} className="waves-effect waves-light btn btn-large">
                  <FontAwesomeIcon icon={faPaperPlane} />&nbsp;
                  {this.state.btnLabel}
                </button>
              </div>
            </div>
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
                  <a href={linked_in} rel="noopener noreferrer" target="_blank">
                    <FontAwesomeIcon className="grey-text text-darken-1 contact-link" id="contact-link-1" icon={faLinkedin}  size="3x"/>
                  </a>
                </div>
                <div className="contact-link-container">
                  <a href={facebook_profile} rel="noopener noreferrer" target="_blank">
                    <FontAwesomeIcon className="grey-text text-darken-1 contact-link" id="contact-link-2" icon={faFacebook}  size="3x"/>
                  </a>
                </div>
                <div className="contact-link-container">
                  <a href={skype_profile} rel="noopener noreferrer" target="_blank">
                    <FontAwesomeIcon className="grey-text text-darken-1 contact-link" id="contact-link-3" icon={faSkype}  size="3x" />
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