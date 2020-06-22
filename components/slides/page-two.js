import React from 'react';
import {PROJECT_CARD_CONTENTS} from '../../contents/project';
import ProjectViewer from '../partials/project-viewer';
import Footer from '../partials/footer';
import {navigationButtons} from '../../static/js/helpers';


export default class PageTwo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      a: "test"
    };
    this.viewProject = this.viewProject.bind(this);
  }

  componentDidMount() {
    this.navButtons = new navigationButtons(document);
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
            <div className="project-card-image-overlay">
              <div className="project-overlay-container">
                <div className="animate__animated animate__bounceInDown overlay-desc-container">
                  <h6 className="grey-text text-lighten-4 overlay-desc">{data.description}</h6>
                </div>
                <div className="project-read-more">
                  <h6 className="animate__animated animate__headShake  animate__delay-3s light-blue-text clickable" onClick={this.viewProject}>LEARN MORE</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  async viewProject() {
    await this.setState({a: "fucker"});
    document.getElementById("project-viewer").style.display = 'grid';
    this.navButtons.hide();
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
            <div>
              <h4><b>Portfolio</b></h4>
              <p >Adipisicing aliqua irure excepteur ea in do. Cillum fugiat consequat sint deserunt non officia aliquip est quis aute dolore. Nisi dolor ut aute nostrud tempor incididunt officia ut anim ipsum minim irure veniam non.</p>
            </div>
            <div>
              <p className="grey-text text-darken-1">Anim nostrud do irure dolore dolor nostrud quis. dolore dolor nostrud quis.</p>
            </div>
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