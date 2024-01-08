import React from 'react';
import './LayoutForms.css'

export const LayoutForms = (props) => {
    return (
        <div className="container">
            <div className="container-login">
                <div className="wrap-login">
                    {props.children}
                </div>
            </div>
        </div>
    );
};