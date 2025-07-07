import React from 'react'
import { Link } from 'react-router-dom'

// Image imports (replace with actual images if available)
import img1 from '/images/projectsImages/project1.jpg'
import img2 from '/images/projectsImages/project2.jpg'
import img3 from '/images/projectsImages/project3.jpg'
import img4 from '/images/projectsImages/project4.jpg'
import img5 from '/images/projectsImages/project5_1.jpg'
import img6 from '/images/projectsImages/project6.jpg'

export const projects = [
  {
    title: "Driver Drowsiness Detection System",
    description: "A machine learning & computer vision–based project that alerts the driver when drowsiness is detected using advanced AI algorithms.",
    tech: ["Python", "OpenCV", "Machine Learning", "Computer Vision"],
    github: "https://github.com/HamzaAhmad536/Driver-Drowsiness-System.git",
    live: "https://hamzaahmad536.github.io/DriverDrowsiness/",
    image: img1,
    category: "AI/ML"
  },
  {
    title: "Snap to Reuse",
    description: "A smart sustainability web app that uses real-time object detection to suggest creative ways to reuse everyday items. Powered by TensorFlow.js, EcoVision helps you turn trash into treasure through visual recognition and curated DIY ideas.",
    tech: ["TensorFlow", "AI", "ML", "HTML5"],
    github: "https://github.com/affanabid/SnapToReuse.git",
    live: "https://snaptoreuse.netlify.app/",
    image: img6,
    category: "AI/ML"
  },
  {
    title: "AI Chatbot for Halawa Wax",
    description: "An AI-powered chatbot designed to simulate human-like conversations, automate responses, and provide intelligent assistance in real time.",
    tech: ["AI", "FAST API", "ML", "OpenAI" , "React"],
    github: "https://github.com/HamzaAhmad536/chatbot",
    live: "https://hamzaahmad536.github.io/chatbot/",
    image: img5,
    category: "AI/ML"
  },
  {
    title: "Green Yasin",
    description: "A responsive frontend project with stunning UI/UX design, showcasing modern web development practices and clean architecture.",
    tech: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    github: "https://github.com/HamzaAhmad536/GreenYasin",
    live: "https://hamzaahmad536.github.io/GreenYasin/",
    image: img2,
    category: "React"
  },
  {
    title: "Subjectify App",
    description: "A React application that displays PDFs, GitHub repos, and resources based on domain requests with dynamic content rendering.",
    tech: ["React", "JavaScript", "API Integration", "Responsive Design"],
    github: "https://github.com/affanabid/subjectify",
    live: "https://subjectify.vercel.app/",
    image: img3,
    category: "React"
  },
  {
    title: "Pharmacy Management System",
    description: "A comprehensive database management system built with SQL for efficient pharmacy operations and inventory tracking.",
    tech: ["SQL", "Database Design", "MySQL", "Data Management"],
    github: "https://github.com/HamzaAhmad536/Pharmacy-Management-System.git",
    image: img4,
    category: "Database"
  }
];

const AllProjects = () => {
  return (
    <section name="Projects" className='relative w-full text-white md:min-h-screen mt-24 mb-10'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <h2 className='text-4xl font-bold inline border-b-4 border-primary-color/40 sm:text-5xl'>Projects</h2>
          <p className='py-6'>Check out my best web applications here.</p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8'>
          {projects.map((project, idx) => (
            <div key={idx} className='shadow-md shadow-gray-600 rounded-lg max-w-md mx-auto flex flex-col h-full'>
              <img loading='lazy' src={project.image} alt={project.title} className='rounded-md duration-200 hover:scale-105 h-48 object-cover' />
              <div className='flex-1 flex flex-col justify-between p-4'>
                <h3 className='text-xl font-bold mb-2'>{project.title}</h3>
                <p className='text-gray-300 mb-2'>{project.description}</p>
                <div className='mb-2'>
                  <span className='font-semibold text-primary-color'>Tech:</span> {project.tech.join(', ')}
                </div>
                <div className='mb-2'>
                  <span className='font-semibold text-primary-color'>Category:</span> {project.category}
                </div>
                <div className='flex gap-2 mt-2'>
                  {project.live && (
                    <a href={project.live} target='_blank' rel='noopener noreferrer' className='w-1/2 px-4 py-2 bg-gradient-to-t from-green-400 to-primary-color rounded text-black font-semibold text-center hover:scale-105 duration-200'>Live</a>
                  )}
                  {project.github && (
                    <a href={project.github} target='_blank' rel='noopener noreferrer' className='w-1/2 px-4 py-2 bg-gradient-to-t from-primary-color to-green-400 rounded text-black font-semibold text-center hover:scale-105 duration-200'>Code</a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='flex justify-center'>
        <Link to='/' className='text-black font-semibold text-[16px] w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-t from-green-400 to-primary-color cursor-pointer mx-auto md:mx-0 self-end mt-8 hover:scale-110 duration-300'>
          <span className=''><i className='bx bx-home-heart mr-2'></i></span>
          Go back
        </Link>
      </div>
    </section>
  );
}

export default AllProjects
