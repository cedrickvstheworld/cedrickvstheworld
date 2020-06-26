import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCog} from '@fortawesome/free-solid-svg-icons';

export default class Preload extends React.Component {
  render() {
    return (
      <div className="preload-container">
        <div className="preload-wrapper">
          <div id="cog-container-1" className="cog-container">
            <FontAwesomeIcon id="cog-1" className="cog blue-grey-text" icon={faCog}  size="10x"/>
          </div>
          <div id="cog-container-2" className="cog-container">
            <FontAwesomeIcon id="cog-2" className="cog light-blue-text text-darken-1" icon={faCog}  size="8x"/>
          </div>
          <div id="cog-container-3" className="cog-container">
            <FontAwesomeIcon id="cog-3" className="cog grey-text text-darken-4" icon={faCog}  size="5x"/>
          </div>
        </div>
      </div>
    );
  }
}