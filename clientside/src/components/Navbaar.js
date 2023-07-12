import React from 'react';
import './css/Navbar.css';
import logo from "./assests/logo.png";

export const Navbaar = () => {
  return (
    <header>

            <div>
                <nav className="navbar">
                    { <a className="logo" href="1">
                    <img className='logo' src={logo} alt='logo' />
                    </a> }
                    <ul className="nav-links">
                    <li>
                        <a href="http://localhost:3000/sitemain">Home</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Services</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                    </ul>
                </nav>
            </div>


        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
            <a className="navbar-brand" href="http://localhost:3000/calculator">Shippnig policy</a>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="http://localhost:3000/calculator">Cost calculator</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="http://localhost:3000/reservation">New Reservation Application</a>
                        </li>
                        
                        </ul>

                        <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    
                </div>
            </div>
        </nav>

    </header>
  )
}
