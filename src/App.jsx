import React, { useRef, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import * as THREE from 'three';
import { Mail, Phone, MapPin, Github, ExternalLink, Send, Code, Palette, Zap, Menu, X } from 'lucide-react';

import jsLogo from './assets/images/js-removebg-preview.png';
import reactLogo from './assets/images/react-removebg-preview.png';
import cssLogo from './assets/images/css-removebg-preview.png';
import htmlLogo from './assets/images/html-removebg-preview.png';
import javaLogo from './assets/images/java-removebg-preview.png';
import cppLogo from './assets/images/cplusplus-removebg-preview.png';
import sqlLogo from './assets/images/sql-removebg-preview.png';
import gitLogo from './assets/images/git-removebg-preview.png';
import logoImg from './assets/images/logo.png';

import img1 from '../src/assets/images/project1.jpg'
import img2 from '../src/assets/images/project2.jpg'
import img3 from '../src/assets/images/project3.jpg'
import img4 from '../src/assets/images/project4.jpg'

const BASE_PATH = '/portfolio';

const StylishHeading = ({ children }) => (
  <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-12 bg-gradient-to-r from-primary-400 via-accent-indigo to-primary-600 bg-clip-text text-transparent drop-shadow-[0_2px_16px_rgba(59,114,246,0.25)]" style={{ textShadow: '0 2px 24px #3b72f6, 0 1px 0 #fff' }}>
    {children}
  </h2>
);

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const heroRef = useRef();
  const location = useLocation();
  const navigate = useNavigate();

  // Add location dependency to useEffect to reinitialize 3D scene when location changes
  useEffect(() => {
    // Only initialize if we're on the home page
    if (location.pathname !== '/home' && location.pathname !== '/') return;
    
    if (!heroRef.current) return;

    // Clean up any previous renderers
    while (heroRef.current.firstChild) {
      heroRef.current.removeChild(heroRef.current.firstChild);
    }

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(70, heroRef.current.offsetWidth / heroRef.current.offsetHeight, 0.1, 100);
    camera.position.z = 8;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(heroRef.current.offsetWidth, heroRef.current.offsetHeight);
    renderer.setClearColor(0x000000, 0);
    heroRef.current.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);
    const pointLight = new THREE.PointLight(0xffffff, 1.2, 100);
    pointLight.position.set(0, 0, 10);
    scene.add(pointLight);

    // Create floating objects (spheres and cubes, spaced out, with unique movement)
    const geometries = [
      new THREE.SphereGeometry(0.35, 32, 32),
      new THREE.BoxGeometry(0.5, 0.5, 0.5)
    ];
    const colors = [
      0x3b82f6, // blue
      0x64748b, // slate
      0x6e9afb, // light blue
      0x2dd4bf, // teal
      0xf59e42, // orange
      0x8b5cf6, // purple
      0xff4c60, // pink
      0x43e97b, // green
      0xffe156, // yellow
      0x00c3ff, // cyan
      0xff7eb3, // magenta
      0xffb347  // gold
    ];
    const meshes = [];
    const numShapes = 12;
    for (let i = 0; i < numShapes; i++) {
      const geometry = geometries[Math.floor(Math.random() * geometries.length)];
      const color = colors[Math.floor(Math.random() * colors.length)];
      const material = new THREE.MeshStandardMaterial({ color, transparent: true, opacity: 0.45, metalness: 0.7, roughness: 0.3 });
      const mesh = new THREE.Mesh(geometry, material);
      // Space out more: larger range
      mesh.position.x = (Math.random() - 0.5) * 16;
      mesh.position.y = (Math.random() - 0.5) * 12;
      mesh.position.z = (Math.random() - 0.5) * 12;
      mesh.rotation.x = Math.random() * Math.PI;
      mesh.rotation.y = Math.random() * Math.PI;
      // Store a unique movement pattern for each mesh
      mesh.userData = {
        movementType: i % 3 === 0 ? 'circle' : (i % 3 === 1 ? 'wave' : 'float'),
        baseX: mesh.position.x,
        baseY: mesh.position.y,
        baseZ: mesh.position.z,
        speed: 0.5 + Math.random() * 1.2,
        radius: 1 + Math.random() * 2
      };
      scene.add(mesh);
      meshes.push(mesh);
    }

    // Animation loop with unique movement
    let animationId;
    const animate = () => {
      const t = Date.now() * 0.001;
      meshes.forEach((mesh, idx) => {
        const { movementType, baseX, baseY, baseZ, speed, radius } = mesh.userData;
        if (movementType === 'circle') {
          mesh.position.x = baseX + Math.cos(t * speed + idx) * radius;
          mesh.position.z = baseZ + Math.sin(t * speed + idx) * radius;
        } else if (movementType === 'wave') {
          mesh.position.y = baseY + Math.sin(t * speed + idx) * radius * 0.5;
          mesh.position.x = baseX + Math.sin(t * speed * 0.5 + idx) * radius * 0.3;
        } else {
          mesh.position.y = baseY + Math.sin(t * speed + idx) * 0.5;
        }
        mesh.rotation.x += 0.002 + idx * 0.0001;
        mesh.rotation.y += 0.002 + idx * 0.0001;
      });
      renderer.render(scene, camera);
      animationId = requestAnimationFrame(animate);
    };
    animate();

    // Responsive resize
    const handleResize = () => {
      if (!heroRef.current) return;
      const width = heroRef.current.offsetWidth;
      const height = heroRef.current.offsetHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (heroRef.current && heroRef.current.contains(renderer.domElement)) {
        heroRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
      cancelAnimationFrame(animationId);
    };
  }, [location]); // Add location as dependency

  // Animated Counter
  const AnimatedCounter = ({ end, duration = 2000 }) => {
    const [count, setCount] = React.useState(0);
    React.useEffect(() => {
      let startTime;
      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = (currentTime - startTime) / duration;
        if (progress < 1) {
          setCount(Math.floor(end * progress));
          requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };
      requestAnimationFrame(animate);
    }, [end, duration]);
    return <span>{count}</span>;
  };

  const projects = [
    {
      title: "Driver Drowsiness Detection System",
      description: "A machine learning & computer vision–based project that alerts the driver when drowsiness is detected using advanced AI algorithms.",
      tech: ["Python", "OpenCV", "Machine Learning", "Computer Vision"],
      github: "https://github.com/HamzaAhmad536/Driver-Drowsiness-System.git",
      image: img1,
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

  const skills = [
    { name: "JavaScript", img: jsLogo, alt: "JavaScript logo" },
    { name: "React", img: reactLogo, alt: "React logo" },
    { name: "CSS/SCSS", img: cssLogo, alt: "CSS/SCSS logo" },
    { name: "HTML", img: htmlLogo, alt: "HTML logo" },
    { name: "Java", img: javaLogo, alt: "Java logo" },
    { name: "C++", img: cppLogo, alt: "C++ logo" },
    { name: "MySQL", img: sqlLogo, alt: "MySQL logo" },
    { name: "Git", img: gitLogo, alt: "Git logo" }
  ];

  const HomePage = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 overflow-hidden animate-fade-in-up">
      <section className="relative min-h-screen flex items-center justify-center animate-slide-in-left">
        <div ref={heroRef} className="absolute inset-0 z-0 overflow-hidden"></div>
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto animate-fade-in-up">
          <div className="animate-scale-in">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold bg-gradient-to-r from-primary-400 via-accent-indigo to-primary-600 bg-clip-text text-transparent mb-6 animate-pulse drop-shadow-[0_2px_16px_rgba(59,114,246,0.25)]" style={{ textShadow: '0 2px 24px #3b72f6, 0 1px 0 #fff' }}>
              Hamza Ahmad
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-neutral-200 mb-8 animate-fade-in-up animation-delay-300">
              Frontend Developer & UI/UX Enthusiast
            </p>
            <p className="text-base md:text-lg text-neutral-300 mb-12 max-w-3xl mx-auto animate-fade-in-up animation-delay-600">
              An ambitious Computer Science undergraduate crafting beautiful, interactive web experiences 
              with modern technologies and innovative design solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-12 animate-fade-in-up animation-delay-900">
              <div className="glass-effect rounded-2xl px-6 py-4 border border-primary-300/20 hover:scale-105 transition-all duration-300">
                <span className="text-primary-300 font-semibold text-lg">20+ Projects</span>
              </div>
              <div className="glass-effect rounded-2xl px-6 py-4 border border-secondary-300/20 hover:scale-105 transition-all duration-300">
                <span className="text-secondary-300 font-semibold text-lg">8+ Skills</span>
              </div>
              <div className="glass-effect rounded-2xl px-6 py-4 border border-accent-slate/20 hover:scale-105 transition-all duration-300">
                <span className="text-accent-slate font-semibold text-lg">3+ Years</span>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up animation-delay-1200">
              <button
                className="bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white px-8 py-4 rounded-2xl font-semibold transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl animate-scale-in focus:outline-none focus:ring-2 focus:ring-primary-400"
                onClick={() => navigate('/projects')}
              >
                View My Work
              </button>
              <button
                className="border-2 border-accent-slate/50 hover:border-accent-slate text-white px-8 py-4 rounded-2xl font-semibold transform hover:scale-105 transition-all duration-300 glass-effect hover:bg-accent-slate/10 focus:outline-none focus:ring-2 focus:ring-accent-slate"
                onClick={() => navigate('/contact')}
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-primary-400/30 to-secondary-400/30 rounded-full animate-float blur-sm"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-gradient-to-r from-accent-slate/30 to-accent-gray/30 rounded-full animate-float animation-delay-1000 blur-sm"></div>
        <div className="absolute top-1/2 left-20 w-12 h-12 bg-gradient-to-r from-secondary-400/30 to-accent-zinc/30 rounded-full animate-float animation-delay-2000 blur-sm"></div>
        <div className="absolute top-32 right-32 w-10 h-10 bg-gradient-to-r from-accent-gray/30 to-primary-400/30 rounded-full animate-float animation-delay-500 blur-sm"></div>
      </section>
      <section className="py-16 px-4 bg-gradient-to-b from-transparent to-black/10">
        <div className="max-w-6xl mx-auto">
          <StylishHeading>Technical Skills</StylishHeading>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="group glass-effect rounded-2xl p-6 md:p-8 border border-white/10 hover:border-primary-300/30 transition-all duration-300 transform hover:scale-105 hover:rotate-1 shadow-xl hover:shadow-2xl flex flex-col items-center justify-center"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-[110px] h-[110px] flex items-center justify-center mb-3 md:mb-4">
                  <img src={skill.img} alt={skill.alt} width={110} height={110} style={{ objectFit: 'contain', display: 'block' }} />
                </div>
                <h3 className="text-base md:text-lg font-bold text-white text-center group-hover:text-primary-300 transition-colors duration-300">
                  {skill.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div className="group glass-effect rounded-3xl p-6 md:p-8 border border-primary-300/20 hover:border-primary-300/40 transition-all duration-300 transform hover:scale-105 hover:-rotate-1 shadow-xl">
            <Code className="w-12 h-12 md:w-14 md:h-14 text-primary-400 mb-6 group-hover:text-primary-300 group-hover:scale-110 transition-all duration-300" />
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-primary-200 transition-colors">Clean Code</h3>
            <p className="text-neutral-300 leading-relaxed">Writing maintainable, scalable, and efficient code following industry best practices and modern development standards.</p>
          </div>
          
          <div className="group glass-effect rounded-3xl p-6 md:p-8 border border-secondary-300/20 hover:border-secondary-300/40 transition-all duration-300 transform hover:scale-105 hover:rotate-1 shadow-xl">
            <Palette className="w-12 h-12 md:w-14 md:h-14 text-secondary-400 mb-6 group-hover:text-secondary-300 group-hover:scale-110 transition-all duration-300" />
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-secondary-200 transition-colors">UI/UX Design</h3>
            <p className="text-neutral-300 leading-relaxed">Creating beautiful, intuitive interfaces that provide exceptional user experiences with attention to detail and accessibility.</p>
          </div>
          
          <div className="group glass-effect rounded-3xl p-6 md:p-8 border border-accent-slate/20 hover:border-accent-slate/40 transition-all duration-300 transform hover:scale-105 hover:-rotate-1 shadow-xl">
            <Zap className="w-12 h-12 md:w-14 md:h-14 text-accent-slate mb-6 group-hover:text-accent-slate group-hover:scale-110 transition-all duration-300" />
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-accent-slate transition-colors">Performance</h3>
            <p className="text-neutral-300 leading-relaxed">Optimizing applications for lightning-fast speed, efficiency, and seamless user interactions across all devices.</p>
          </div>
        </div>
      </section>
    </div>
  );

  const ProjectsPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 py-20 px-4 animate-fade-in-up">
      <div className="max-w-7xl mx-auto">
        <StylishHeading>My Projects</StylishHeading>
        <p className="text-lg md:text-xl text-neutral-200 text-center mb-16 max-w-3xl mx-auto">
          A showcase of my latest work in web development, featuring innovative solutions and cutting-edge technologies.
        </p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-10">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group glass-effect rounded-3xl overflow-hidden border border-white/10 hover:border-primary-300/30 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl animate-scale-in w-[300px] flex flex-col"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 object-contain group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-2 right-2 glass-effect px-2 py-1 rounded-full text-white text-xs font-bold shadow-lg">
                  {project.category}
                </div>
              </div>
              
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary-200 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-neutral-300 mb-3 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="glass-effect text-accent-slate px-2 py-0.5 rounded-full text-xs border border-accent-slate/30 hover:border-accent-slate/50 transition-colors duration-300 hover:bg-accent-slate/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex flex-row gap-2 mt-auto pt-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 glass-effect hover:bg-neutral-700/50 text-white px-3 py-1.5 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg text-sm font-semibold"
                    >
                      <Github className="w-4 h-4" />
                      View Code
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white px-3 py-1.5 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg text-sm font-semibold"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const ContactPage = () => {
    const [formData, setFormData] = React.useState({ name: '', email: '', subject: '', message: '' });
    const handleSubmit = (e) => {
      e.preventDefault();
      alert('Thank you for your message! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    };
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    };
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4 animate-fade-in-up">
        <div className="max-w-6xl mx-auto">
          <StylishHeading>Let's Work Together</StylishHeading>
          <p className="text-lg md:text-xl text-neutral-300 text-center mb-16 max-w-3xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            <div className="space-y-6 md:space-y-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 md:mb-8">Get In Touch</h2>
              
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-center gap-4 p-4 glass-effect rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
                  <Mail className="w-5 h-5 md:w-6 md:h-6 text-primary-400" />
                  <div>
                    <p className="text-neutral-400 text-sm">Email</p>
                    <p className="text-white font-semibold">hamzaahmad2003@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 glass-effect rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
                  <Phone className="w-5 h-5 md:w-6 md:h-6 text-secondary-400" />
                  <div>
                    <p className="text-neutral-400 text-sm">Phone</p>
                    <p className="text-white font-semibold">0326-4140389 | 0321-8444183</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 glass-effect rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
                  <MapPin className="w-5 h-5 md:w-6 md:h-6 text-accent-slate" />
                  <div>
                    <p className="text-neutral-400 text-sm">Location</p>
                    <p className="text-white font-semibold">Lahore, Pakistan</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 md:mt-12">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-6">Why Choose Me?</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-3 glass-effect rounded-lg hover:scale-105 transition-all duration-300">
                    <div className="w-3 h-3 bg-primary-400 rounded-full animate-pulse"></div>
                    <div>
                      <p className="text-white font-semibold">Responsive & Modern Design</p>
                      <p className="text-neutral-400 text-sm">Pixel-perfect designs that work flawlessly on all devices</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-3 glass-effect rounded-lg hover:scale-105 transition-all duration-300">
                    <div className="w-3 h-3 bg-secondary-400 rounded-full animate-pulse animation-delay-500"></div>
                    <div>
                      <p className="text-white font-semibold">Clean & Maintainable Code</p>
                      <p className="text-neutral-400 text-sm">Well-structured, documented code that's easy to maintain</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-3 glass-effect rounded-lg hover:scale-105 transition-all duration-300">
                    <div className="w-3 h-3 bg-accent-slate rounded-full animate-pulse animation-delay-1000"></div>
                    <div>
                      <p className="text-white font-semibold">Fast Delivery & Communication</p>
                      <p className="text-neutral-400 text-sm">Quick turnaround times with regular updates and clear communication</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-3 glass-effect rounded-lg hover:scale-105 transition-all duration-300">
                    <div className="w-3 h-3 bg-accent-gray rounded-full animate-pulse animation-delay-1500"></div>
                    <div>
                      <p className="text-white font-semibold">Competitive Pricing</p>
                      <p className="text-neutral-400 text-sm">High-quality work at fair, competitive rates</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6 md:p-8 border border-white/10 shadow-xl" style={{ background: 'rgba(248,250,252,0.12)', backdropFilter: 'blur(16px)' }}>
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div>
                  <label className="block text-white font-semibold mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full glass-effect border border-white/20 rounded-xl px-4 py-3 text-white placeholder-neutral-400 focus:outline-none focus:border-primary-400 focus:bg-white/15 transition-all duration-300 bg-white/10"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full glass-effect border border-white/20 rounded-xl px-4 py-3 text-white placeholder-neutral-400 focus:outline-none focus:border-primary-400 focus:bg-white/15 transition-all duration-300 bg-white/10"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full glass-effect border border-white/20 rounded-xl px-4 py-3 text-white placeholder-neutral-400 focus:outline-none focus:border-primary-400 focus:bg-white/15 transition-all duration-300 bg-white/10"
                    placeholder="Project Discussion"
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full glass-effect border border-white/20 rounded-xl px-4 py-3 text-white placeholder-neutral-400 focus:outline-none focus:border-primary-400 focus:bg-white/15 transition-all duration-300 resize-none bg-white/10"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary-500 to-secondary-600 hover:from-primary-600 hover:to-secondary-700 text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl"
                >
                  <Send className="w-4 h-4 md:w-5 md:h-5" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="font-sans overflow-x-hidden">
      <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/home" className="cursor-pointer flex items-center transform hover:scale-105 transition-all duration-300">
              <img src={logoImg} alt="Logo" className="w-20 h-20 object-contain" />
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link
                to="/home"
                className={`relative overflow-hidden transition-all duration-300 px-4 py-2 rounded-lg group nav-underline-effect ${
                  location.pathname === BASE_PATH + '/home' || location.pathname === BASE_PATH + '/'
                    ? 'text-primary-400 bg-primary-400/10 border border-primary-400/20'
                    : 'text-white hover:text-primary-400'
                }`}
              >
                <span className="relative z-10 transition-transform duration-300 group-hover:translate-y-[-2px]">Home</span>
                {(location.pathname === BASE_PATH + '/home' || location.pathname === BASE_PATH + '/') && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full animate-pulse" />
                )}
              </Link>
              <Link
                to="/projects"
                className={`relative overflow-hidden transition-all duration-300 px-4 py-2 rounded-lg group nav-underline-effect ${
                  location.pathname === BASE_PATH + '/projects'
                    ? 'text-primary-400 bg-primary-400/10 border border-primary-400/20'
                    : 'text-white hover:text-primary-400'
                }`}
              >
                <span className="relative z-10 transition-transform duration-300 group-hover:translate-y-[-2px]">Projects</span>
                {location.pathname === BASE_PATH + '/projects' && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full animate-pulse" />
                )}
              </Link>
              <Link
                to="/contact"
                className={`relative overflow-hidden transition-all duration-300 px-4 py-2 rounded-lg group nav-underline-effect ${
                  location.pathname === BASE_PATH + '/contact'
                    ? 'text-primary-400 bg-primary-400/10 border border-primary-400/20'
                    : 'text-white hover:text-primary-400'
                }`}
              >
                <span className="relative z-10 transition-transform duration-300 group-hover:translate-y-[-2px]">Contact</span>
                {location.pathname === BASE_PATH + '/contact' && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full animate-pulse" />
                )}
              </Link>
            </div>
            <button
              className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 animate-fadeIn" />
              ) : (
                <Menu className="w-6 h-6 animate-fadeIn" />
              )}
            </button>
          </div>
          {isMenuOpen && (
            <div className="md:hidden glass-effect rounded-b-2xl p-4 border-b border-white/10 animate-slideDown">
              <div className="space-y-2">
                <Link
                  to="/home"
                  onClick={() => setIsMenuOpen(false)}
                  className={`block w-full text-left py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                    location.pathname === BASE_PATH + '/home'
                      ? 'text-primary-400 bg-primary-400/10 border border-primary-400/20'
                      : 'text-white hover:text-primary-400 hover:bg-white/5'
                  }`}
                >
                  Home
                </Link>
                <Link
                  to="/projects"
                  onClick={() => setIsMenuOpen(false)}
                  className={`block w-full text-left py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                    location.pathname === BASE_PATH + '/projects'
                      ? 'text-primary-400 bg-primary-400/10 border border-primary-400/20'
                      : 'text-white hover:text-primary-400 hover:bg-white/5'
                  }`}
                >
                  Projects
                </Link>
                <Link
                  to="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className={`block w-full text-left py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                    location.pathname === BASE_PATH + '/contact'
                      ? 'text-primary-400 bg-primary-400/10 border border-primary-400/20'
                      : 'text-white hover:text-primary-400 hover:bg-white/5'
                  }`}
                >
                  Contact
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
      <main className="pt-16">
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>
    </div>
  );
};

const App = () => (
  <BrowserRouter basename="/portfolio">
    <ScrollToTop />
    <Portfolio />
  </BrowserRouter>
);

export default App;
