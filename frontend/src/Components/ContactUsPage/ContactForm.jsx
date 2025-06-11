import React from 'react';

const ContactForm = ({ form, handleChange, handleSubmit, error, success }) => (
  <div style={{
    flex: 1,
    minWidth: 450,
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
);

export default ContactForm;