import React, { useState, useEffect } from 'react';
import { Progress } from 'antd';
import './SuccessPopUp.css';

const SuccessPopUp = ({ message, onClose }) => {
  const [showPopUp, setShowPopUp] = useState(true);
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => Math.max(0, prev - 2)); // Diminuir a barra de progresso
    }, 100);

    const timer = setTimeout(() => {
      clearInterval(interval);
      setShowPopUp(false);
      onClose();
    }, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [onClose]);

  return (
    <div className={`custom-popup ${showPopUp ? 'show' : 'hide'}`}>
      <div className="custom-popup-content">
        <div>{message}</div>
        <div className="progress-container">
          <Progress 
          className="progress-bar" 
          percent={progress} 
          showInfo={false} 
          strokeColor="#e8faec"
          status="active" />
        </div>
      </div>
    </div>
  );
};

export default SuccessPopUp;
