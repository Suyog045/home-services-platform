import React from 'react';
import { MdEmail, MdPhone } from 'react-icons/md';
import { FaMapMarkerAlt } from 'react-icons/fa';

const ContactInfo = () => (
  <div style={{ flex: 1, marginRight: 32 }}>
    <div style={{ fontWeight: 600, fontSize: 25, marginBottom: 8 }}>
      We are always ready to help you and answer your questions
    </div>
    <div style={{
      width: 40,
      height: 4,
      background: '#0000FF',
      marginBottom: 24
    }} />
    <div style={{ marginBottom: 24, fontSize: 15 }}>
      <div style={{ marginBottom: 8, display: 'flex', alignItems: 'center', gap: 8 }}>
        <MdEmail size={22} color="#05203c" />
        <span><span style={{ fontWeight: 500 }}>Email:</span> support@homeservices.com</span>
      </div>
      <div style={{ marginBottom: 8, display: 'flex', alignItems: 'center', gap: 8 }}>
        <MdPhone size={22} color="#05203c" />
        <span><span style={{ fontWeight: 500 }}>Phone:</span> +91 1234567890</span>
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
);

export default ContactInfo;