// FailPopUp.js
import React, { useEffect, useState } from 'react';
import { Progress } from 'antd';
import './FailPopUp.css';

const FailPopUp = ({ message, onClose }) => {
  const [showPopUp, setShowPopUp] = useState(true);
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => Math.max(0, prev - 2));
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
    <div className={`fail-popup ${showPopUp ? 'show' : 'hide'}`}>
      <div className="fail-popup-content">
        <div>{message}</div>
        <div className="progress-container">
          <Progress
          className="progress-bar" 
          percent={progress} 
          showInfo={false} 
          strokeColor="#e8faec"
          />
        </div>
      </div>
    </div>
  );
};

export default FailPopUp;
