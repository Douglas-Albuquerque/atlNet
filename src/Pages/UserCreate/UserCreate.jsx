import React, { useState } from 'react';
import { Link } from "react-router-dom";
import atlImg from "../../assets/atl.png"
import { LayoutForms } from "../../Components/LayoutForms/LayoutForms";
import "./UserCreate.css"
import { ArrowLeftOutlined } from '@ant-design/icons';

export const UserCreate = () => {
    const [name, setName] = useState("");
    const [company, setCompany] = useState("");
    const [office, setOffice] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <LayoutForms>
            <form className="login-form">
                <span className="login-form-title">
                    <img src={atlImg} alt="Atlanta" />
                </span>
                {/* Nome do usuário */}
                <div className="wrap-input">
                    <input
                        className={
                            name !== ""
                                ? 'has-val input-login'
                                : 'input-login'
                        }
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <span className="focus-input" data-placeholder="Nome"></span>
                </div>
                {/* Empresa ao qual pertence */}
                <div className="wrap-input">
                    <input
                        className={
                            company !== ""
                                ? 'has-val input-login'
                                : 'input-login'
                        }
                        type="text"
                        value={company}
                        onChange={e => setCompany(e.target.value)}
                    />
                    <span className="focus-input" data-placeholder="Empresa"></span>
                </div>
                {/* Cargo ou função */}
                <div className="wrap-input">
                    <input
                        className={
                            office !== ""
                                ? 'has-val input-login'
                                : 'input-login'
                        }
                        type="text"
                        value={office}
                        onChange={e => setOffice(e.target.value)}
                    />
                    <span className="focus-input" data-placeholder="Cargo/Função"></span>
                </div>
                {/* Email que usará para acessar */}
                <div className="wrap-input">
                    <input
                        className={
                            email !== ""
                                ? 'has-val input-login'
                                : 'input-login'
                        }
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <span className="focus-input" data-placeholder="Email"></span>
                </div>
                {/* Senha */}
                <div className="wrap-input">
                    <input
                        className={
                            password !== ""
                                ? 'has-val input-login'
                                : 'input-login'
                        }
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <span className="focus-input" data-placeholder="Password"></span>
                </div>

                <div className="container-form-btn">
                    <button className="login-form-btn">Salvar</button>
                </div>

                <div className="text-botton">
                    <Link className="text2" to="/"><ArrowLeftOutlined /></Link>
                </div>

            </form>
        </LayoutForms>
    );
}