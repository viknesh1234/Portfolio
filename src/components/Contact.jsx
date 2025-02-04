import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
emailjs.init('YOUR_PUBLIC_KEY');

import { FaGithub, FaHackerrank, FaLinkedin } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';

const Contact = () => {
  const form = useRef();

 const sendEmail = (e) => {
  e.preventDefault(); // Prevent page reload

  if (!form.current) {
    console.error("Form reference is null");
    alert("Form submission failed. Please refresh the page and try again.");
    return;
  }

  emailjs
    .sendForm(
      "service_xxxxxx", // Replace with your actual EmailJS Service ID
      "template_xxxxxx", // Replace with your actual EmailJS Template ID
      form.current,
      "your_public_key" // Replace with your actual EmailJS Public Key
    )
    .then(
      (result) => {
        console.log("Email sent:", result.text);
        alert("Message sent successfully!");
        form.current.reset(); // Reset form after successful submission
      },
      (error) => {
        console.error("Error sending email:", error);
        alert("Failed to send message. Please check your EmailJS settings.");
      }
    );
};


  return (
    <section id="contact" className="bg-gray-950 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center text-gray-300 mb-12">Contact Me</h2>
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="flex flex-col justify-center space-y-8">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-300">Let's Talk</h1>
              <p className="text-gray-300 my-5">
              Feel free to reach out via email or fill out the form below, and I’ll get back to you promptly. Let’s create something amazing together!


              </p>
              <h3 className="text-2xl font-semibold text-gray-300">Email</h3>
              <p className="text-gray-600 mt-2">
                <a href="mailto:vikneshr2710@gmail.com" className="text-blue-500 hover:underline">
                  vikneshr2710@gmail.com
                </a>
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-300">Phone</h3>
              <p className="text-gray-600 mt-2">
                <a href="tel:+919944924920" className="text-blue-500 hover:underline">
                  +91 9944 92 4920
                </a>
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-300">Follow Me</h3>
              <div className="flex gap-3 text-2xl transition-all mt-5">
                <a href="https://github.com/viknesh1234" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="text-blue-400 hover:text-blue-500" />
                </a>
                <a href="https://www.hackerrank.com/profile/vikneshr07" target="_blank" rel="noopener noreferrer">
                  <FaHackerrank className="text-blue-400 hover:text-pink-500" />
                </a>
                <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="text-blue-400 hover:text-blue-700" />
                </a>
                <a href="https://leetcode.com/u/vikneshr1027/" target="_blank" rel="noopener noreferrer">
                  <FaSquareXTwitter className="text-blue-400 hover:text-blue-600" />
                </a>
              </div>
            </div>
          </div>
          {/* Contact Form */}
          <div className="bg-gray-900 rounded-lg shadow-[0px_0px_20px_10px_rgba(0,0,0,0.3)] shadow-blue-500 p-8">
            <h3 className="text-3xl font-semibold text-gray-300 mb-6">Get in Touch</h3>
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="mt-1 w-full p-3 border bg-gray-950 text-gray-300 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="mt-1 w-full p-3 border bg-gray-950 text-gray-300 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={5}
                  className="mt-1 w-full p-3 border bg-gray-950 text-gray-300 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-3 rounded-lg shadow-md hover:bg-blue-600 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
