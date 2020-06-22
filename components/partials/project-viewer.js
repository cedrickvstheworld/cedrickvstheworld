import React from 'react';

export default class ProjectViewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projectData: props.projectData,
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    this.setState({projectData: nextProps.projectData})
    return false;  
  }

  render() {
    return (
      <div className="animate__animated animate__slideInDown" id="project-viewer">
        {this.state.projectData.a}
      </div>
    );
  }
}