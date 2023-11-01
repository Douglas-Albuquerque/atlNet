import React from "react";
import axios from "axios";


async function searchEquip() {
    await axios.post("http://localhost:3001/searcEquipById",
        { codEquip: codEquip }
    ).then(
        response => {
            setData(response.data[0]);
            setIsModalOpen(true);
        }
    ).catch(
        err => {
        }
    )
};

export default searchEquip;