
import "./App.css";
import Experience from "./components/Experience/Experience";
import Header from "./components/Header/Header";
import SectionDev from "./components/SectionDev/SectionDev";
import Training from "./components/Training/Training";

function App() {
  return (
    <>
      <Header />
      <SectionDev/>
      <Experience/>
      <Training/>
    </>
  );
}

export default App;
