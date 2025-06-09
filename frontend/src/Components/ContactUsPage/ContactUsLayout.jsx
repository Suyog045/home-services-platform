import React, { useState } from 'react';
import { MdEmail, MdPhone } from 'react-icons/md';
import { FaMapMarkerAlt } from 'react-icons/fa';

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
       
        <div style={{ flex: 1, marginRight: 32 }}>
          <div style={{ fontWeight: 600, fontSize: 18, marginBottom: 8 }}>
            We are always ready to help you and answer your questions
          </div>
          <div style={{
            width: 40,
            height: 4,
            background: '#ff9800',
            marginBottom: 24
          }} />
         
          <div style={{ marginBottom: 24, fontSize: 15 }}>
            <div style={{ marginBottom: 8, display: 'flex', alignItems: 'center', gap: 8 }}>
              <MdEmail size={22} color="#05203c" />
              <span><span style={{ fontWeight: 500 }}>Email:</span> support@homeservices.com</span>
            </div>
            <div style={{ marginBottom: 8, display: 'flex', alignItems: 'center', gap: 8 }}>
              <MdPhone size={22} color="#05203c" />
              <span><span style={{ fontWeight: 500 }}>Phone:</span> +91 98765 43210</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <FaMapMarkerAlt size={20} color="#05203c" />
              <span><span style={{ fontWeight: 500 }}>Address:</span> Hinjawadi Phase 2, Pune, Maharashtra 411057</span>
            </div>
          </div>
          
          <img
            src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=400&q=80"
            alt="Contact Us"
            style={{
              width: 220,
              height: 160,
              objectFit: 'cover',
              borderRadius: 4,
              marginBottom: 8
            }}
          />
        </div>

        
        <div style={{
          flex: 1,
          minWidth: 320,
          background: '#f9f9f9',
          padding: 24,
          borderRadius: 8,
          boxShadow: '0 2px 8px #0001'
        }}>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: 12 }}>
              <label>Name:</label><br />
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                style={{ width: '100%', padding: 8, borderRadius: 4, border: '1px solid #ccc' }}
              />
            </div>
            <div style={{ marginBottom: 12 }}>
              <label>Email:</label><br />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                style={{ width: '100%', padding: 8, borderRadius: 4, border: '1px solid #ccc' }}
              />
            </div>
            <div style={{ marginBottom: 12 }}>
              <label>Subject:</label><br />
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                style={{ width: '100%', padding: 8, borderRadius: 4, border: '1px solid #ccc' }}
              />
            </div>
            <div style={{ marginBottom: 12 }}>
              <label>Message:</label><br />
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                style={{ width: '100%', padding: 8, borderRadius: 4, border: '1px solid #ccc' }}
              />
            </div>
            {error && <div style={{ color: 'red', marginBottom: 12 }}>{error}</div>}
            {success && <div style={{ color: 'green', marginBottom: 12 }}>{success}</div>}
            <button type="submit" style={{
              padding: '8px 24px',
              background: '#05203c',
              color: '#fff',
              border: 'none',
              borderRadius: 4,
              fontWeight: 600,
              cursor: 'pointer'
            }}>Send</button>
          </form>
        </div>
      </div>

      
      <div style={{
        background: '#ddd',
        height: 300,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 600,
        fontSize: 18,
        marginTop: 24,
        borderRadius: 8,
        overflow: 'hidden'
      }}>
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.825800574559!2d73.7336390752036!3d18.59127108253292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b8e7e2e8e8e9%3A0x8e8e8e8e8e8e8e8e!2sHinjawadi%20Phase%202%2C%20Hinjawadi%2C%20Pimpri-Chinchwad%2C%20Maharashtra%20411057!5e0!3m2!1sen!2sin!4v1717930000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUsLayout;