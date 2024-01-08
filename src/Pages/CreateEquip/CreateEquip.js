import React, { useState } from 'react';
import "./CreateEquip.css"


export const CreateEquip = () => {
    const [equipamento, setEquipamento] = useState({
        idContrato: 1,
        codEquip: '',
        endereco: '',
        sentido: '',

    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setEquipamento({ ...equipamento, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log('Dados enviados:', equipamento);

    };

    return (
        <div className='container'>

            <form className='conteinerForm'>
                <h1 className="title">Cadastro de Equipamento</h1>
                <hr />
                <div className="container0">
                    <label>
                        ID do Contrato:
                        <input
                            type="number"
                            name="idContrato"
                        />
                    </label>
                    <label>
                        Código do Equipamento:
                        <input
                            type="text"
                            name="codEquip" />
                    </label>
                    <label className='enderecoInput'>
                        Endereço:
                        <input
                            type="text"
                            name="endereco"
                        />
                    </label>
                </div>
                <hr />
                <div className="container1">
                    <label>
                        Sentido:
                        <input
                            type="text"
                            name="sentido"
                        />
                    </label>
                    <label>
                        Latitude:
                        <input
                            type="text"
                            name="status"
                        />
                    </label>
                    <label>
                        Longitude:
                        <input
                            type="text"
                            name="codEquip"
                        />
                    </label>
                    <label>
                        IP de Wan:
                        <input
                            type="text"
                            name="codEquip"
                        />
                    </label>
                    <label>
                        IP de Lan:
                        <input
                            type="text"
                            name="codEquip"
                        />
                    </label>
                    <label>
                        IP de VPN:
                        <input
                            type="text"
                            name="codEquip"
                        />
                    </label>
                    <label>
                        Câmera 1:
                        <input
                            type="text"
                            name="codEquip"
                        />
                    </label>
                    <label>
                        Câmera 2:
                        <input
                            type="text"
                            name="codEquip"
                        />
                    </label>
                    <label>
                        Tipo:
                        <input
                            type="text"
                            name="codEquip"
                        />
                    </label>
                    <label>
                        Observação:
                        <input
                            type="text"
                            name="codEquip"
                        />
                    </label>
                    <label>
                        SSH User:
                        <input
                            type="text"
                            name="codEquip"
                        />
                    </label>
                    <label>
                        RTSP User:
                        <input
                            type="text"
                            name="codEquip"
                        />
                    </label>
                    <label>
                        Senha RTSP:
                        <input
                            type="text"
                            name="codEquip"
                        />
                    </label>
                </div>
                <hr />
                <div className="container2">
                    <label>
                        Porta Atsmsblitz:
                        <input
                            type="text"
                            name="codEquip"
                        />
                    </label>
                    <label>
                        Porta SSH:
                        <input
                            type="text"
                            name="codEquip"
                        />
                    </label>
                    <label>
                        Porta RTPS Câmera 1:
                        <input
                            type="text"
                            name="codEquip"
                        />
                    </label>
                    <label>
                        Porta RTPS Câmera 2:
                        <input
                            type="text"
                            name="codEquip"
                        />
                    </label>
                    <label>
                        Porta HTTP Câmera 1:
                        <input
                            type="text"
                            name="codEquip"
                        />
                    </label>
                    <label>
                        Porta HTTP Câmera 1:
                        <input
                            type="text"
                            name="codEquip"
                        />
                    </label>
                    <label>
                        Porta HTTP Mikrotik:
                        <input
                            type="text"
                            name="codEquip"
                        />
                    </label>
                    <label>
                        Porta NVR Câmera 1:
                        <input
                            type="text"
                            name="codEquip"
                        />
                    </label>
                    <label>
                        Porta NVR Câmera 2:
                        <input
                            type="text"
                            name="codEquip"
                        />
                    </label>
                </div>
                <hr />
                <div className="container3">
                    <label>
                        Porta Ext Atsmsblitz:
                        <input
                            type="text"
                            name="codEquip"
                        />
                    </label>
                    <label>
                        Porta Ext SSH:
                        <input
                            type="text"
                            name="codEquip"
                        />
                    </label>
                    <label>
                        Porta Ext RTPS Câmera 1:
                        <input
                            type="text"
                            name="codEquip"
                        />
                    </label>
                    <label>
                        Porta Ext RTPS Câmera 2:
                        <input
                            type="text"
                            name="codEquip"
                        />
                    </label>
                    <label>
                        Porta Ext HTTP Câmera 1:
                        <input
                            type="text"
                            name="codEquip"
                        />
                    </label>
                    <label>
                        Porta Ext HTTP Câmera 1:
                        <input
                            type="text"
                            name="codEquip"
                        />
                    </label>
                    <label>
                        Porta Ext HTTP Mikrotik:
                        <input
                            type="text"
                            name="codEquip"
                        />
                    </label>
                    <label>
                        Porta Ext NVR Câmera 1:
                        <input
                            type="text"
                            name="codEquip"
                        />
                    </label>
                    <label>
                        Porta Ext NVR Câmera 2:
                        <input
                            type="text"
                            name="codEquip" />
                    </label>

                </div>
                <button className="Formbutton" type="submit">Salvar</button>
            </form>
        </div>
    );
}


