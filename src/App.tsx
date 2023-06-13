import "./App.css";
import "./Responsive.css";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import SectionDev from "./components/SectionDev/SectionDev";
import Training from "./components/Training/Training";

function App() {
  return (
    <>
      <NavBar />
      <SectionDev />
      <Experience />
      <Training />
      <Footer />
    </>
  );
}

export default App;
