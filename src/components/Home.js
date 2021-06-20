import React, { useEffect } from "react";
import "../styles/Home.css"
import image from "../images/meprofile.jpg"
import lp1 from "../images/boostrap.png"
import lp2 from "../images/css3.png"
import lp3 from "../images/html.png"
import lp4 from "../images/java.png"
import lp5 from "../images/jquery.png"
import lp6 from "../images/mongodb.png"
import lp7 from "../images/mysql.png"
import lp8 from "../images/nodejs.png"
import lp9 from "../images/postgres.png"
import lp10 from "../images/python.png"
import lp11 from "../images/react.png"
import lp12 from "../images/redux.png"
import M from 'materialize-css'

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems);
});



const Home = () => {   

    useEffect(() => {
        // imitialize slider
        var elems = document.querySelectorAll(".carousel");
        var instances = window.M.Carousel.init(elems);
      }, []);
    const CarouselPL = () => {
        return (
        <div class="carousel">
                <a class="carousel-item"  ><img alt='lenguajes1' src={lp1} /></a>
                <a class="carousel-item"  ><img alt='lenguajes2' src={lp2} /></a>
                <a class="carousel-item"  ><img alt='lenguajes3' src={lp3} /></a>
                <a class="carousel-item"  ><img alt='lenguajes4' src={lp4} /></a>
                <a class="carousel-item"  ><img alt='lenguajes5' src={lp5} /></a>
                <a class="carousel-item"  ><img alt='lenguajes6' src={lp6} /></a>
                <a class="carousel-item"  ><img alt='lenguajes7' src={lp7} /></a>
                <a class="carousel-item"  ><img alt='lenguajes8' src={lp8} /></a>
                <a class="carousel-item"  ><img alt='lenguajes9' src={lp9} /></a>
                <a class="carousel-item"  ><img alt='lenguajes10'src={lp10} /></a>
                <a class="carousel-item"  ><img alt='lenguajes11'src={lp11} /></a>
                <a class="carousel-item"  ><img alt='lenguajes12'src={lp12} /></a>

            </div>
    )
}

    return (
        <div class="mainDiv">

            <div id="containerHome" class="container">
                <div class="row">
                    <div class="col-4">
                        <img id="imageProfile" src={image} alt="Avatar" />
                    </div>
                </div>
            </div>
            <CarouselPL/>
        </div>
    )
}

export default Home