import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dining from "./pages/Dining/Dining";
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
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App
