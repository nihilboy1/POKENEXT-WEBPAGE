import Navbar from "./Navbar";
import Footer from "./Footer";
import Head from "next/head";

const Layout = (props) => {
  return (
    <>
      <Head>
        <html lang="pt-br" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;600&display=swap"
          rel="stylesheet"
        ></link>

        <link
          href="https://fonts.googleapis.com/css2?family=Sofia+Sans:wght@400;600&display=swap"
          rel="stylesheet"
        />

        <link rel="shortcut icon" href="/images/favicon.ico" />
        <title>PokeNext</title>
      </Head>
      <Navbar />
      <main className="mainContainer">{props.children}</main>
      <Footer />
    </>
  );
};

export default Layout;
