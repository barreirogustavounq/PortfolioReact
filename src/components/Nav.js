import React from "react";
import { Link, useHistory } from 'react-router-dom'
import '../styles/Nav.css'
import $ from 'jquery'
import M from "materialize-css"

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
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
  });
        

const Nav = () => {
    const history = useHistory()
    return (
        <div>
            <nav>
            <div class="nav-wrapper">
                    <Link onClick={() => history.push('/')} id="Name" class="brand-logo">Gustavo Barreiro</Link>
                    <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
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
            <ul class="sidenav" id="mobile-demo">
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
    )
}

export default Nav