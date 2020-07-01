import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
const AutoplaySlider = withAutoplay(AwesomeSlider);

const slider = (props) => {
  let previews = [];
  for (let i in props.previews) {
    previews.push(
      <div key={i} data-src={props.previews[i]} />
    );
  }
  return (
    <AutoplaySlider
      play={true}
      cancelOnInteraction={true}
      interval={5000}
      className="image-preview-container"
      animation="openAnimation">
      {previews}
    </AutoplaySlider>
  );
}

export default slider;