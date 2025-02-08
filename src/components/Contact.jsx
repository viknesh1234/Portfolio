import { FaGithub, FaHackerrank, FaLinkedin } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-950 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center text-gray-300 mb-12">Contact Me</h2>
        <div className="flex flex-col justify-center space-y-8 text-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-300">Let's Talk</h1>
            <p className="text-gray-300 my-5">
              Feel free to reach out via email, and I’ll get back to you promptly. Let’s create something amazing together!
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
            <div className="flex gap-3 justify-center text-2xl transition-all mt-5">
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
      </div>
    </section>
  );
};

export default Contact;
