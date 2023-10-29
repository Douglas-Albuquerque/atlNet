import React from "react";
import './Screen.css'

function Screen3() {
    return (
        <div className="containerScree3">
            <p className="paragTitle">ACESSOS</p>
            <hr className="divisionLine"></hr>
            <p className="paragLabels">ATSMSBLITZ:</p>
            <a href="google.com" className="linkContent">http://177.92.XXX.XXX:XXXX/atsmsblitz</a>
            <p className="paragLabels">SSH:</p>
            <a href="google.com" className="linkContent">ssh atlanta@177.XXX.XXX.198 -p 22222</a>
            <p className="paragLabels">RTSP CAM 1:</p>
            <a href="google.com" className="linkContent">rtsp://admin:RDC58ats210@177.XXX.XXX.198:554/Streaming/Channels/101?transportmode=multicast</a>
            <p className="paragLabels">RTSP CAM 2:</p>
            <a href="google.com" className="linkContent">rtsp://admin:RDC58ats210@177.XXX.XXX.198:554/Streaming/Channels/101?transportmode=multicast</a>
            <p className="paragLabels">HTTP CAM 2:</p>
            <a href="google.com" className="linkContent">http://177.XXX.XXX.198:8164</a>
            <p className="paragLabels">HTTP CAM 2:</p>
            <a href="google.com" className="linkContent">http://177.XXX.XXX.198:8164</a>
            <p className="paragLabels">HTTP MIKROTIK:</p>
            <a href="google.com" className="linkContent">http://177.XXX.XXX.198:8164</a>

        </div>
    )

}

export default Screen3