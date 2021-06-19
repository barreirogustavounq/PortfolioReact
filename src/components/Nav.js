import React from "react";
import { Link } from 'react-router-dom'
import '../styles/Nav.css'
import $ from 'jquery'

$(document).ready(function () {
    $('.nav-link').hover(function () {
        $(this).addClass('animate__animated animate__jello ');
    }, function () {
        $(this).removeClass('animate__animated animate__jello');
    });
    $('.navbar-brand').hover(function () {
        $(this).addClass('animate__animated animate__jello ');
    }, function () {
        $(this).removeClass('animate__animated animate__jello');
    });
});

const Nav = () => {

    return (
        <nav id="navmain" class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <Link to="/" id="Name" class="navbar-brand">Gustavo <br/> Barreiro</Link>

                    <ul id="NavLinks" class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link  to="/" class="nav-link"  >Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link  to="/porfolio" class="nav-link ">Portfolio</Link>
                        </li>
                        <li class="nav-item">
                            <Link  to="/contact" class="nav-link ">Contact</Link>
                        </li>
                        <li class="nav-item">
                            <Link  to="/about" class="nav-link ">About</Link>
                        </li>
                    </ul>    
                </div>
      </nav>
                )
}

                export default Nav