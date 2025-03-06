// pages/TermsOfUsePage.jsx
import React from 'react';
import './PageStyles.css';

const TermsOfUsePage = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">Terms of Use</h1>
      
      <section className="page-section">
        <h2 className="section-title">Terms and Conditions</h2>
        <p className="section-content">
          Please read these terms carefully before using our platforms and services.
          By accessing or using SUFFIER, you agree to be bound by these terms.
        </p>
      </section>
    </div>
  );
};

export default TermsOfUsePage;