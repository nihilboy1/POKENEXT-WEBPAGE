import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = (props) => {
  return (
    <>
      <Navbar />
      <main className="mainContainer">{props.children}</main>
      <Footer />
    </>
  );
};

export default Layout;
