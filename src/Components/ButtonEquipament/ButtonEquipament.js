import React from "react";
import "./ButtonEquipament.css"

function ButtonEquipament({name, onClick, data}) {
    console.log(data);
    return (
        <div className="containerButtons">
            <button
                className="equipButton"
                onClick={onClick}
            >
                {name}
            </button>
        </div>
    )
}
export default ButtonEquipament