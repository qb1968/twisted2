import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Team from "./pages/Team";
import TeamGallery from "./pages/TeamGallery";
import Gallery from "./pages/Gallery";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MemberGallery from "./pages/MemberGallery";


export default function App() {
  
  return (
    <div className="font-body ">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/team" element={<Team />} />
        <Route path="/team-gallery" element={<TeamGallery />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/gallery/:memberId" element={<MemberGallery />}/>
      </Routes>
      <Footer/>
    </div>
  );
}
