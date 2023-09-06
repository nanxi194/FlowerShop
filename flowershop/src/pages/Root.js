import { Outlet } from "react-router-dom";
// import MainNavigation from "../components/MainNavigation";
import Navigation from "../components/Navigation";
import ScrollToTop from "../ScrollToTop";

function RootLayout() {
  return (
    <>
      <ScrollToTop />
      <Navigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
