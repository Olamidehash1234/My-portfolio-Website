import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import CalEmbed from "./CalEmbed";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="noise"></div>
      <ScrollToTop />
      <CalEmbed />
      <Banner />
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
