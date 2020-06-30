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


export const Slider = withNavigationHandlers(AwesomeSlider);

export default withNavigationContext(() => {
  return (
    <Slider
      startupScreen={<Preload />}
      // startupDelay={2300}
      startupDelay={100}
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
          // place all images here so it will be waited before rendering the actual slide
          // preload: [""],
          className: "page-one slide",
          children: <PageOne />
        },
        {
          slug: "portfolio",
          preload: [
            'https://images.pexels.com/photos/4273439/pexels-photo-4273439.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            'https://images.pexels.com/photos/4348226/pexels-photo-4348226.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            'https://images.pexels.com/photos/3689772/pexels-photo-3689772.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            'https://images.pexels.com/photos/1713953/pexels-photo-1713953.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'          
          ],
          className: "page-two slide",
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