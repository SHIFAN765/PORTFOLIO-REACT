import React, { useState, useEffect, useRef } from 'react'

// ===== DATA =====
const educationData = [
  {
    title: "Diploma Computer Science",
    institution: "Acharya Polytechnic",
    year: "2023 - 2026",
    description: "Specialized in Software Engineering and Web Development. GPA: 9.1/10 (First 4 semesters). Coursework: Data Analytics, Computer Network, Operating System, Database Management System, Project Management System, Data Structures And Algorithms. Participated in various hackathons and coding competitions."
  },
  {
    title: "Higher Secondary Education",
    institution: "Bukhariya Matriculation Higher Secondary School, Tamil Nadu",
    year: "2020 - 2021",
    description: "Completed with distinction in Mathematics and Computer Science. Active member of the school's tech club."
  },
  {
    title: "Online Certifications",
    institution: "Various Platforms",
    year: "2023 - Present",
    description: "Completed certifications in Full Stack Development, Cloud Computing, UI/UX Design, Gen AI Powered Data Analytics And DBMS from platforms like Coursera, Udemy, and Forage."
  }
]

const skillsData = [
  {
    category: "Frontend Development",
    icon: "fa-code",
    skills: [
      { name: "HTML/CSS", level: 95 },
      { name: "JavaScript", level: 90 },
      { name: "React.js", level: 85 },
      { name: "Tailwind CSS", level: 88 }
    ]
  },
  {
    category: "Backend Development",
    icon: "fa-server",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Python", level: 80 },
      { name: "MongoDB", level: 75 },
      { name: "MySQL", level: 78 }
    ]
  },
  {
    category: "Tools & Others",
    icon: "fa-tools",
    skills: [
      { name: "Git & GitHub", level: 90 },
      { name: "Figma", level: 75 },
      { name: "VS Code", level: 95 },
      { name: "Docker", level: 70 }
    ]
  }
]

const projectsData = [
  {
    title: "Cyber Security Dashboard",
    description: "A comprehensive security monitoring dashboard that tracks network vulnerabilities, threat detection, and real-time security alerts with interactive visualizations.",
    icon: "fa-shield-alt",
    tech: ["Python", "React", "MongoDB", "Node.js"],
    github: "https://github.com/SHIFAN765",
    demo: "#"
  },
  {
    title: "Python Development",
    description: "Developed and executed multiple Python programs, including data manipulation, file handling, and automation scripts, demonstrating problem-solving and algorithmic skills.",
    icon: "fa-shopping-cart",
    tech: ["React", "Node.js", "MySQL"],
    github: "https://github.com/SHIFAN765",
    demo: "#"
  },
  {
    title: "SQL And Database Management",
    description: "A collaborative task management application with real-time updates, team collaboration, and progress tracking. Designed and executed SQL queries for data retrieval, updates, and database management in academic projects.",
    icon: "fa-tasks",
    tech: ["JavaScript", "HTML/CSS", "Firebase", "Bootstrap"],
    github: "https://github.com/SHIFAN765",
    demo: "#"
  }
]

const contactData = [
  {
    type: "github",
    icon: "fab fa-github",
    title: "GitHub",
    description: "Check out my repositories",
    link: "https://github.com/SHIFAN765",
    linkText: "View Profile",
    linkIcon: "fab fa-github"
  },
  {
    type: "whatsapp",
    icon: "fab fa-whatsapp",
    title: "WhatsApp",
    description: "Chat with me directly",
    link: "https://wa.me/917812842800",
    linkText: "Message Me",
    linkIcon: "fab fa-whatsapp"
  },
  {
    type: "phone",
    icon: "fas fa-phone-alt",
    title: "Phone",
    description: "Direct via communication",
    link: "tel:+917812842800",
    linkText: "Call Me",
    linkIcon: "fas fa-phone"
  },
  {
    type: "email",
    icon: "fas fa-envelope",
    title: "Email",
    description: "Official communication",
    link: "mailto:shifanmohamed570@gmail.com",
    linkText: "Send Email",
    linkIcon: "fas fa-paper-plane"
  },
  {
    type: "linkedin",
    icon: "fab fa-linkedin",
    title: "LinkedIn",
    description: "Connect professionally",
    link: "https://www.linkedin.com/in/mohamed-shifan-",
    linkText: "Connect",
    linkIcon: "fab fa-linkedin"
  }
]

const socialLinks = [
  { icon: "fab fa-github", link: "https://github.com/SHIFAN765" },
  { icon: "fab fa-linkedin", link: "https://www.linkedin.com/in/mohamed-shifan-" },
  { icon: "fab fa-whatsapp", link: "https://wa.me/917812842800" },
  { icon: "fab fa-twitter", link: "#" },
  { icon: "fab fa-instagram", link: "#" },
  { icon: "fas fa-envelope", link: "mailto:shifanmohamed570@gmail.com" }
]

