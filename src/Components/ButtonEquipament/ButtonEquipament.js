import React from "react";
import "./ButtonEquipament.css"

function ButtonEquipament({ name, onClick }) {
    return (
        <div className="containerEquip">
            <button
                className="contentEquip"
                onClick={onClick}
            >
                {name}
            </button>
        </div>
    )
}
export default ButtonEquipament