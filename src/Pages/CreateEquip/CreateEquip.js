import React, { useEffect, useState } from 'react';
import "./CreateEquip.css"
import axios from 'axios';


export const CreateEquip = () => {

    const [formValues, setFormValues] = useState({
        //Dados do equipamentos
        idContrato: "",
        codEquip: "",
        endereco: "",
        sentido: "",
        status: "ATIVO",
        latitude: "",
        longitude: "",
        //Dados de Ip
        ipWan: "",
        ipLan: "10.254.254.254",
        ipVpn: "",
        ipCam1: "10.254.254.64",
        ipCam2: "-",
        tipoEquip: "LPR FIXO",
        sshUser: "atlanta",
        rtspUser: "admin",
        rtspSenha: "F0RSatl1",
        obs: "",
        //portas intertnas
        iatsmsblitz: "8090",
        issh: "22222",
        irtspCam1: "554",
        irtspCam2: "-",
        ihttpCam1: "8164",
        ihttpCam2: "-",
        ihttpMikrotik: "8001",
        invrCam1: "8888",
        invrCam2: "-",
        //portas externas
        atsmsblitz: "8090",
        ssh: "22222",
        rtspCam1: "554",
        rtspCam2: "-",
        httpCam1: "8164",
        httpCam2: "-",
        httpMikrotik: "8001",
        nvrCam1: "8888",
        nvrCam2: "-",
    });

    const handleChange = (e) => {
        if (e.target.name === "idContrato") {
            const selectedContractId = e.target.value;
            console.log("ID do Contrato selecionado:", selectedContractId);
            setFormValues({
                ...formValues,
                idContrato: selectedContractId,
            });
        } else {
            setFormValues({ ...formValues, [e.target.name]: e.target.value });
        }
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const requiredFields = [
            'idContrato', 'codEquip', 'endereco', 'sentido', 'status', 'latitude', 'longitude',
            'ipWan', 'ipLan', 'ipVpn', 'ipCam1', 'tipoEquip', 'sshUser', 'rtspUser', 'rtspSenha',
            'iatsmsblitz', 'issh', 'irtspCam1', 'ihttpCam1', 'ihttpMikrotik', 'invrCam1',
            'atsmsblitz', 'ssh', 'rtspCam1', 'httpCam1', 'httpMikrotik', 'nvrCam1'
        ];
    
        const missingFields = requiredFields.filter(field => !formValues[field]);
    
        if (missingFields.length > 0) {
            console.error('Campos obrigatórios ausentes:', missingFields.join(', '));
            return;
        }
    
        try {
            const response = await axios.post("http://atlnetserver.ddns.net:3001/createEquip", formValues);
            console.log('Dados enviados com sucesso:', response.data);
        } catch (error) {
            console.error('Erro ao enviar dados:', error);
        }
    };
    
    const [contratos, setContratos] = useState([]);

    useEffect(() => {
        const getContracts = async () => {
            try {
                const response = await axios.get("http://atlnetserver.ddns.net:3001/searchContract");
                setContratos(response.data);
            } catch (error) {
                console.error('Erro ao buscar contratos:', error);
            }
        };

        getContracts();
    }, []);

    return (
        <div className='container'>

            <form className='conteinerForm' onSubmit={handleSubmit}>
                <h1 className="title">Cadastro de Equipamento</h1>
                <hr />
                <div className="containerEquip">
                    <label>
                        Contrato
                        <select
                            name="idContrato"
                            value={formValues.idContrato}
                            onChange={handleChange}
                        >
                            <option value="" disabled>Selecione um contrato</option>
                            {contratos.map((contrato) => (
                                <option key={contrato.id} value={contrato.id}>
                                    {contrato.nameContract}
                                </option>
                            ))}
                        </select>
                    </label>
                    <label>
                        Código do Equipamento
                        <input
                            placeholder='ATS94301'
                            type="text"
                            name="codEquip"
                            value={formValues.codEquip}
                            onChange={handleChange}
                        />
                    </label>
                    <label className='enderecoInput'>
                        Endereço
                        <input
                            placeholder='Av. AGENOR GONÇALVES - Canaã dos Carajás - PA'
                            type="text"
                            name="endereco"
                            value={formValues.endereco}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div className="containerEquipExtra">
                    <label>
                        Sentido
                        <input
                            placeholder='Oeste/Leste'
                            type="text"
                            name="sentido"
                            value={formValues.sentido}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Latitude
                        <input
                            placeholder=' -6.52349937346553'
                            type="text"
                            name="latitude"
                            value={formValues.latitude}
                            onChange={handleChange}
                        />
                    </label>
                    <label className='labelExtra'>
                        Longitude
                        <input
                            placeholder='-49.8382912521843'
                            type="text"
                            name="longitude"
                            value={formValues.longitude}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Status
                        <input
                            placeholder='Ativo'
                            type="text"
                            name="status"
                            value={formValues.status}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <hr />
                <div className="containerIp">
                    <label>
                        IP de Wan
                        <input
                            type="text"
                            name="ipWan"
                            value={formValues.ipWan}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        IP de Lan
                        <input
                            type="text"
                            name="ipLan"
                            value={formValues.ipLan}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        IP de VPN
                        <input
                            type="text"
                            name="ipVpn"
                            value={formValues.ipVpn}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Câmera 1
                        <input
                            type="text"
                            name="ipCam1"
                            value={formValues.ipCam1}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Câmera 2
                        <input
                            type="text"
                            name="ipCam2"
                            value={formValues.ipCam2}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Tipo
                        <input
                            type="text"
                            name="tipoEquip"
                            value={formValues.tipoEquip}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        SSH User
                        <input
                            type="text"
                            name="sshUser"
                            value={formValues.sshUser}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        RTSP User
                        <input
                            type="text"
                            name="rtspUser"
                            value={formValues.rtspUser}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Senha RTSP
                        <input
                            type="text"
                            name="rtspSenha"
                            value={formValues.rtspSenha}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Observação
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
                        Porta Atsmsblitz
                        <input
                            type="text"
                            name="iatsmsblitz"
                            value={formValues.iatsmsblitz}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Porta SSH
                        <input
                            type="text"
                            name="issh"
                            value={formValues.issh}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Porta RTPS Câmera 1
                        <input
                            type="text"
                            name="irtspCam1"
                            value={formValues.irtspCam1}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Porta RTPS Câmera 2
                        <input
                            type="text"
                            name="irtspCam2"
                            value={formValues.irtspCam2}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Porta HTTP Câmera 1
                        <input
                            type="text"
                            name="ihttpCam1"
                            value={formValues.ihttpCam1}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Porta HTTP Câmera 1
                        <input
                            type="text"
                            name="ihttpCam2"
                            value={formValues.ihttpCam2}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Porta HTTP Mikrotik
                        <input
                            type="text"
                            name="ihttpMikrotik"
                            value={formValues.ihttpMikrotik}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Porta NVR Câmera 1
                        <input
                            type="text"
                            name="invrCam1"
                            value={formValues.invrCam1}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Porta NVR Câmera 2
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
                        Porta Ext Atsmsblitz
                        <input
                            type="text"
                            name="atsmsblitz"
                            value={formValues.atsmsblitz}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Porta Ext SSH
                        <input
                            type="text"
                            name="ssh"
                            value={formValues.ssh}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Porta Ext RTPS Câmera 1
                        <input
                            type="text"
                            name="rtspCam1"
                            value={formValues.rtspCam1}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Porta Ext RTPS Câmera 2
                        <input
                            type="text"
                            name="rtspCam2"
                            value={formValues.rtspCam2}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Porta Ext HTTP Câmera 1
                        <input
                            type="text"
                            name="httpCam1"
                            value={formValues.httpCam1}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Porta Ext HTTP Câmera 1
                        <input
                            type="text"
                            name="httpCam2"
                            value={formValues.httpCam2}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Porta Ext HTTP Mikrotik
                        <input
                            type="text"
                            name="httpMikrotik"
                            value={formValues.httpMikrotik}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Porta Ext NVR Câmera 1
                        <input
                            type="text"
                            name="nvrCam1"
                            value={formValues.nvrCam1}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Porta Ext NVR Câmera 2
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


