import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import atlImg from "../../assets/atl.png"
import { LayoutForms } from "../../Components/LayoutForms/LayoutForms";
import "./Login.css"
import { ArrowLeftOutlined } from '@ant-design/icons';

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const history = useNavigate();

    const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:3000';

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);

            const response = await axios.post(`${apiUrl}/login`, {
                email: email,
                password: password,
            });

            const token = response.data.token;

            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

            history('/');
        } catch (error) {
            console.error('Erro no login:', error);

        } finally {
            setLoading(false);
        }
    };
    return (
        <LayoutForms>
            <form className="login-form" onSubmit={handleLogin}>
                <span className="login-form-title">
                    <img src={atlImg} alt="Atlanta" />
                </span>

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
                    <button className="login-form-btn" disabled={loading}>
                        {loading ? 'Entrando...' : 'Login'}
                    </button>
                </div>

                <div className="text-botton">
                    <Link className="text2" to="/"><ArrowLeftOutlined /></Link>
                </div>
            </form>
        </LayoutForms>
    );
}