// ===== COMPONENTS =====

// Background Animation Component
const BackgroundAnimation = () => {
  return (
    <div className="background-animation">
      {[...Array(10)].map((_, index) => (
        <span key={index}></span>
      ))}
    </div>
  )
}

// Navbar Component
const Navbar = ({ theme, toggleTheme, toggleMobileMenu, scrolled }) => {
  const navLinks = ['home', 'about', 'education', 'skills', 'projects', 'contact']

  const scrollToSection = (e, sectionId) => {
    e.preventDefault()
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <nav style={{
      padding: scrolled ? '10px 50px' : '15px 50px',
      boxShadow: scrolled ? '0 5px 20px rgba(0, 0, 0, 0.2)' : 'none'
    }}>
      <div className="logo">Portfolio</div>
      <ul className="nav-links">
        {navLinks.map(link => (
          <li key={link}>
            <a 
              href={`#${link}`}
              onClick={(e) => scrollToSection(e, link)}
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </a>
          </li>
        ))}
        <li>
          <button className="theme-toggle" onClick={toggleTheme}>
            <i className={`fas ${theme === 'dark' ? 'fa-moon' : 'fa-sun'}`}></i>
          </button>
        </li>
      </ul>
      <button className="menu-btn" onClick={toggleMobileMenu}>
        <i className="fas fa-bars"></i>
      </button>
    </nav>
  )
}

// Mobile Menu Component
const MobileMenu = ({ isOpen, closeMenu, theme, toggleTheme }) => {
  const navLinks = ['home', 'about', 'education', 'skills', 'projects', 'contact']
  const menuRef = useRef(null)

  const scrollToSection = (e, sectionId) => {
    e.preventDefault()
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    closeMenu()
  }

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        const menuBtn = document.querySelector('.menu-btn')
        if (menuBtn && !menuBtn.contains(e.target)) {
          closeMenu()
        }
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [closeMenu])

  return (
    <div ref={menuRef} className={`mobile-menu ${isOpen ? 'active' : ''}`}>
      <ul>
        {navLinks.map(link => (
          <li key={link}>
            <a 
              href={`#${link}`}
              onClick={(e) => scrollToSection(e, link)}
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </a>
          </li>
        ))}
        <li>
          <button className="theme-toggle" onClick={toggleTheme}>
            <i className={`fas ${theme === 'dark' ? 'fa-moon' : 'fa-sun'}`}></i>
            <span>{theme === 'dark' ? 'Dark Mode' : 'Light Mode'}</span>
          </button>
        </li>
      </ul>
    </div>
  )
}

// Hero Section Component
const Hero = () => {
  const [imgError, setImgError] = useState(false)

  const scrollToSection = (e, sectionId) => {
    e.preventDefault()
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="hero-image">
          <img 
            src={imgError ? 'https://via.placeholder.com/400x400/1a1a2e/00d9ff?text=MS' : '/profile.jpg'}
            alt="Mohamed Shifan"
            onError={() => setImgError(true)}
          />
        </div>
        <h1>HELLO! I'M <span>Mohamed Shifan</span></h1>
        <p className="tagline">Full Stack Developer | UI/UX Designer | Problem Solver | Cyber Security</p>
        
        <p className="intro-text">
          I'm a disciplined and detail-oriented Diploma in Computer Science student with a strong foundation in software development and web technologies. I have completed professional training in Cyber Security. I'm committed to continuous learning and aim to contribute effectively to technology-driven environments by delivering reliable, scalable, and well-structured solutions.
        </p>
        
        <div className="hero-buttons">
          <a 
            href="#projects" 
            className="btn"
            onClick={(e) => scrollToSection(e, 'projects')}
          >
            View My Work
          </a>
          <a 
            href="#contact" 
            className="btn btn-outline"
            onClick={(e) => scrollToSection(e, 'contact')}
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  )
}

// About Section Component
const About = () => {
  const [imgError, setImgError] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section 
      id="about"
      ref={sectionRef}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.6s ease, transform 0.6s ease'
      }}
    >
      <h2 className="section-title">About Me</h2>
      <div className="about-container">
        <div className="about-image">
          <img 
            src={imgError ? 'https://via.placeholder.com/400x400/1a1a2e/00d9ff?text=MS' : '/profile.jpg'}
            alt="Profile Picture"
            onError={() => setImgError(true)}
          />
        </div>
        <div className="about-text">
          <h3>Hello! I'm Mohamed Shifan</h3>
          <p>
            I'm a Computer Science student at Acharya Polytechnic. 
            I have a passion for technology and have completed courses in Cyber Security, Python, and Java. 
            My skill set includes Python, Java, HTML, CSS, and DBMS. I'm always eager to learn and grow in 
            the field of computer science and look forward to applying my knowledge to real-world projects.
          </p>
          <p>
            When I'm not coding, you can find me exploring new technologies, 
            contributing to open-source projects, or enjoying a good cup of coffee 
            while reading tech blogs.
          </p>
          <a 
            href="https://drive.google.com/file/d/1HphD-xd340FjQpOna7gBmEWD5UvsNsSp/view?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn"
          >
            <i className="fas fa-download"></i> Download CV
          </a>
        </div>
      </div>
    </section>
  )
}

