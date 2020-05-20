import {
  withNavigationContext,
  Link
} from "react-awesome-slider/dist/navigation";

const Nav = withNavigationContext(() => {

  return (
    <header className="page-header" id="slide-navigator">
      <div className="page-header__wrapper">
        <nav>
          <Link href="/">
            index
          </Link>
          <Link href="/page-two">
            page-two
          </Link>
        </nav>
      </div>
    </header>
  );
});

export default Nav;
