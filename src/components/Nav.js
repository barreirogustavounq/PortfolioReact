import React from "react";
import { Link, useHistory } from 'react-router-dom'
import '../styles/Nav.css'
import $ from 'jquery'

$(document).ready(function () {
    $('a').hover(function () {
        $(this).addClass('animate__animated animate__fadeIn ');
    }, function () {
        $(this).removeClass('animate__animated animate__fadeIn');
    });
    $('.navbar-brand').hover(function () {
        $(this).addClass('animate__animated animate__fadeIn ');
    }, function () {
        $(this).removeClass('animate__animated animate__fadeIn');
    });
});

const Nav = () => {
    const history = useHistory()    
    return (
        <nav>
        <div class="nav-wrapper">
                <Link onClick={() => history.push('/')} id="Name" class="brand-logo">Gustavo Barreiro</Link>

                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        <li><Link onClick={() => history.push('/')} >Home</Link>
                        </li>
                        <li><Link  onClick={() => history.push('/porfolio')} >Portfolio</Link>
                        </li>
                        <li><Link  onClick={() => history.push('/contact')}>Contact</Link>
                        </li>
                        <li><Link  onClick={() => history.push('/about')}>About</Link>
                        </li>
                    </ul>    
                </div>
      </nav>
                )
}

                export default Nav