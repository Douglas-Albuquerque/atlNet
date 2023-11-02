import React from "react";

function ButtonContract({name, onClick}) {
    return (
        <div>
            <button
            onClick={onClick}
            >
                {name}
            </button>
        </div>
    )
}
export default ButtonContract