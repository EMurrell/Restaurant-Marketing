import Head from "next/head";
import Hero from "../components/Hero.js";
import Nav from "../components/Nav.js";
import About from "../components/About.js";

export default function Home() {
  return (
    <>
      <Head>
        <title>Example Burger</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Nav />
      <Hero />
      <About />
    </>
  );
}
