import React from "react";
import "./ButtonEquipament.css";

function ButtonEquipament({ name, onClick, data, openModal }) {
    
    const handleClick = () => {
        openModal(data);
        if (onClick) {
            onClick();
        }
    };

    return (
        <div className="containerButtons">
            <button className="equipButton" onClick={handleClick}>
                {name}
            </button>
        </div>
    );
}

export default ButtonEquipament;
