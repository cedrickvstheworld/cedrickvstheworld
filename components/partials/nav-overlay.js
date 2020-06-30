import React from 'react'
import {Link} from "react-awesome-slider/dist/navigation";
import {Hamburger, navigationButtons} from '../../static/js/helpers';

export default class NavOverlay extends React.Component {
  constructor() {
    super();
    this.hideNavOverlay = this.hideNavOverlay.bind(this);
  }

  componentDidMount() {
    this.hamburger = new Hamburger(document);
    this.navButtons = new navigationButtons(document);
  }

  async hideNavOverlay() {
    const funCubes = document.getElementById("fc-wrapper")
    this.navButtons.show();
    document.getElementById("hamburger").click();
    this.navButtons.show();
    if (funCubes) {
      funCubes.click();
    }
  }

  render() {
    return (
      <div id="nav-overlay-container" className="animate__animated animate__fadeInDown animate__faster">
        <div id="nav-overlay-wrapper">
          <div className="cards-container">
            <Link href="/">
              <div id="nav-item-1" onClick={this.hideNavOverlay} className="nav-item-container grey-text text-lighten-2 text-highlight">
                <h3>about</h3>
              </div>
            </Link>
            <Link href="/portfolio">
              <div id="nav-item-2" onClick={this.hideNavOverlay} className="nav-item-container grey-text text-lighten-2 text-highlight-reverse">
                <h3>portfolio</h3>
              </div>
            </Link>
            <Link href="/contact">
              <div id="nav-item-3" onClick={this.hideNavOverlay} className="nav-item-container grey-text text-lighten-2 text-highlight">
                <h3>contact</h3>
              </div>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}
