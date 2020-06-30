import React from 'react';
import {Hamburger as HM, navigationButtons} from '../../static/js/helpers';

export default class Hamburger extends React.Component {
  constructor() {
    super();
    this.shifting = false;
    this.shifted = false;
    this.shapeShift = this.shapeShift.bind(this);
    this.showNavOverlay = this.showNavOverlay.bind(this);
    this.hideNavOverlay = this.hideNavOverlay.bind(this);
  }

  componentDidMount() {
    this.hamburger = new HM(document);
    this.navButtons = new navigationButtons(document);
  }

  async shapeShift() {
    const funCubes = document.getElementById("fc-wrapper")
    if (this.shifting) {
      return
    }
    this.shifting = true;
    if (!this.shifted) {
      if (funCubes) {
        this.navButtons.show();
      }
      this.showNavOverlay();
      await this.hamburger.secondForm();
      this.shifted = true;
    }
    else {
      if (funCubes) {
        this.navButtons.hide();
      }
      this.hideNavOverlay();
      await this.hamburger.firstForm();
      this.shifted = false
    }
    this.shifting = false;
  }

  showNavOverlay() {
    const nav = document.getElementById('nav-overlay-container');
    nav.style.display = 'grid';
  }

  hideNavOverlay() {
    const nav = document.getElementById('nav-overlay-container');
    nav.classList.add('animate__fadeOutUp');
    const hideToDisplay = setTimeout(() => {
      nav.classList.remove('animate__fadeOutUp');
      nav.style.display = 'none';
      clearTimeout(hideToDisplay);
    }, 500);
  }

  render() {
    return (
      <div id="hamburger-container" className="animate__animated animate__fadeInRight">
        <div onClick={this.shapeShift} id="hamburger" className="hamburger hamburger-first-form">
          <div className="hamburger-first-form"></div>
        </div>
      </div>
    );
  }
}