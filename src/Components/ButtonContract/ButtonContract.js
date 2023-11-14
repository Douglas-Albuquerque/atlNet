import React from "react";
import "./ButtonContract.css"

function ButtonContract({ name, onClick }) {
    return (
        <div className="containerButtons">
            <div className="teste">
                <button
                    className="contractButton"
                    onClick={onClick}
                >
                    {name}
                </button>
            </div>
        </div>
    )
}
export default ButtonContract