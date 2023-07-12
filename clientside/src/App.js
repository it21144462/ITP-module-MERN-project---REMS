import './App.css';
import './App.js';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import { Navbaar } from './components/Navbaar';
import Home from './components/Home';
import Reservation from './components/Reservation';
import Edit from './components/Edit';
import Details from './components/Details';
import Calculator from './components/Calculator';

import Download from './components/downloadreserve';
import Sthome from './components/sthome';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from './components/Footer';
// import footeer  from './components/footeer';




function App() {
  return (
    <>

      <Navbaar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/view/:id" element={<Details />} />
          <Route path="/download/:id" element={<Download />} />
          <Route path="/sitemain" element={<Sthome />} />
        </Routes>
        
      </Router>
      
      <Footer />
      
      

        
        
    </>
  );
}

export default App;


