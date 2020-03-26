import React from 'react';

import './nav.css';
import { Link } from 'react-router-dom';

export default function Nav() {

    return (

        <div className="home-page">
            <nav className="nav navbar navbar-expand-lg navbar-light ">
                <img style={{ "width": "5%", "borderRadius": '10px' }} src='https://cdn.pixabay.com/photo/2020/03/08/23/24/coronavirus-4914028__340.jpg' alt='PIC'/>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link to='/' className="nav-link text-white">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/articel' className="nav-link text-white" >Articel</Link>

                        </li>
                        <li className="nav-item">
                            <Link to='/globalCoronaPollution' className="nav-link text-white">Pollution</Link>

                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link disabled" href="#" tabnidex="-1" aria-disabled="true">Disabled</a>
                        </li> */}
                    </ul>
                </div>
            </nav>
        </div>
    )
}
