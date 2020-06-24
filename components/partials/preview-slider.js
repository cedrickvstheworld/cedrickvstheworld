import AwesomeSlider from 'react-awesome-slider';

const slider = (props) => {
  return (
    <AwesomeSlider
      // bullets={false}
      // organicArrows={false}
      className="image-preview-container"
      animation="fallAnimation">
      <div data-src="https://images.pexels.com/photos/4273439/pexels-photo-4273439.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
      <div data-src="https://images.pexels.com/photos/4348226/pexels-photo-4348226.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
    </AwesomeSlider>
  );
}

export default slider;