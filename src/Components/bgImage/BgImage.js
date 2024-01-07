import React from "react";
import bgImg from "../../assets/atl_azul.png";
import './BgImage.css'


export const BgImage = () => {
    return (
        <div className="bgImg" >
            <img src={bgImg} className="img" alt="Logo Atlanta tecnologia" />
        </div>
    )
}

