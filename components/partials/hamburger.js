import React from 'react';
import {Hamburger as HM} from '../../static/js/helpers';

export default class Hamburger extends React.Component {
  constructor() {
    super();
    this.shifting = false;
    this.shifted = false;
    this.shapeShift = this.shapeShift.bind(this);
  }

  componentDidMount() {
    this.hamburger = new HM(document);
  }

  async shapeShift() {
    if (this.shifting) {
      return
    }
    this.shifting = true;
    if (!this.shifted) {
      await this.hamburger.secondForm();
      this.shifted = true;
    }
    else {
      await this.hamburger.firstForm();
      this.shifted = false
    }
    this.shifting = false;
  }

  render() {
    return (
      <div id="hamburger-container">
        <div onClick={this.shapeShift} id="hamburger" className="hamburger hamburger-first-form">
          <div className="hamburger-first-form"></div>
        </div>
      </div>
    );
  }
}