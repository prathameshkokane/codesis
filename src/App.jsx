import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Circle from "./assets/Circle.png";
import "./styles/app.scss";

function App() {
  return (
    <>
      <img className="circle" src={Circle} alt="" />
      <Navbar />
      <Hero />
      <AboutUs />
      <Footer />
    </>
  );
}

export default App;
