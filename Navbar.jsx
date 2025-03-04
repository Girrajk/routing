import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (

        <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
            <div className='container-fluid'>
                <Link className='navbar-brand' to="#">
                    <img src='https://cdn-icons-png.flaticon.com/128/11798/11798761.png'
                        alt='navbar-ican'
                        height="40px"
                        className='rounded-pill'

                    />
                </Link>

                <button className='navbar-toggler' data-bs-target="#my-nav" data-bs-toggle="collapse">
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div id='my-nav' className='collapse navbar-collapse'>
                <ul className='navbar-nav me-auto'>
                    <li className='navbar-item'>
                        <Link className='nav-link' to="/">
                            <b>Home</b>
                        </Link>
                    </li>
                    <li className='navbar-item'>
                        <Link className='nav-link' to="/about">
                            <b>About</b>
                        </Link>
                    </li>
                    <li className='navbar-item'>
                        <Link className='nav-link' to="/contact">
                            <b>Contact</b>
                        </Link>
                    </li>
                </ul>
                </div>

                
            </div>
        </nav>

    );
}

export default Navbar