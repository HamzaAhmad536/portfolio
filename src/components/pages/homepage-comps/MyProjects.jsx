import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { ModalInfo } from "../../ModalInfo";
import { projects } from '../AllProjects-comps/AllProjects';

const MyProjects = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [SelectedProject, setSelectedProject] = useState({});

  const handleModalInfo = (project) => {
    setModalIsOpen(true);
    setSelectedProject(project);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <section
      name="Projects"
      className="relative w-full text-white my-16"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="mb-4">
          <h2 className="text-4xl font-bold inline border-b-4 border-primary-color/40 sm:text-5xl pb-1">
            Projects
          </h2>
          <p className="py-6">Check out some of my work here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mb-6">
          {projects.map((project, idx) => (
            <div key={idx} className="shadow-md shadow-gray-600 rounded-lg max-w-md mx-auto flex flex-col h-full">
              <img
                onClick={() => handleModalInfo(project)}
                src={project.image}
                alt={project.title}
                className="rounded-md duration-200 hover:scale-105 cursor-pointer h-48 object-cover"
              />
              <div className="flex-1 flex flex-col justify-between p-4">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-2">{project.description}</p>
                <div className="mb-2">
                  <span className="font-semibold text-primary-color">Tech:</span> {project.tech.join(', ')}
                </div>
                <div className="mb-2">
                  <span className="font-semibold text-primary-color">Category:</span> {project.category}
                </div>
                <div className="flex gap-2 mt-2">
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="w-1/2 px-4 py-2 bg-gradient-to-t from-green-400 to-primary-color rounded text-black font-semibold text-center hover:scale-105 duration-200">Live</a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="w-1/2 px-4 py-2 bg-gradient-to-t from-primary-color to-green-400 rounded text-black font-semibold text-center hover:scale-105 duration-200">Code</a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-end mr-4">
          <Link
            to="projects"
            className="hover:underline hover:underline-offset-4 hover:text-primary-color/60 cursor-pointer text-gray-300 flex items-center"
          >
            See more projects
            <MdOutlineKeyboardArrowRight size={20} />
          </Link>
        </div>
      </div>

      <ScrollLink
        to="Technologies"
        smooth
        duration={500}
        className="absolute bottom-2 -left-full md:left-1/2 md:-translate-x-1/2 cursor-pointer hover:text-primary-color"
      >
        <i className="bx bx-chevron-down text-7xl text-gray-400 animate-bounce font hover:text-primary-color"></i>
      </ScrollLink>

      {modalIsOpen && (
        <ModalInfo SelectedProject={SelectedProject} closeModal={closeModal} />
      )}
    </section>
  );
};

export default MyProjects;
