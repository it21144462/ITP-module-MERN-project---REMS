import React from 'react';
import { NavLink } from 'react-router-dom';
import "./css/sthome.css";



const Sthome = () => {
  return (
    <>
    
    <div class="body1">
    <div class="cont">
            <div class="coch1">
                <h1>Welcome To REMS!</h1>
                <p>Worlds First Railway E-ticketing and Management System</p>
                <p>Pioneers of</p>
                <p>Innovation  ||  Inventions ||  Implementation</p>
                <NavLink to="/" className="btn btn-success">Visit <i class="fa-solid fa-forward"></i></NavLink>
                <br />
                <p>Powered by : Okla</p>
                
            </div>
        </div> 
        </div>          
   

    </>
  )
}

export default Sthome;