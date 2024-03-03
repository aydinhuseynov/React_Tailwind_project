import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Features from "./components/Features";
import About from "./components/About";
import Pricing from "./components/Pricing";
import Newsletter from "./components/Newsletter";
import Fotter from "./components/Fotter";
function App() {
  return (
    <>
      <Navbar />
      <Home/>
      <Features/>
      <About/>
      <Pricing/>
      <Newsletter/>
      <Fotter/>
    </>
  );
}

export default App;
