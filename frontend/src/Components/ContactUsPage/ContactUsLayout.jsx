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
    <div className="bg-white min-h-screen">
      <div className='bg-primary h-40 w-full flex justify-center items-center' >
        <h2 className='text-white md:text-center md:text-5xl font-semibold'>Contact Us</h2>
      </div>

      <div className="flex flex-row flex-wrap gap-4 p-8 max-w-3xl mx-auto">
        <div className="flex-1 min-w-[320px] md:-ml-6">
          <ContactInfo />
        </div>
        <div className="flex-1 min-w-[320px]">
          <ContactForm
            form={form}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            error={error}
            success={success}
          />
        </div>
      </div>
      <ContactMap />
    </div>
  );
};

export default ContactUsLayout;