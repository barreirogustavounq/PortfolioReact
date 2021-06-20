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
import lp13 from "../images/materialize.png"
import M from 'materialize-css'

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems);
});
export const CarouselOfImages = (imagesLP) => {
    const listItems = imagesLP.map((image) =>
        <a  class="carousel-item"> 
            <img alt="certificado" src={image} />
        </a>)
    return (
        <div class="carousel">
                {listItems}
        </div>)
}

const Home = () => {   
    const imagesLP = [lp1,lp2,lp3,lp4,lp5,lp6,lp7,lp8,lp9,lp10,lp11,lp12,lp13]
    useEffect(() => {
        // imitialize slider
        var elems = document.querySelectorAll(".carousel");
        var instances = window.M.Carousel.init(elems);
      }, []);

      const Languages = () => {
        const listItems = imagesLP.map((image) =>
            <a  class="carousel-item"> 
                <img alt="certificado" src={image} />
            </a>)
        return (
            <div class="carousel">
                    {listItems}
            </div>)
    }
    return (
        <div class="mainDiv">
                <div class="row">
                    <div class="col s6 offset-s5">
                        <img id="imageProfile" src={image} alt="Avatar" />
                    </div>
                    <div class="col s12">
                        <h3 class="tec">Tecnmologias con las cuales he trabajado : </h3>
                        {CarouselOfImages(imagesLP)}
                    </div>
                </div>
               
        </div>
    )
}

export default Home