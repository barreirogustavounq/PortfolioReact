import React from "react";
import "../styles/Home.css"
import image from "../images/meprofile.jpg"
const Home = () => {

    return (
        <div class="mainDiv">

            <div id="containerHome" class="container">
                <div class="row">
                    <div class="col-4">
                        <img id="imageProfile" src={image} alt="Avatar" />
                    </div>
                    <div class="col-4">
                        2 of 3 (wider)
                    </div>
                    <div class="col-4">
                        3 of 3
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home