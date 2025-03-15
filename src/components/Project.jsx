import React from 'react'
import Digital from '../assets/Digital.png'
import Nike from '../assets/Nike.png'
import Clothify from '../assets/Clothify.png'
import { FaGithub } from 'react-icons/fa'

const Project = () => {
    const projects = [
        {
          title: "ObstacleAvoidanceRobot",
          description:
          "An Arduino-based obstacle-avoiding robot project using C++ with ultrasonic sensors, servo motors, and Bluetooth/voice control integration.",
          techStack: [" C++ "],
          //link: "https://business420.netlify.app/",
          github: 'https://github.com/viknesh1234/ObstacleAvoidanceRobot',
          image: Digital, // Replace with your project screenshot
        },
        {
          title: "Irrigation System",
          description:
            "Irrigation system automation using Arduino and LCD display to monitor soil moisture and control the water pump.",
          techStack: [" C++"],
          //link: "https://github.com/viknesh1234/Irrigation-System",
          github: 'https://github.com/viknesh1234/Irrigation-System',
          image: Nike, // Replace with your project screenshot
        },
        {
          title: "Transcoder",
          description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea accusantium impedit facere. Sequi, deserunt recusandae.",
          techStack: ["Next.js", "MongoDB", "Clerk Authentication"],
        //  link: "https://clothify-two.vercel.app/",
          github: 'https://github.com/rohitsingh93300/YT-Clothify',
          image: Clothify, // Replace with your project screenshot
        },
      ];
  return (
    <section id='project' className='bg-gradient-to-r bg-gray-900 py-16 px-6'>
      <div className='max-w-7xl mx-auto'>
        <h2 className='text-5xl font-bold text-center text-gray-300 mb-12'>Projects</h2>
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-10'>
            {projects.map((project, index) => (
                <div key={index} className='bg-gray-950 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105'>
                    <img src={project.image} alt={project.title} className='w-full h-48 object-cover px-3 pt-3 rounded-2xl'/>
                    <div className='p-6'>
                        <h3 className='text-2xl font-semibold text-gray-300 mb-2'>{project.title}</h3>
                        <p className='text-gray-300 mb-4'>{project.description}</p>
                        <div className='flex flex-wrap gap-2 mb-4'>
                            {project.techStack.map((tech, idx) => (
                                <div key={idx} className='bg-gray-900 text-gray-300 text-sm font-medium px-3 py-1 rounded-full'>{tech}</div>
                            ))}
                        </div>
                        <div className='flex gap-3'>
                           
                            <a href={project.github} target='_blank' rel='noopener noreferrer' className='flex gap-2 items-center bg-gray-800 text-white px-6 py-2 rounded-lg shadow-md hover:bg-gray-900 transition-colors'><FaGithub/> Github</a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  )
}

export default Project
