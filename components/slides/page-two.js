import React from 'react';
import {PROJECT_CARD_CONTENTS, PROJECT_INFO} from '../../contents/project';
import ProjectViewer from '../partials/project-viewer';
import Footer from '../partials/footer';
import FunCubes from '../partials/fun-cubes';
import {navigationButtons, funCubes} from '../../static/js/helpers';


export default class PageTwo extends React.Component {
  constructor(props) {
    super(props);
    this.state = PROJECT_INFO[0];
  }

  componentDidMount() {
    this.navButtons = new navigationButtons(document);
    this.viewProjectNav = new funCubes(document);
  }

   mapProject(data, index) {
    const cardPosition = index % 2 === 0 ? 'left-card' : 'right-card'
    return (
      <div key={data._id} className={`col l6 m12 s12 project-card-container ${cardPosition}`}>
        <div className="project-card">
          <div className="maximize green lighten-1">
          </div>
          <div className="minimize yellow lighten-1">
          </div>
          <div className="close red lighten-1">
          </div>
          {/* title bar */}
          <div className="title-bar">
            <h6 className="grey-text text-lighten-4">{data.title}</h6>
          </div>
          {/* image preview */}
          <div className="window-workspace-wrapper">
            <div id={`project-card-image-container-${data._id}`} className="project-card-image-container">
  
            </div>
            {/* image overlay */}
            <div onClick={this.viewProject.bind(this, PROJECT_INFO[data._id])} className="project-card-image-overlay">
              <div className="project-overlay-container">
                <div className="animate__animated animate__bounceInDown overlay-desc-container">
                  <h6 className="grey-text text-lighten-4 overlay-desc">{data.description}</h6>
                </div>
                <div className="project-read-more">
                  <h6 className="animate__animated animate__headShake  animate__delay-3s light-blue-text clickable" 
                  onClick={this.viewProject.bind(this, PROJECT_INFO[data._id])}><span className="tap-to">TAP TO </span><span className="click-to">CLICK TO </span>LEARN MORE</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  async viewProject(projectInfo) {
    await this.setState(projectInfo);
    const projectViewer = document.getElementById("project-viewer")
    projectViewer.style.display = 'block';
    projectViewer.scrollTop = 0;
    this.navButtons.hide();
    this.viewProjectNav.show();
  }

  render() {
    // projects
    const Projects = [];
    for (let i in PROJECT_CARD_CONTENTS) {
      Projects.push(this.mapProject(PROJECT_CARD_CONTENTS[i], parseInt(i)));
    }

    return (
      <div>
        <ProjectViewer projectData={this.state}/>
        <div id="page-two-wrapper" className="container grey-text text-darken-3">
          <div className="slide-content-container">
            <FunCubes />
            <header className="portfolio-header">
              <div>
                <h3>Portfolio</h3>
                <p className="description">Adipisicing aliqua irure excepteur ea in do. Cillum fugiat consequat sint deserunt non officia aliquip est quis aute dolore. Nisi dolor ut aute nostrud tempor incididunt officia ut anim ipsum minim irure veniam non.</p>
              </div>
              <div>
                <p className="grey-text text-darken-1">Anim nostrud do irure dolore dolor nostrud quis. dolore dolor nostrud quis.</p>
              </div>
            </header>
            <div id="projects-container" className="row">
              {Projects}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

}