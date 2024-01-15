import React from "react";
import './Screen.css'

function Screen1({ data }) {
    return (
        <div className="fixedSizeContainerScreen1">
            <p className="screen1title">{data.contrato}</p>
            <hr className="divisionLine"></hr>
            <div className="contentScreen1">
                <p><b className="fixedText">Codigo Local:</b>{data.codEquip}</p>
                <p><b className="fixedText">Endereço:</b> {data.endereco}</p>
                <p><b className="fixedText">Sentido:</b> {data.sentido}</p>
                <p><b className="fixedText">Status:</b> {data.status}</p>
                <p><b className="fixedText">Longitude:</b> {data.latitude}</p>
                <p><b className="fixedText">Latitude:</b> {data.longitude}</p>
                <p><b className="fixedText">Tipo do equipamento:</b> {data.tipoEquip}</p>
            </div>
        </div>
    )
}

export default Screen1