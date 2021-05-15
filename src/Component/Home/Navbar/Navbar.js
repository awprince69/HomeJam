import React from 'react';
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSearch } from '@fortawesome/free-solid-svg-icons'
import bag from '../../../images/bag.svg'
import logo from '../../../images/homejam_logo.png'
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><img src={logo} alt="" width='100'/></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ml-auto">
                        <a className="nav-link active mr-5 text-white" aria-current="page" href="#"><FontAwesomeIcon icon={faSearch} /> Search</a>
                        {/* <button className="btn" type="submit"><FontAwesomeIcon icon={faSearch} /> Search</button> */}
                        <a className="nav-link active mr-5 text-white" href="#">Help</a>
                        <a className="nav-link active mr-5 text-white" href="#">Account</a>
                        <a className="nav-link active mr-5 " href="#"><img src={bag} alt="" width='24'/></a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;