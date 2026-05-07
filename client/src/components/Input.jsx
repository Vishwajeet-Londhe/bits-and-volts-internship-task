import React from 'react';
import '../styles/Input.css';

const Input = ({ label, error, ...props }) => {
  return (
    <div className="form-group">
      {label && <label className="form-label">{label}</label>}
      <input className={`form-input ${error ? 'error' : ''}`} {...props} />
      {error && <span className="error-message">{error}</span>}
    </div>
  );
};

export default Input;
