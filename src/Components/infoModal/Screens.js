import React from "react";
import Screen1 from "./Screens/Screen1";
import Screen2 from "./Screens/Screen2";
import Screen3 from "./Screens/Screen3";


function Screens({ countPage, data }) {
    return (
        <>
            {
                (countPage === 1)
                    ? <Screen1 data={data} />
                    : (countPage === 2)
                        ? <Screen2 data={data} />
                        : (countPage === 3)
                            ? <Screen3 data={data} />
                            : <></>
            }
        </>
    )
};

export default Screens;