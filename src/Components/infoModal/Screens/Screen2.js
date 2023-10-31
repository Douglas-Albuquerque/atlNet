import React from "react";
import { Col, Row } from 'antd';
import './Screen.css'

const Screen2 = ({ data }) => {
    console.log(data);
    return (
        <div>
            <div className="container1col">
                <div>
                    <Row>
                        <Col className="colText">
                            IP WAN:
                        </Col>
                        <Col className="col2Text">
                            {data.ipWan}
                        </Col>
                    </Row>
                    <Row>
                        <Col className="colText">
                            IP PC LAN:
                        </Col>
                        <Col className="col2Text">
                            {data.ipLan}
                        </Col>
                    </Row>
                    <Row>
                        <Col className="colText">
                            IP PC VPN:
                        </Col>
                        <Col className="col2Text">
                            {data.ipVpn}
                        </Col>
                    </Row>
                    <Row>
                        <Col className="colText">
                            IP CAM 1:
                        </Col>
                        <Col className="col2Text">
                            {data.ipCam1}
                        </Col>
                    </Row>
                    <Row>
                        <Col className="colText">
                            IP CAM 2:
                        </Col>
                        <Col className="col2Text">
                            {data.ipCam2}
                        </Col>
                    </Row>
                </div>
            </div>
            <hr></hr>
            <div className="container2col">
                <div className="contInterna">
                    <Col>
                        <Row>
                            <Col className="titleText">
                                PORTAS INTERNAS
                            </Col>
                        </Row>
                        <Row>
                            <Col className="colText">
                                ATSMSBLITZ:
                            </Col>
                            <Col className="col2Text">
                                {data.PortaInt.atsmsblitz}
                            </Col>
                        </Row>
                        <Row>
                            <Col className="colText">
                                SSH:
                            </Col>
                            <Col className="col2Text">
                                {data.PortaInt.ssh}
                            </Col>
                        </Row>
                        <Row>
                            <Col className="colText">
                                RTSP CAM 1:
                            </Col>
                            <Col className="col2Text">
                                {data.PortaInt.rtspCam1}
                            </Col>
                        </Row>
                        <Row>
                            <Col className="colText">
                                RTSP CAM 2:
                            </Col>
                            <Col className="col2Text">
                                {data.PortaInt.rtspCam2}
                            </Col>
                        </Row>
                        <Row>
                            <Col className="colText">
                                HTTP CAM 1:
                            </Col>
                            <Col className="col2Text">
                                {data.PortaInt.httpCam1}
                            </Col>
                        </Row>
                        <Row>
                            <Col className="colText">
                                HTTP CAM 2:
                            </Col>
                            <Col className="col2Text">
                                {data.PortaInt.httpCam2}
                            </Col>
                        </Row>
                        <Row>
                            <Col className="colText">
                                HTTP MIKROTIK:
                            </Col>
                            <Col className="col2Text">
                                {data.PortaInt.httpMikrotik}
                            </Col>
                        </Row>
                        <Row>
                            <Col className="colText">
                                NVR CAM 1:
                            </Col>
                            <Col className="col2Text">
                                {data.PortaInt.nvrCam1}
                            </Col>
                        </Row>
                        <Row>
                            <Col className="colText">
                                NVR CAM 2:
                            </Col>
                            <Col className="col2Text">
                                {data.PortaInt.nvrCam2}
                            </Col>
                        </Row>
                    </Col>
                </div>
                <div className="hrStyle">
                    <hr></hr>
                </div>
                <div>
                    <Col>
                        <Row>
                            <Col className="titleText">
                                PORTAS EXTERNAS
                            </Col>
                        </Row>
                        <Row>
                            <Col className="colText">
                                ATSMSBLITZ:
                            </Col>
                            <Col className="col2Text">
                                {data.PortaExt.atsmsblitz}
                            </Col>
                        </Row>
                        <Row>
                            <Col className="colText">
                                SSH:
                            </Col>
                            <Col className="col2Text">
                                {data.PortaExt.ssh}
                            </Col>
                        </Row>
                        <Row>
                            <Col className="colText">
                                RTSP CAM 1:
                            </Col>
                            <Col className="col2Text">
                                {data.PortaExt.rtspCam1}
                            </Col>
                        </Row>
                        <Row>
                            <Col className="colText">
                                RTSP CAM 2:
                            </Col>
                            <Col className="col2Text">
                                {data.PortaExt.rtspCam2}
                            </Col>
                        </Row>
                        <Row>
                            <Col className="colText">
                                HTTP CAM 1:
                            </Col>
                            <Col className="col2Text">
                                {data.PortaExt.httpCam1}
                            </Col>
                        </Row>
                        <Row>
                            <Col className="colText">
                                HTTP CAM 2:
                            </Col>
                            <Col className="col2Text">
                                {data.PortaExt.httpCam1}
                            </Col>
                        </Row>
                        <Row>
                            <Col className="colText">
                                HTTP MIKROTIK:
                            </Col>
                            <Col>
                                {data.PortaExt.httpMikrotik}
                            </Col>
                        </Row>
                        <Row>
                            <Col className="colText">
                                NVR CAM 1:
                            </Col>
                            <Col className="col2Text">
                                {data.PortaExt.nvrCam1}
                            </Col>
                        </Row>
                        <Row>
                            <Col className="colText">
                                NVR CAM 2:
                            </Col>
                            <Col className="col2Text">
                                {data.PortaExt.nvrCam2}
                            </Col>
                        </Row>
                    </Col>
                </div>
            </div>

        </div>

    )

};

export default Screen2;