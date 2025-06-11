import { Button } from 'flowbite-react';
import React from 'react';

const ContactForm = ({ form, handleChange, handleSubmit, error, success }) => (
  <div className="flex p-24 rounded shadow-2xl"  >
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
      <Button className="bg-secondary rounded-4xl hover:bg-secondary cursor-pointer text-nowrap text-md transition-all duration-300 hover:scale-105 gap-1 hover:gap-2 ">
        Send 
      </Button>
    </form>
  </div>
);

export default ContactForm;