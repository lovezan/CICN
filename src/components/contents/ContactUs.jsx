import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_uuprlgf', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
      .then((result) => {
          setStatus('Message sent successfully!');
          setFormData({ name: '', email: '', subject: '', message: '' });
      }, (error) => {
          setStatus('Failed to send message.');
      });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-lg shadow-xl">
        <center>
          <h1 className="text-4xl font-bold text-white mb-6">Contact Us</h1>
        </center>
        <div className="text-gray-300 mb-8">
          <ul className="list-disc pl-5 space-y-6">
            <li className="text-xl font-semibold">
              <p>Contact Persons</p>
            </li>
            <li className="bg-gray-700 p-4 rounded-lg shadow-md transition-transform transform hover:scale-105">
              <p className="text-lg font-semibold mb-2">Dr. Shailendra Singh</p>
              <p className="mb-1">Mob: <a href="tel:+919425011658" className="text-blue-400 hover:underline">+91-9425011658</a></p>
              <p>Email: <a href="mailto:cicnmir@gmail.com" className="text-blue-400 hover:underline">cicnmir@gmail.com</a></p>
            </li>
            <li className="bg-gray-700 p-4 rounded-lg shadow-md transition-transform transform hover:scale-105">
              <p className="text-lg font-semibold mb-2">Dr. Robin Singh</p>
              <p className="mb-1">Mob: <a href="tel:+919329744955" className="text-blue-400 hover:underline">+91-9329744955</a></p>
              <p>Email: <a href="mailto:cicnmir@gmail.com" className="text-blue-400 hover:underline">cicnmir@gmail.com</a></p>
            </li>
          </ul>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-xl border border-gray-700">
          <h2 className="text-2xl font-semibold text-white mb-4">Get in Touch</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-white mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-4 rounded-lg bg-gray-900 text-gray-300 border border-gray-600 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform transform hover:scale-105"
                placeholder="John Doe"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-white mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-4 rounded-lg bg-gray-900 text-gray-300 border border-gray-600 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform transform hover:scale-105"
                placeholder="you@example.com"
                required
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-white mb-2">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full p-4 rounded-lg bg-gray-900 text-gray-300 border border-gray-600 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform transform hover:scale-105"
                placeholder="Subject of your message"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-white mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-4 rounded-lg bg-gray-900 text-gray-300 border border-gray-600 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform transform hover:scale-105"
                placeholder="Your message here..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-red-500 text-white p-3 rounded-lg shadow-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300 transition-transform transform hover:scale-105"
            >
              Submit
            </button>
          </form>
          {status && <p className="mt-4 text-white">{status}</p>}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
