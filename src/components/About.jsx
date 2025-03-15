import React, { useState, useEffect } from 'react';
import AboutImg from '../assets/About.png';
import { FaChevronRight } from 'react-icons/fa';

const skills = [
  { name: "Java", percentage: 50 },
  { name: "SQL", percentage: 50 },
  { name: "MongoDB", percentage: 50 },
  { name: "Data Structures", percentage: 50 },
  { name: "GitHub", percentage: 80 }
];

const About = () => {
  const [progress, setProgress] = useState({});

  useEffect(() => {
    // Animate progress bars when the component mounts
    const timeout = setTimeout(() => {
      const newProgress = {};
      skills.forEach(skill => {
        newProgress[skill.name] = skill.percentage;
      });
      setProgress(newProgress);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  const handleEmailClick = () => {
    const email = "vikneshr2710@gmail.com"; 
    const subject = "Let's Connect"; 
    const body = "Hello Viknesh, I'd like to get in touch with you."; 
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div id='about' className='py-20 bg-gray-900 z-50 text-gray-300'>
      <div className='max-w-7xl mx-auto px-4'>
        <h2 className='text-4xl md:text-5xl font-bold mb-11 text-center'>About Me</h2>
        <div className='flex flex-col md:flex-row gap-20 items-center'>
          {/* Image Section */}
          <div className='relative border hidden md:block border-blue-600 p-1 rounded-full bg-blue-500 shadow-lg shadow-blue-500'>
            <img src={AboutImg} alt="Profile" className='w-[300px] md:w-[1500px] rounded-full border-blue-600 border shadow-blue-500'/>
          </div>

          {/* Info Section */}
          <div className='p-5 md:p-10 bg-gray-950 rounded-md shadow-lg shadow-blue-500'>
            <p className='text-lg leading-7 mb-6'>
              Hi! I'm Viknesh, a passionate Java Developer with a strong foundation in data structures and backend technologies.
              I specialize in SQL, MongoDB, and React, enabling me to create robust, scalable applications.
            </p>
            <p className='text-lg leading-7 mb-6'>
              With a problem-solving mindset and a drive to learn, I aim to build efficient systems that deliver seamless user experiences.
              My dedication to software development keeps me constantly updated with the latest technologies.
            </p>
            <p className='text-lg leading-7'>
              I’m excited to contribute to impactful projects and collaborate with like-minded individuals to create innovative solutions.
            </p>

            {/* Skills Progress Bars */}
            <div className='mt-8'>
              <h1 className='font-bold text-2xl mb-5 text-blue-400'>My Skills</h1>
              <div className='space-y-4'>
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className='flex justify-between'>
                      <p className='text-gray-300'>{skill.name}</p>
                      <p className='text-gray-400'>{progress[skill.name] || 0}%</p>
                    </div>
                    <div className='w-full bg-gray-800 h-2 rounded-full overflow-hidden'>
                      <div
                        className='h-2 bg-blue-500 rounded-full transition-all duration-1000 ease-in-out'
                        style={{ width: `${progress[skill.name] || 0}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Button */}
            <div className='mt-8'>
              <button 
                onClick={handleEmailClick} 
                className='px-4 py-2 rounded-md bg-blue-500 text-white flex items-center gap-2 hover:bg-blue-600 transition'
              >
                Contact <FaChevronRight />
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
