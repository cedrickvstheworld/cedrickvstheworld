import React from 'react';
import Slider from './preview-slider';

export default class ProjectViewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projectData: props.projectData,
    };
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    this.setState({projectData: nextProps.projectData})
    return false;  
  }

  render() {
    const project = this.state.projectData;
    return (
      <div className="animate__animated animate__slideInDown" id="project-viewer">
        <div id="project-viewer-container" className="container">
          <div>
            <h4 id="test">{project.title}</h4>
            <p>{project.healthText}</p>
          </div>
          <div>
            <Slider previews={project.previews}/>
          </div>
          <div>
            <h6>{project.description}</h6>
          </div>
          <div>
            <h5>Tools and technologies I got involved in this project.</h5>
          </div>
        </div>
      </div>
    );
  }
}