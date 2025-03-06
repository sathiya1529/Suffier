// pages/ContactPage.jsx
import React from 'react';
import './PageStyles.css';

const ContactPage = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">Contact Us</h1>
      
      <section className="page-section">
        <h2 className="section-title">Get in Touch</h2>
        <p className="section-content">
          We'd love to hear from you. Please use the contact form below or reach out
          to us through the provided contact information.
        </p>
      </section>
    </div>
  );
};

export default ContactPage;
