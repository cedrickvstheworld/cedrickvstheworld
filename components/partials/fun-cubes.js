import React from 'react';


export default class FunCubes extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="animate__animated" id="fun-cubes-container">
  
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
