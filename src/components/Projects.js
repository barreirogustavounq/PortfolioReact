import React, { useEffect } from "react";
import "../styles/Projects.css"
import M from 'materialize-css'

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.slider');
    var instances = M.Slider.init(elems);
});

const Projects = () => {
    const urlCert = ["https://udemy-certificate.s3.amazonaws.com/image/UC-14faba19-b654-4a43-a03a-6b0ae93a2414.jpg",
        "https://udemy-certificate.s3.amazonaws.com/image/UC-196ba7a9-827d-457f-a004-113bfe492485.jpg",
        "https://udemy-certificate.s3.amazonaws.com/image/UC-45575a8c-e4bf-428e-83d4-4434fc0d3ddb.jpg",
        "https://udemy-certificate.s3.amazonaws.com/image/UC-db4e274c-3fe7-429a-8bb0-4dc51d067054.jpg",
        "https://udemy-certificate.s3.amazonaws.com/image/UC-879bae1c-d9b9-4234-b424-bf0243380ae0.jpg",
        "https://udemy-certificate.s3.amazonaws.com/image/UC-7892ad5f-6405-46fa-97cf-9bd639f7fd6a.jpg",
        "https://udemy-certificate.s3.amazonaws.com/image/UC-e9d1b8f8-85ca-49d2-9bcf-cbde30b8c71a.jpg",
        "https://udemy-certificate.s3.amazonaws.com/image/UC-522e5012-e39d-400e-a191-be2216d05acf.jpg",
        "https://udemy-certificate.s3.amazonaws.com/image/UC-ec458443-cd8b-4e1a-8623-8f44ed833f99.jpg",
        "https://udemy-certificate.s3.amazonaws.com/image/UC-b91a9b1b-03cc-4e9a-86a0-c0ef50b752b8.jpg",
        "https://udemy-certificate.s3.amazonaws.com/image/UC-59d68d0b-ac6d-45b7-940b-c63109563576.jpg",
        "https://udemy-certificate.s3.amazonaws.com/image/UC-8d70fa1c-1883-4ac9-bc5c-23b212bd2486.jpg"]
    useEffect(() => {
        // imitialize slider
        var elems = document.querySelectorAll(".slider");
        var instances = M.Slider.init(elems);
    }, []);

    const Certificados = () => {
        const listItems = urlCert.map((image) =>
            <li>
                <img alt="certificado" src={image} />
            </li>)
        return (
            <div class="slider">
                <ul class="slides">
                    {listItems}
                </ul>
            </div>)
    }
    return (
        <div>
            <h3 id="certificatetittle">Certificados obtenidos :</h3>
            <Certificados />
        </div>


    )
}

export default Projects