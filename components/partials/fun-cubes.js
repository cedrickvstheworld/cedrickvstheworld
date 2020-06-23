import {funCubes as fc, navigationButtons} from '../../static/js/helpers';
import React from 'react';


export default class FunCubes extends React.Component {
  constructor(props) {
    super(props);
    this.returnToParent = this.returnToParent.bind(this);
  }

  returnToParent() {
    const projectViewer = document.getElementById('project-viewer');
    projectViewer.classList.add('animate__fadeOutUp');
    const hideToDisplay = setTimeout(() => {
      projectViewer.classList.remove('animate__fadeOutUp');
      projectViewer.style.display = 'none';
      clearTimeout(hideToDisplay);
    }, 500);
    new fc(document).hide();
    new navigationButtons(document).show();
  }

  render() {
    return (
      <div onClick={this.returnToParent} className="animate__animated" id="fun-cubes-container">
  
        <div id="box0" className="fun-cube animate__animated animate__fadeInTopLeft">
        </div>
        <div id="box1" className="fun-cube animate__animated animate__fadeInDown">
        </div>
        <div id="box2" className="fun-cube animate__animated animate__fadeInTopRight">
        </div>
        <div id="box3" className="fun-cube animate__animated animate__fadeInLeft">
        </div>
        <div id="box4" className="fun-cube animate__animated animate__fadeIn">
        </div>
        <div id="box5" className="fun-cube animate__animated animate__fadeInRight">
        </div>
        <div id="box6" className="fun-cube animate__animated animate__fadeInBottomLeft">
        </div>
        <div id="box7" className="fun-cube animate__animated animate__fadeInUp">
        </div>
        <div id="box8" className="fun-cube animate__animated animate__fadeInBottomRight">
        </div>
  
      </div>
    );
  }
}
