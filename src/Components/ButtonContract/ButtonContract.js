import React from "react";
import "./ButtonContract.css"

function ButtonContract({ name, onClick }) {
    return (
        <div className="containerButtons">
            <button
                className="contractButton"
                onClick={onClick}
            >
                {name}
            </button>
        </div>
    )
}
export default ButtonContract