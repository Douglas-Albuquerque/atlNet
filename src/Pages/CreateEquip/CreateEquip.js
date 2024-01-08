import React, { useState } from 'react';
import "./CreateEquip.css"


export const CreateEquip = () => {

    const [formValues, setFormValues] = useState({
        idContrato: '123',
        codEquip: 'ABC123',
        ipWan: "132.255.228.169",
        ipLan: "10.254.254.254",
        ipVpn: "192.168.103.2",
        ipCam1: "10.254.254.64",
        ipCam2: "-",
        tipoEquip: "LPR FIXO",
        obs: "-",
        sshUser: "atlanta",
        rtspUser: "admin",
        rtspSenha: "F0RSatl1",
    });

    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
    };

    return (
        <div className='container'>
            <form className='conteinerForm'>
                <h1 className="title">Cadastro de Equipamento</h1>
                <hr />
                <div className="containerEquip">
                    <label>
                        ID do Contrato
                        <input
                            type="number"
                            name="idContrato"
                            value={formValues.idContrato}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Código do Equipamento
                        <input
                            type="text"
                            name="codEquip"
                            value={formValues.codEquip}
                            onChange={handleChange}
                        />
                    </label>
                    <label className='enderecoInput'>
                        Endereço
                        <input
                            type="text"
                            name="endereco"
                            value={formValues.endereco}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Sentido
                        <input
                            type="text"
                            name="sentido"
                            value={formValues.sentido}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Latitude
                        <input
                            type="text"
                            name="latitude"
                            value={formValues.latitude}
                            onChange={handleChange}
                        />
                    </label>
                    <label className='labelExtra'>
                        Longitude
                        <input
                            type="text"
                            name="longitude"
                            value={formValues.longitude}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <hr />
                <div className="containerIp">
                    <label>
                        IP de Wan:
                        <input
                            type="text"
                            name="ipWan"
                            value={formValues.ipWan}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        IP de Lan:
                        <input
                            type="text"
                            name="ipLan"
                            value={formValues.ipLan}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        IP de VPN:
                        <input
                            type="text"
                            name="ipVpn"
                            value={formValues.ipVpn}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Câmera 1:
                        <input
                            type="text"
                            name="ipCam1"
                            value={formValues.ipCam1}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Câmera 2:
                        <input
                            type="text"
                            name="ipCam2"
                            value={formValues.ipCam2}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Tipo:
                        <input
                            type="text"
                            name="tipoEquip"
                            value={formValues.tipoEquip}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        SSH User:
                        <input
                            type="text"
                            name="sshUser"
                            value={formValues.sshUser}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        RTSP User:
                        <input
                            type="text"
                            name="rtspUser"
                            value={formValues.rtspUser}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Senha RTSP:
                        <input
                            type="text"
                            name="rtspSenha"
                            value={formValues.rtspSenha}
                            onChange={handleChange}
                        />
                    </label>
                    <label className='labelObs'>
                        Observação:
                        <input
                            type="text"
                            name="obs"
                            value={formValues.obs}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <hr />
                <div className="containerPorts">
                    <label>
                        Porta Atsmsblitz:
                        <input
                            type="text"
                            name="iatsmsblitz"
                            value={formValues.iatsmsblitz}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Porta SSH:
                        <input
                            type="text"
                            name="issh"
                            value={formValues.issh}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Porta RTPS Câmera 1:
                        <input
                            type="text"
                            name="irtspCam1"
                            value={formValues.irtspCam1}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Porta RTPS Câmera 2:
                        <input
                            type="text"
                            name="irtspCam2"
                            value={formValues.irtspCam2}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Porta HTTP Câmera 1:
                        <input
                            type="text"
                            name="ihttpCam1"
                            value={formValues.ihttpCam1}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Porta HTTP Câmera 1:
                        <input
                            type="text"
                            name="ihttpCam2"
                            value={formValues.ihttpCam2}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Porta HTTP Mikrotik:
                        <input
                            type="text"
                            name="ihttpMikrotik"
                            value={formValues.ihttpMikrotik}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Porta NVR Câmera 1:
                        <input
                            type="text"
                            name="invrCam1"
                            value={formValues.invrCam1}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Porta NVR Câmera 2:
                        <input
                            type="text"
                            name="invrCam2"
                            value={formValues.invrCam2}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <hr />
                <div className="containerExtPorts">
                    <label>
                        Porta Ext Atsmsblitz:
                        <input
                            type="text"
                            name="atsmsblitz"
                            value={formValues.atsmsblitz}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Porta Ext SSH:
                        <input
                            type="text"
                            name="ssh"
                            value={formValues.ssh}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Porta Ext RTPS Câmera 1:
                        <input
                            type="text"
                            name="rtspCam1"
                            value={formValues.rtspCam1}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Porta Ext RTPS Câmera 2:
                        <input
                            type="text"
                            name="rtspCam2"
                            value={formValues.rtspCam2}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Porta Ext HTTP Câmera 1:
                        <input
                            type="text"
                            name="httpCam1"
                            value={formValues.httpCam1}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Porta Ext HTTP Câmera 1:
                        <input
                            type="text"
                            name="httpCam2"
                            value={formValues.httpCam2}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Porta Ext HTTP Mikrotik:
                        <input
                            type="text"
                            name="httpMikrotik"
                            value={formValues.httpMikrotik}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Porta Ext NVR Câmera 1:
                        <input
                            type="text"
                            name="nvrCam1"
                            value={formValues.nvrCam1}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Porta Ext NVR Câmera 2:
                        <input
                            type="text"
                            name="nvrCam2"
                            value={formValues.nvrCam2}
                            onChange={handleChange}
                        />
                    </label>

                </div>
                <button className="Formbutton" type="submit">Salvar</button>
            </form>
        </div>
    );
}


