import Head from 'next/head';
import { Provider } from "react-awesome-slider/dist/navigation";
import { useRouter } from "next/router";
import NavOverlay from '../components/partials/nav-overlay';
import Hamburger from '../components/partials/hamburger';

// Styles
import '../static/css/fonts/font-lato.css';
import '../static/css/fonts/font-pix.css';
import 'animate.css';
import '../static/css/materialize-css-grid.min.css';
import '../static/css/materialize-css-buttons.min.css';
import 'react-awesome-slider/dist/styles.css';
import "react-awesome-slider/dist/custom-animations/fold-out-animation.css";
import "react-awesome-slider/dist/custom-animations/open-animation.css";
import '../static/css/main.css';
import '../static/css/preload.css';
import '../static/css/slide-navigator.css';
import '../static/css/slides/page-one.css';
import '../static/css/slides/page-two.css';
import '../static/css/slides/page-three.css';
import '../static/css/footer.css';
import '../static/css/fun-cubes.css';
import '../static/css/hamburger.css';
import '../static/css/nav-overlay.css';
import '../static/css/project-viewer.css';


function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <Provider slug={router.route}>
      <Head>
        <link rel="shortcut icon" type="image/png" href="/favicon.png" />
        <title>cedrick vs the world</title>
        <meta key="theme-color" name="theme-color" content="#1a1a1a" />
        <script src="https://cdn.jsdelivr.net/npm/emailjs-com@2.3.2/dist/email.min.js"></script>
        <link href="/svg-with-js.css" rel="stylesheet"></link>
      </Head>
      <Hamburger />
      <NavOverlay />
      <Component {...pageProps} />
    </Provider>
  );
}

export default App;
