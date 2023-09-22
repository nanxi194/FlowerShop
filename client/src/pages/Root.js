import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";
import ScrollToTop from "../ScrollToTop";
import { useSelector } from "react-redux";

function RootLayout() {
  const showNavigation = useSelector(
    (state) => state.navigation_action.navigationIsVisible
  );

  return (
    <>
      <ScrollToTop />
      {showNavigation ? <Navigation /> : ""}
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
