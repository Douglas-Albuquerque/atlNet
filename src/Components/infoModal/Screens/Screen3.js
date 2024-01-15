import React from "react";
import './Screen.css'

function Screen3({ data }) {
    return (
        <div className="fixedSizeContainer">
            <p className="paragTitle">ACESSOS</p>
            <hr className="divisionLineScreen3"></hr>

            <p className="paragLabels">ATSMSBLITZ:</p>

            <a href={"http://" + data.ipWan + ":" + data.PortaExt.atsmsblitz + "/atsmsblitz"}
                target="_blank"
                rel="noopener noreferrer"
                className="linkContent">
                {(data.PortaExt.atsmsblitz !== "-")
                    ? "http://" + data.ipWan + ":" + data.PortaExt.atsmsblitz + "/atsmsblitz"
                    : "-"
                }
            </a>

            <p className="paragLabels">SSH:</p>

            <span>
                {(data.sshUser !== "-")
                    ? "ssh " + data.sshUser + "@" + data.ipWan + " -p " + data.PortaExt.ssh
                    : "-"
                }
            </span>

            <p className="paragLabels">RTSP CAM 1:</p>

            <span>
                {(data.PortaExt.rtspCam1 === "-")
                    ? "-"
                    : "rtsp://" + data.rtspUser + ":" + data.rtspSenha + "@" + data.ipWan + ":" + data.PortaExt.rtspCam1 + "/Streaming/Channels/101?transportmode=multicast"
                }
            </span>

            <p className="paragLabels">RTSP CAM 2:</p>

            <span>
                {(data.PortaExt.rtspCam2 === "-")
                    ? "-"
                    : "rtsp://" + data.rtspUser + ":" + data.rtspSenha + "@" + data.ipWan + ":" + data.PortaExt.rtspCam2 + "/Streaming/Channels/101?transportmode=multicast"
                }
            </span>

            <p className="paragLabels">HTTP CAM 2:</p>

            <a
                href={"http://" + data.ipWan + ":" + data.PortaExt.httpCam1}
                target="_blank"
                rel="noopener noreferrer"
                className="linkContent">
                {(data.PortaExt.httpCam1 !== "-")
                    ? "http://" + data.ipWan + ":" + data.PortaExt.httpCam1
                    : "-"
                }
            </a>

            <p className="paragLabels">HTTP CAM 2:</p>

            <a
                href={"http://" + data.ipWan + ":" + data.PortaExt.httpCam2}
                target="_blank"
                rel="noopener noreferrer"
                className="linkContent">
                {(data.PortaExt.httpCam2 !== "-")
                    ? "http://" + data.ipWan + ":" + data.PortaExt.httpCam2
                    : "-"
                }
            </a>

            <p className="paragLabels">HTTP MIKROTIK:</p>

            <a
                href={"http://" + data.ipWan + ":" + data.PortaExt.httpMikrotik}
                target="_blank"
                rel="noopener noreferrer"
                className="linkContent">
                {(data.PortaExt.httpMikrotik !== "-")
                    ? "http://" + data.ipWan + ":" + data.PortaExt.httpMikrotik
                    : "-"
                }
            </a>

        </div>
    )

}

export default Screen3