// Education Section Component
const Education = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section 
      id="education"
      ref={sectionRef}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.6s ease, transform 0.6s ease'
      }}
    >
      <h2 className="section-title">Education</h2>
      <div className="education-container">
        {educationData.map((edu, index) => (
          <div className="education-card" key={index}>
            <h3>{edu.title}</h3>
            <h4>{edu.institution}</h4>
            <p className="year">
              <i className="fas fa-calendar-alt"></i> {edu.year}
            </p>
            <p>{edu.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

// Skill Bar Component
const SkillBar = ({ name, level, animate }) => {
  return (
    <div className="skill-item">
      <div className="skill-info">
        <span className="skill-name">{name}</span>
        <span>{level}%</span>
      </div>
      <div className="skill-bar">
        <div 
          className="skill-progress" 
          style={{ width: animate ? `${level}%` : '0%' }}
        />
      </div>
    </div>
  )
}

// Skills Section Component
const Skills = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [animateSkills, setAnimateSkills] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          setTimeout(() => setAnimateSkills(true), 200)
        } else {
          setAnimateSkills(false)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section 
      id="skills"
      ref={sectionRef}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.6s ease, transform 0.6s ease'
      }}
    >
      <h2 className="section-title">My Skills</h2>
      <div className="skills-container">
        {skillsData.map((category, index) => (
          <div className="skill-category" key={index}>
            <h3>
              <i className={`fas ${category.icon}`}></i> {category.category}
            </h3>
            {category.skills.map((skill, skillIndex) => (
              <SkillBar 
                key={skillIndex}
                name={skill.name}
                level={skill.level}
                animate={animateSkills}
              />
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}

// Project Card Component
const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <div className="project-image">
        <i className={`fas ${project.icon}`}></i>
      </div>
      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-tech">
          {project.tech.map((tech, index) => (
            <span key={index}>{tech}</span>
          ))}
        </div>
        <div className="project-links">
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i> Code
          </a>
          <a href={project.demo} target="_blank" rel="noopener noreferrer">
            <i className="fas fa-external-link-alt"></i> Live Demo
          </a>
        </div>
      </div>
    </div>
  )
}

// Projects Section Component
const Projects = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section 
      id="projects"
      ref={sectionRef}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.6s ease, transform 0.6s ease'
      }}
    >
      <h2 className="section-title">My Projects</h2>
      <div className="projects-container">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  )
}

// Contact Card Component
const ContactCard = ({ contact }) => {
  return (
    <div className={`contact-card ${contact.type}`}>
      <i className={contact.icon}></i>
      <h3>{contact.title}</h3>
      <p>{contact.description}</p>
      <a 
        href={contact.link} 
        target={contact.type !== 'phone' ? '_blank' : undefined}
        rel={contact.type !== 'phone' ? 'noopener noreferrer' : undefined}
      >
        <i className={contact.linkIcon}></i> {contact.linkText}
      </a>
    </div>
  )
}

// Contact Section Component
const Contact = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section 
      className="contact-section" 
      id="contact"
      ref={sectionRef}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.6s ease, transform 0.6s ease'
      }}
    >
      <h2 className="section-title">Contact Me</h2>
      <div className="contact-container">
        {contactData.map((contact, index) => (
          <ContactCard key={index} contact={contact} />
        ))}
      </div>
    </section>
  )
}

// Footer Component
const Footer = () => {
  return (
    <footer>
      <div className="social-links">
        {socialLinks.map((social, index) => (
          <a 
            key={index}
            href={social.link} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <i className={social.icon}></i>
          </a>
        ))}
      </div>
      <p>&copy; 2026 Mohamed Shifan. All Rights Reserved.</p>
    </footer>
  )
}

// ===== MAIN APP COMPONENT =====
function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme')
    return savedTheme || 'dark'
  })
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Theme effect
  useEffect(() => {
    if (theme === 'light') {
      document.body.setAttribute('data-theme', 'light')
    } else {
      document.body.removeAttribute('data-theme')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark')
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(prev => !prev)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  return (
    <div className="App">
      <BackgroundAnimation />
      <Navbar 
        theme={theme}
        toggleTheme={toggleTheme}
        toggleMobileMenu={toggleMobileMenu}
        scrolled={scrolled}
      />
      <MobileMenu 
        isOpen={mobileMenuOpen} 
        closeMenu={closeMobileMenu}
        theme={theme}
        toggleTheme={toggleTheme}
      />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
