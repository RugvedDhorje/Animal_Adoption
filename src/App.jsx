import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import About from "./About/About";
import Information from "./Information/Information";
import Shop from "./Pages/Shop/Shop";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import DisplayPets from "./DisplayPets/DisplayPets";
import DisplayPetFood from "./Displayfood/DisplayPetFood";
import DisplayToys from "./DisplayToys/DisplayToys";

function App() {
  return (
    <>
      <div className="w-full overflow-hidden">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Aboutus" element={<About />} />
          <Route path="/Contact" element={<Information />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/DisplayPets" element={<DisplayPets />} />
          <Route path="/DisplayPetFood" element={<DisplayPetFood />} />
          <Route path="/DisplayToys" element={<DisplayToys />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
