import React, { useRef } from 'react';
import { FaGithub, FaHackerrank, FaLinkedin } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_0mzqcye',         // ✅ Your Service ID
        'template_rq8fr2q',        // ✅ Your Template ID
        form.current,
        'h6jDjgYY_Fv6HBoSe'        // ✅ Your Public Key
      )
      .then(
        (result) => {
          alert('✅ Message sent successfully!');
          form.current.reset();
        },
        (error) => {
          console.log('❌ EmailJS error:', error.text);
          alert('❌ Failed to send message. Please try again later.');
        }
      );
  };

  return (
    <section id="contact" className="bg-gray-950 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold text-center text-gray-300 mb-12">Contact Me</h2>

        {/* Contact Info */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-300">Let's Talk</h1>
          <p className="text-gray-300 my-5">
            Feel free to reach out via email or message. Let’s create something amazing together!
          </p>
          <h3 className="text-2xl font-semibold text-gray-300">Email</h3>
          <p className="text-blue-500 mt-1">
            <a href="mailto:vikneshr2710@gmail.com" className="hover:underline">vikneshr2710@gmail.com</a>
          </p>

          <h3 className="text-2xl font-semibold text-gray-300 mt-6">Phone</h3>
          <p className="text-blue-500 mt-1">
            <a href="tel:+919944924920" className="hover:underline">+91 9944 92 4920</a>
          </p>

          <h3 className="text-2xl font-semibold text-gray-300 mt-6">Follow Me</h3>
          <div className="flex gap-4 justify-center mt-4 text-3xl">
            <a href="https://github.com/viknesh1234" target="_blank" rel="noreferrer">
              <FaGithub className="text-blue-400 hover:text-blue-500" />
            </a>
            <a href="https://www.hackerrank.com/profile/vikneshr07" target="_blank" rel="noreferrer">
              <FaHackerrank className="text-green-400 hover:text-green-600" />
            </a>
            <a href="https://www.linkedin.com/in/vikneshr1027/" target="_blank" rel="noreferrer">
              <FaLinkedin className="text-blue-400 hover:text-blue-700" />
            </a>
            <a href="https://leetcode.com/u/vikneshr1027/" target="_blank" rel="noreferrer">
              <FaSquareXTwitter className="text-blue-400 hover:text-blue-600" />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-gray-900 shadow-md rounded-lg p-8 w-full max-w-xl mx-auto"
        >
          <h3 className="text-2xl font-bold mb-6 text-white text-center">Send Me a Message</h3>

          <div className="mb-4">
            <label htmlFor="name" className="block text-white font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-white font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="Your Email"
              className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-white font-medium mb-1">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              required
              rows="4"
              placeholder="Write your message..."
              className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
