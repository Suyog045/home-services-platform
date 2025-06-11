import React, { useState } from 'react';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';
import ContactMap from './ContactMap';

const ContactUsLayout = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
    setSuccess('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.subject || !form.message) {
      setError('Please fill in all fields.');
      return;
    }
    setSuccess('Thank you for contacting us! We will get back to you soon.');
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div style={{ background: '#fff', minHeight: '100vh' }}>
      <div style={{
        background: '#05203c',
        color: '#fff',
        padding: '24px 0',
        textAlign: 'center',
        fontSize: 28,
        fontWeight: 600,
        letterSpacing: 1,
        borderRadius: '0 0 4px 4px'
      }}>
        Contact Us
      </div>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        padding: '40px 32px 32px 32px',
        maxWidth: 900,
        margin: '0 auto'
      }}>
        <ContactInfo />
        <ContactForm
          form={form}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          error={error}
          success={success}
        />
      </div>
      <ContactMap />
    </div>
  );
};

export default ContactUsLayout;