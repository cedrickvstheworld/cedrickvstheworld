import AwesomeSlider from "react-awesome-slider";
import {
  withNavigationHandlers,
  withNavigationContext
} from "react-awesome-slider/dist/navigation";

// Slides/Pages
import Preload from './partials/preload';
import PageOne from './slides/page-one';
import PageTwo from './slides/page-two';
import PageThree from './slides/page-three';
import { PAGE_TWO_PRELOADS } from "../contents/project";


export const Slider = withNavigationHandlers(AwesomeSlider);

export default withNavigationContext(() => {
  return (
    <Slider
      startupScreen={<Preload />}
      startupDelay={2300}
      mobileTouch={false}
      className="awesome-slider"
      animation="foldOutAnimation"
      onTransitionEnd={() => {
        const pageOne = document.getElementById('page-one-wrapper')
        if (pageOne) {
          pageOne.style.display = 'grid';
        }
        const hamburger = document.getElementById('hamburger-container')
        if (hamburger) {
          hamburger.style.display = 'grid';
        }
      }}
      media={[
        {
          slug: "",
          className: "page-one slide",
          children: <PageOne />
        },
        {
          slug: "portfolio",
          preload: PAGE_TWO_PRELOADS,
          className: "page-two",
          children: <PageTwo />
        },

        {
          slug: "contact",
          className: "page-three slide",
          children: <PageThree />
        }
      ]}
    />
  );
});