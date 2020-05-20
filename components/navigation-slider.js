import AwesomeSlider from "react-awesome-slider";
import {withNavigationHandlers} from "react-awesome-slider/dist/navigation";

// Wrapp the AwesomeSlider component with the navigationHandlers
export const NavigationSlider = withNavigationHandlers(AwesomeSlider);