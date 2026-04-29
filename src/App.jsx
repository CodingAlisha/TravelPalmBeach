import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dining from "./pages/Dining/Dining";
import Landing from "./pages/Landing/Landing";
import Romance from "./pages/Romance/Romance";
import Adventure from "./pages/Adventure/Adventure";
import Hotel from "./pages/Hotel/Hotel";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from './components/Footer/Footer';

function App() {


  return (
   
    <Router>
      <nav>
        <Navbar />
        {/* <Link to='/'>Home</Link>
        <Link to='/Dining'>Dining</Link> */}
      </nav>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Dining' element={<Dining/>} />
        <Route path='/Landing' element={<Landing/>} />
        <Route path='/Romance' element={<Romance/>} />
        <Route path='/Adventure' element={<Adventure/>} />
        <Route path='/Hotel' element={<Hotel/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App
