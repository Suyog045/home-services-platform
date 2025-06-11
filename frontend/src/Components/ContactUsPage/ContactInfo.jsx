import React from 'react';
import { MdEmail, MdPhone } from 'react-icons/md';
import { FaMapMarkerAlt } from 'react-icons/fa';

const ContactInfo = () => (
  <div className="flex-1 mr-8">
    <div className="font-semibold text-2xl mb-2">
      We are always ready to help you and answer your questions
    </div>
    <div className="w-10 h-1 bg-blue-600 mb-6" />
    <div className="mb-6 text-base">
      <div className="mb-2 flex items-center gap-2">
        <MdEmail size={22} color="#05203c" />
        <span>
          <span className="font-medium">Email:</span> support@homeservices.com
        </span>
      </div>
      <div className="mb-2 flex items-center gap-2">
        <MdPhone size={22} color="#05203c" />
        <span>
          <span className="font-medium">Phone:</span> +91 1234567890
        </span>
      </div>
      <div className="flex items-center gap-2">
        <FaMapMarkerAlt size={20} color="#05203c" />
        <span>
          <span className="font-medium">Address:</span> Hinjawadi Phase 2, Pune, Maharashtra 411057
        </span>
      </div>
    </div>
    <img
      src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=400&q=80"
      alt="Contact Us"
      className="w-[220px] h-[160px] object-cover rounded mb-2"
    />
  </div>
);

export default ContactInfo;