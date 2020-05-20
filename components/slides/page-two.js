import React from 'react';
import {PROJECT_CARD_CONTENTS} from '../../contents/project';

export default class PageTwo extends React.Component {
  
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
                  <h6 className="animate__animated animate__headShake  animate__delay-3s"><a href="">LEARN MORE</a></h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  render() {
    // projects
    const Projects = [];
    for (let i in PROJECT_CARD_CONTENTS) {
      Projects.push(this.mapProject(PROJECT_CARD_CONTENTS[i], parseInt(i)));
    }

    return (
      <div>
        <div id="page-two-wrapper" className="container grey-text text-darken-3">
          <div className="slide-content-container">
            <div>
              <h4><b>my awesome portfolio</b></h4>
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

        <div id="footer-wrapper">
          <div id="footer-end-container">
            <div id="footer-end-wrapper" className="grey darken-4">
              <div>
                <div id="links-container" className="row">
                  <div className="col s6 col-link">
                    <div className="link-item-container">
                      <a href="https://github.com/cedie712" rel="noopener noreferrer" target="_blank">
                        <div className="link-item-container">
                          <i className="fab fa-github-alt fa-2x white-text link-fa"></i>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col s6 col-link">
                    <div className="link-item-container">
                      <a href="https://web.facebook.com/cedrick.domingo.75" rel="noopener noreferrer" target="_blank">
                        <div className="link-item-container">
                          <i className="fab fa-facebook-f fa-2x white-text link-fa"></i>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="center center-align">
                  <p className="yellow-text text-lighten-3"><i className="fab fa-google-plus-g "></i>&nbsp;cedrickdomingo048@gmail.com</p>
                  <p className="grey-text text-darken-2">CEDRICK DOMINGO <span className="light-blue-text text-lighten-2">©2020</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}