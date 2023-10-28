import React from "react";
import { Col, Row } from 'antd';
import './Screen.css'

const Screen2 = () => {
    return (
        <div>
            <div className="container1col">
                <div>
                    <Row>
                        <Col className="colText">
                            IP WAN:
                        </Col>
                        <Col className="col2Text">
                            177.XX.138.xxx
                        </Col>
                    </Row>
                    <Row>
                        <Col className="colText">
                            IP PC LAN:
                        </Col>
                        <Col className="col2Text">
                            177.XX.138.xxx
                        </Col>
                    </Row>
                    <Row>
                        <Col className="colText">
                            IP PC VPN:
                        </Col>
                        <Col className="col2Text">
                            177.XX.138.xxx
                        </Col>
                    </Row>
                    <Row>
                        <Col className="colText">
                            IP CAM 1:
                        </Col>
                        <Col className="col2Text">
                            177.XX.138.xxx
                        </Col>
                    </Row>
                    <Row>
                        <Col className="colText">
                            IP CAM 2:
                        </Col>
                        <Col className="col2Text">
                            177.XX.138.xxx
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
                                8090
                            </Col>
                        </Row>
                        <Row>
                            <Col className="colText">
                                SSH:
                            </Col>
                            <Col className="col2Text">
                                22222
                            </Col>
                        </Row>
                        <Row>
                            <Col className="colText">
                                RTSP CAM 1:
                            </Col>
                            <Col className="col2Text">
                                554
                            </Col>
                        </Row>
                        <Row>
                            <Col className="colText">
                                RTSP CAM 2:
                            </Col>
                            <Col className="col2Text">
                                555
                            </Col>
                        </Row>
                        <Row>
                            <Col className="colText">
                                HTTP CAM 1:
                            </Col>
                            <Col className="col2Text">
                                8164
                            </Col>
                        </Row>
                        <Row>
                            <Col className="colText">
                                HTTP CAM 2:
                            </Col>
                            <Col className="col2Text">
                                8165
                            </Col>
                        </Row>
                        <Row>
                            <Col className="colText">
                                HTTP MIKROTIK:
                            </Col>
                            <Col className="col2Text">
                                8001
                            </Col>
                        </Row>
                        <Row>
                            <Col className="colText">
                                NVR CAM 1:
                            </Col>
                            <Col className="col2Text">
                                8000
                            </Col>
                        </Row>
                        <Row>
                            <Col className="colText">
                                NVR CAM 2:
                            </Col>
                            <Col className="col2Text">
                                8888
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
                                8090
                            </Col>
                        </Row>
                        <Row>
                            <Col className="colText">
                                SSH:
                            </Col>
                            <Col className="col2Text">
                                22222
                            </Col>
                        </Row>
                        <Row>
                            <Col className="colText">
                                RTSP CAM 1:
                            </Col>
                            <Col className="col2Text">
                                554
                            </Col>
                        </Row>
                        <Row>
                            <Col className="colText">
                                RTSP CAM 2:
                            </Col>
                            <Col className="col2Text">
                                555
                            </Col>
                        </Row>
                        <Row>
                            <Col className="colText">
                                HTTP CAM 1:
                            </Col>
                            <Col className="col2Text">
                                8164
                            </Col>
                        </Row>
                        <Row>
                            <Col className="colText">
                                HTTP CAM 2:
                            </Col>
                            <Col className="col2Text">
                                8165
                            </Col>
                        </Row>
                        <Row>
                            <Col className="colText">
                                HTTP MIKROTIK:
                            </Col>
                            <Col>
                                8001
                            </Col>
                        </Row>
                        <Row>
                            <Col className="colText">
                                NVR CAM 1:
                            </Col>
                            <Col className="col2Text">
                                8000
                            </Col>
                        </Row>
                        <Row>
                            <Col className="colText">
                                NVR CAM 2:
                            </Col>
                            <Col className="col2Text">
                                8888
                            </Col>
                        </Row>
                    </Col>
                </div>
            </div>

        </div>

    )

};

export default Screen2;