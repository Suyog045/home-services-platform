import React from 'react';

const ContactForm = ({ form, handleChange, handleSubmit, error, success }) => (
  <div className="flex-1 min-w-[350px] md:min-w-[450px] bg-gray-50 p-6 md:p-8 rounded-lg shadow-lg">
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-gray-700 font-semibold mb-1">Name:</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary"
        />
      </div>
      <div>
        <label className="block text-gray-700 font-semibold mb-1">Email:</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary"
        />
      </div>
      <div>
        <label className="block text-gray-700 font-semibold mb-1">Subject:</label>
        <input
          type="text"
          name="subject"
          value={form.subject}
          onChange={handleChange}
          className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary"
        />
      </div>
      <div>
        <label className="block text-gray-700 font-semibold mb-1">Message:</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={4}
          className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary resize-none"
        />
      </div>
      {error && <div className="text-red-600 font-medium">{error}</div>}
      {success && <div className="text-green-600 font-medium">{success}</div>}
      <button
        type="submit"
        className="px-6 py-2 bg-secondary text-white rounded font-semibold cursor-pointer hover:bg-secondary/90 transition"
      >
        Send
      </button>
    </form>
  </div>
);

export default ContactForm;