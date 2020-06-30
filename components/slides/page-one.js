import React from 'react';
import {Link} from "react-awesome-slider/dist/navigation";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub, faFacebookF, faGoogle, faSkype, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { github_profile, facebook_profile, skype_profile, linked_in } from '../../contents/links';

export default class AboutPage extends React.Component {
  constructor () {
    super();
    this.state = {
      line1: '',
      line2: '',
      line3: '',
      line2Link: '',
      line3Link: '',
      line2End: '',
      line3End: '',
    };
  }

  componentDidMount() {
    this._ismounted = true;
    this.revealLines();
    window.onscroll = () => {
      console.log('shit');
    }
  }

  componentWillUnmount() {
    this._ismounted = false
  }

  async revealLines() {
    if (document.getElementById('preload-container')) {
      await new Promise(r => setTimeout(r, 2600));
    }
    const lines = {
      line1: 'I am a programer and a software developer with expertise in web development.',
      line2: 'You can check out the recent projects that I made or have collaborated with at the',
      line2Link: 'portfolio page',
      line2End: '.',
      line3: 'Feel free to get in touch with me through the',
      line3Link: 'contact page',
      line3End: '.'
    }
    if (window.innerWidth < 1000) {
      this.setState(lines);
      return
    }
    for (let line in lines) {
      const content = lines[line];
      for (let i in [...Array(content.length).keys()]) {
        if (this._ismounted) {
          await this.setState({[`${line}`]: this.state[`${line}`] + content.charAt(parseInt(i))})
          await new Promise(r => setTimeout(r, 7));
        }
      }
    }
  }

  render() {
    return (
      <div id="page-one-wrapper" className="container grey-text text-lighten-3">
        <div id="content-wrapper">
          <h3 className="hello">
            <span id="h">H</span>
            <span id="e">e</span>
            <span id="l1">l</span>
            <span id="l2">l</span>
            <span id="o">o</span>
            <span id="hello-base">Hello</span>, <span className="hello-secondary">my&nbsp;name&nbsp;is</span></h3>
          <h3 className="my-name teal-text text-lighten-2 animate__animated animate__fadeIn">Cedrick Domingo</h3>
          <div className="about-description grey-text">
            <span>{this.state.line1}</span><br />
            <span>{this.state.line2}&nbsp;
              <b>
                <Link className="grey-text text-lighten-2 text-highlight"  href="/portfolio">
                  {this.state.line2Link}
                </Link></b>{this.state.line2End}</span><br />
            <span>{this.state.line3}&nbsp;
              <b>
                <Link className="grey-text text-lighten-2 text-highlight"  href="/contact">
                  {this.state.line3Link}
                </Link>
              </b>{this.state.line3End}</span>
          </div>
          <div className="about-page-links animate__animated animate__fadeInRight">
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