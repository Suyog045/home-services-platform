import React from "react";

const ContactMap = () => (
  <div className="bg-gray-200 h-[300px] flex items-center justify-center font-semibold text-lg mt-6 rounded-lg overflow-hidden">
    <iframe
      title="Google Map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3422.214404938713!2d73.70315507465375!3d18.588909767084207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bb7d0345f01f%3A0x6e8c20c647a06f47!2sSunbeam%20Infotech%20Private%20Limited!5e1!3m2!1sen!2sin!4v1749650558811!5m2!1sen!2sin"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
);

export default ContactMap;
