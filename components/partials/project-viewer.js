import React from 'react';
import Slider from './preview-slider';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons';
import {Cloak, funCubes, navigationButtons} from '../../static/js/helpers';
import FunCubes from './fun-cubes';
import Footer from './footer';

export default class ProjectViewer extends React.Component {
  constructor(props) {
    super();
    this.state = {
      projectData: props.projectData,
    };
    this.returnToParent = this.returnToParent.bind(this);
    this.scrollEvent = this.scrollEvent.bind(this);
  }

  componentDidMount() {
    this.viewProjectNav = new funCubes(document);
    this.viewProjectNav.show();
    this.cloak = new Cloak();
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({projectData: nextProps.projectData})
    return false;  
  }

  returnToParent() {
    const projectViewer = document.getElementById('project-viewer');
    projectViewer.classList.add('animate__fadeOutUp');
    const hideToDisplay = setTimeout(() => {
      projectViewer.classList.remove('animate__fadeOutUp');
      clearTimeout(hideToDisplay);
    }, 500);
    new funCubes(document).hide();
    new navigationButtons(document).show();
    const unmount = setTimeout(() => {
      this.props.unmount();
      clearTimeout(unmount);
    }, 500);
  }

  scrollEvent() {
    this.cloak.hideElementsOnScrollDown(
      document.getElementById('project-viewer-container'),
      [
        document.getElementById('hamburger-container'),
        document.getElementById('fun-cubes-container')
      ]
    );
  }

  render() {

    const project = this.state.projectData;

    const tools = [];
    for (let i in project.tools) {
      tools.push(
        <li key={i} className="description light-blue-text text-darken-3">{project.tools[i]}</li>
      )
    }
    const webLink = project.websiteLink ? (
      <a href={project.websiteLink} rel="noopener noreferrer" target="_blank" className="waves-effect waves-light btn web-link-btn">
        <FontAwesomeIcon icon={faExternalLinkAlt} />&nbsp;
        Visit Website
      </a>
    ) : ''
    const webLinkAlt = project.websiteLink ? (
      <a href={project.websiteLink} rel="noopener noreferrer" target="_blank" className="light-blue-text text-darken-3 web-link-alt">
        <FontAwesomeIcon icon={faExternalLinkAlt} />&nbsp;
        Visit Website
      </a>
    ) : ''
    const repository = project.repository ? (
      <div className="grey-text text-darken-3" id="remote-repository-container">
        <h6 className="description"><b>Remote&nbsp;Repository:</b> <a className="light-blue-text text-darken-3 text-highlight" href={project.repository} rel="noopener noreferrer" target="_blank" >{project.repository}</a></h6>
      </div>
    ) : ''

    return (
      <div>
        <div id="fc-wrapper" onClick={this.returnToParent}>
          <FunCubes />
        </div>
        <div onScroll={this.scrollEvent} className="animate__animated animate__fadeInDown animate__faster" id="project-viewer">
          <div id="project-viewer-container">
            <div id="project-preview-heading-container">
              <h4 id="project-viewer-heading" className="grey-text text-darken-3">{project.title}</h4>
              <div className="row no-margin">
                <div className="col l8 m8 s12 no-margin">
                  <p className="little-text grey-text text-darken-2">{project.healthText}</p>
                  {webLinkAlt}
                </div>
                <div className="col l4 m4 s12 no-margin right-align">
                  {webLink}
                </div>
              </div>
            </div>

            <div>
              <div className="image-preview-window">
                <div className="p-maximize green lighten-1">
                </div>
                <div className="p-minimize yellow lighten-1">
                </div>
                <div className="p-close red lighten-1">
                </div>
                {/* title bar */}
                <div className="image-preview-title-bar">
                </div>
                <Slider previews={project.previews}/>
              </div>
            </div>

            <div id="project-description-container">
              <h6 className="description grey-text text-darken-3"><p>{project.description}</p></h6>
            </div>
            {repository}
            <div className="grey-text text-darken-3" id="technical-section-container">
              <h5><b>Tools, technologies, stacks (or whatever you may call them) I got involved in this project.</b></h5>
              <div className="underline"></div>
              <ul id="tools-list">
                {tools}
              </ul>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}