import React from 'react';

import './nav.css';
import { Link } from 'react-router-dom';

export default function Nav() {

    return (

        <div className="home-page">
            <nav className="nav navbar navbar-expand-lg navbar-light ">
                <img className = "navLogo" src='https://cdn.pixabay.com/photo/2020/02/04/06/48/coronavirus-4817431_960_720.png' alt='PIC'/>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link to='/' className="nav-link text-white">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/articel' className="nav-link text-white" >Articel's</Link>

                        </li>
                        <li className="nav-item">
                            <Link to='/globalCoronaPollution' className="nav-link text-white">Pollution</Link>

                        </li>
                
                    </ul>
                </div>
            </nav>
        </div>
    )
}
