import React from "react";
import Screen1 from "./Screens/Screen1";
import Screen2 from "./Screens/Screen2";
import Screen3 from "./Screens/Screen3";

function Screens({ countPage }) {
    return (
        <>
            {
                (countPage === 1)
                    ? <Screen1 />
                    : (countPage === 2)
                        ? <Screen2 />
                        : (countPage === 3)
                            ? <Screen3 />
                            : <></>
            }
        </>
    )
};

export default Screens;