import { Provider } from "react-awesome-slider/dist/navigation";
import { useRouter } from "next/router";

// Styles
import '../static/css/font-lato.css';
import '../static/css/main.css';
import 'animate.css';
import '../static/css/materialize-css-grid.min.css';
import 'react-awesome-slider/dist/styles.css';
import "react-awesome-slider/dist/custom-animations/fold-out-animation.css";
import '../static/css/slide-navigator.css';
import '../static/css/slides/page-one.css';
import '../static/css/slides/page-two.css';
import '../static/css/slides/page-three.css';
import '../static/css/footer.css';
import '../static/css/project-viewer.css';


function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <Provider slug={router.route}>
      {/* <Nav /> */}
      <Component {...pageProps} />
    </Provider>
  );
}

export default App;
