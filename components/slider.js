import {NavigationSlider} from './navigation-slider';

// Slides/Pages
import PageOne from './slides/page-one';
import PageTwo from './slides/page-two';
import PageThree from './slides/page-three';

// Create an AwesomeSlider instance with some content
const Slider = () => {
  return (
    <NavigationSlider
      className="awesome-slider"
      animation="foldOutAnimation"
      media={[
        {
          slug: "",
          // place all images here so it will be waited before rendering the actual slide
          // preload: [""],
          className: "page-one slide",
          children: <PageOne />
        },
        {
          slug: "page-two",
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
          slug: "page-three",
          className: "page-three slide",
          children: <PageThree />
        }
      ]}
    />
   )
}

export default Slider;