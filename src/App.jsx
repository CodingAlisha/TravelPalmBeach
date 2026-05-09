import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dining from "./pages/Dining/Dining";
import Landing from "./pages/Landing/Landing";
import Romance from "./pages/Romance/Romance";
import Adventure from "./pages/Adventure/Adventure";
import Hotel from "./pages/Hotel/Hotel";
import Explore from "./pages/Explore/Explore";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from './components/Footer/Footer';
import ScrollToTop from "./components/Scroll/ScrollToTop";
import Gallery from "./components/Gallery/Gallery";

function App() {


  return (
   
    <Router>

      <ScrollToTop />
      <nav>
        <Navbar />
       
      </nav>

      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/Dining' element={<Dining/>} />
        <Route path='/Landing' element={<Landing/>} />
        <Route path='/Romance' element={<Romance/>} />
        <Route path='/Adventure' element={<Adventure/>} />
        <Route path='/Hotel' element={<Hotel/>} />
        <Route path='/Explore' element={<Explore/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
