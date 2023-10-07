import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import "./styles/app.scss";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <Footer />
    </>
  );
}

export default App;
