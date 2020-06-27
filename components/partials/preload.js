import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCog} from '@fortawesome/free-solid-svg-icons';

export default class Preload extends React.Component {
  constructor() {
    super();
    this.state = {
      branding: ''
    }
  }

  componentDidMount() {
    this.showBranding();
  }

  async showBranding() {
    await new Promise(r => setTimeout(r, 200));
    const branding = 'cedrick vs the world';
    for (let i in [...Array(branding.length).keys()]) {
      await this.setState({branding: this.state.branding + branding.charAt(parseInt(i))})
      await new Promise(r => setTimeout(r, 50));
    }
  }

  render() {
    return (
      <div className="preload-container">
        <div className="preload-wrapper">
          <div id="cog-container-1" className="cog-container">
            <FontAwesomeIcon id="cog-1" className="cog blue-grey-text" icon={faCog}  size="10x"/>
          </div>
          <div id="cog-container-2" className="cog-container">
            <FontAwesomeIcon id="cog-2" className="cog teal-text text-lighten-1" icon={faCog}  size="8x"/>
          </div>
          <div id="cog-container-3" className="cog-container">
            <FontAwesomeIcon id="cog-3" className="cog grey-text text-darken-4" icon={faCog}  size="5x"/>
          </div>
          <div id="preload-branding" className="grey-text text-darken-3">{this.state.branding}</div>
        </div>
      </div>
    );
  }
}