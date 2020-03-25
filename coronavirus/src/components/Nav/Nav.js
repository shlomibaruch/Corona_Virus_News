import React from 'react';

import './nav.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

export default function Nav() {

    return (

        <div className="home-page">
            <nav class="nav navbar navbar-expand-lg navbar-light ">
                <img style={{ "width": "5%", "borderRadius": '10px' }} src='https://cdn.pixabay.com/photo/2020/03/08/23/24/coronavirus-4914028__340.jpg' />
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <Link to='/' class="nav-link text-white">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link to='/articel' class="nav-link text-white" >Articel</Link>

                        </li>
                        <li class="nav-item">
                            <Link to='/globalCoronaPollution' class="nav-link text-white">Pollution</Link>

                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
