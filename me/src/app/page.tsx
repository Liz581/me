"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from 'next/link';
import { groupedExperiences } from "./experiences";
import { groupedLeaderships } from "./leadership";
import { projects } from "./projects";
import { FaLinkedin, FaGithubSquare } from 'react-icons/fa';
import { SiCalendly } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import './globals.css';

// Define the type for each experience
type Experience = {
  company: string;
  position: string;
  dates: string;
  description: string[];
};

type Leadership = {
  role: string;
  organization: string;
  dates: string;
  description: string[];
};

export default function Home() {
  const email = "lissetcrico@gmail.com";
  const [selectedCompany, setSelectedCompany] = useState<string | null>('Break Through Tech Chicago'); // Track selected company, set BTTC as default

  const handleClick = (company: string) => {
    setSelectedCompany((prev) => (prev === company ? null : company)); // Toggle the company details
  };

  const [selectedOrganization, setSelectedOrganization] = useState<string | null>('Society of Hispanic Professional Engineers @ UIC'); // Track selected company, set BTTC as default

  const handleOrgClick = (organization: string) => {
    setSelectedOrganization((prev) => (prev === organization ? null : organization)); // Toggle the company details
  };

  return (
    <div>
      <nav>
        <ul>
          <li><Link href="#home">home</Link></li>
          <li><Link href="#about-me">about me</Link></li>
          <li><Link href="#experiences">experiences</Link></li>
          <li><Link href="#projects">projects</Link></li>
          <li><Link href="#leadership">leadership</Link></li>
          {/* <li><Link href="#awards">awards</Link></li> */}
          <li><Link href="#skills">skills</Link></li>
        </ul>
      </nav>
      
      <section id="home" className="content">
        <div className="front-page">
          <Image
            src="/japan_self_portrait.jpg" // In the public folder
            alt="Your Name"
            width={300}
            height={300}
            className="image"
          />
          <div>
            <h1 className="name">Hi! I&apos;m Lisset Rico</h1>
            <h2 className="profession">Latina in Tech</h2>
            <div className="icons">
              <a href="https://github.com/Liz581" target="_blank" rel="noopener noreferrer">
                <FaGithubSquare size={40} color="#778DA9" />
              </a>
              <a href="https://www.linkedin.com/in/lisset-c-rico-85aa91210/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={40} color="#778DA9" />
              </a>
              <a href="https://calendly.com/lissetcrico" target="_blank" rel="noopener noreferrer">
                <SiCalendly size={38} color="#778DA9" />
              </a>
              <a href={`mailto:${email}`} className="email-link">
                <MdEmail size={40} color="#778DA9" />
                <span className="email-text">{email}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="about-me" className="content">
        <div className="layout">
          <div className="image-column">
          <div className="image-wrapper">
            <Image
              src="/fall_24_snow.jpg"
              alt="Image 2"
              width={300}
              height={300}
              layout="intrinsic"
              objectFit="cover"
            />
            <div className="image-description">a snow day of my last semester at UIC</div>
          </div>
          <div className="image-wrapper">
            <Image
              src="/shpe nintendo 23.jpg"
              alt="Image 2"
              width={300}
              height={300}
              layout="intrinsic"
              objectFit="cover"
            />
            <div className="image-description">met my favorite company at shpe &apos;23</div>
          </div>
          </div>
          
          <div className="text-column">
            <h1 className="title">about me</h1>
            <p>
              I&apos;m Lisset, a latina from Illinois. 
              I graduated from the <b>University of Illinois at Chicago</b> with my <b>Bachelor&apos;s of Science in Computer Science</b> in Fall 2024.
            </p>
            <p>
              I first learned about coding in the AP Computer Science A course offered at my high school my sophomore year.
              I grew up in the suburbs of Illinois away from the tech scene in Chicago so this was my only peek into this possible future for myself.
              What sparked my interest was playing Super Mario 64 and Crash Bandicoot when I was little. I asked my family how games were made and would search for answers with little luck due to not knowing the right terms. 
              That class brought a lot into full circle and from then on it stuck with me.
            </p>
            <p>
              
            </p>
          </div>

          <div className="image-column">
            <div className="image-wrapper">
              <Image
                src="/btt_celebration_photo.jpg"
                alt="Image 2"
                width={300}
                height={300}
                layout="intrinsic"
                objectFit="cover"
              />
              <div className="image-description">attending the BTTC celebration event</div>
            </div>
            <div className="image-wrapper">
              <Image
                src="/tokyo_disney_sea_arms_up.jpg"
                alt="Image 2"
                width={300}
                height={300}
                layout="intrinsic"
                objectFit="cover"
              />
              <div className="image-description">first time at Tokyo Disney Sea</div>
            </div>
          </div>
        </div>
      </section>

      <section id="experiences" className="content">
        <h1 className="title">experiences</h1>

        {/* Left column - Company List */}
        <div className="experience-container">
          <div className="experience-list">
            {Object.keys(groupedExperiences).map((company, index) => (
              <div
                key={index}
                className={`experience-item ${selectedCompany === company ? "active" : ""}`}
                onClick={() => handleClick(company)}
              >
                {company}
              </div>
            ))}
          </div>

          {/* Right column - Details of selected experience */}
          <div className="experience-details">
            {selectedCompany !== null && (
              <div className="details-content">
                {groupedExperiences[selectedCompany].map((experience: Experience, index: number) => (
                  <div key={index}>
                    <h3 className="position">{experience.position}</h3>
                    <h4 className="dates">{experience.dates}</h4>
                    <div className="description">
                      {experience.description.map((sentence, idx) => (
                        <p key={idx}>{sentence}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>


      <section id="projects" className="content">
        <h1 className="title">projects</h1>
        
        <div className="projects-container">
          <div className="projects-list">
            {projects.map((project, index) => (
              <a 
                key={index} 
                href={project.website || '#'} 
                className="project-item" 
                target={project.website ? "_blank" : ""} 
                rel="noopener noreferrer"
              >
                <h2 className="project-title">{project.title}</h2>
                
                {project.description && (
                  <p className="project-description">{project.description}</p>
                )}
                <p className="project-tech">{project.tech}</p>
                {project.members && (
                  <p className="project-members">Team: {project.members}</p>
                )}
              </a>
            ))}
          </div>
        </div>
      </section>


      <section id="leadership" className="content">
        <h1 className="title">leadership</h1>

        {/* Left column - Organization List */}
        <div className="leadership-container">
          <div className="leadership-list">
            {Object.keys(groupedLeaderships).map((org, index) => (
              <div
                key={index}
                className={`leadership-item ${selectedOrganization === org ? "active" : ""}`}
                onClick={() => handleOrgClick(org)}
              >
                {org}
              </div>
            ))}
          </div>

          {/* Right column - Details of selected leadership */}
          <div className="experience-details">
            {selectedOrganization !== null && (
              <div className="details-content">
                {groupedLeaderships[selectedOrganization].map((leadership: Leadership, index: number) => (
                  <div key={index}>
                    <h3 className="position">{leadership.role}</h3>
                    <h4 className="dates">{leadership.dates}</h4>
                    <div className="description">
                      {leadership.description.map((sentence, idx) => (
                        <p key={idx}>{sentence}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* <section id="awards" className="content">
        <h1 className="title">awards</h1>
      </section> */}

      <section id="skills" className="content skills-boxes">
        <h1 className="title">skills</h1>

        <div className="skills-list">
          <div className="skills-section technical">
            <h2>Programming Languages</h2>
            <p>Python</p>
            <p>SQL</p>
            <p>C#</p>
            <p>C++</p>
            <p>C</p>
            <p>React.js</p>
            <p>HTML/CSS</p>
            <p>JavaScript</p>
          </div>

          <div className="skills-section developer-tools">
            <h2>Developer Tools</h2>
            <p>VS Code</p>
            <p>Git</p>
            <p>Arduino</p>
          </div>

          <div className="skills-section frameworks">
            <h2>Frameworks</h2>
            <p>GitHub</p>
            <p>FastAPI</p>
            <p>NI-MAX</p>
            <p>PM40</p>
            <p>Postman</p>
          </div>

          <div className="skills-section languages">
            <h2>Spoken Languages</h2>
            <p>English - Native</p>
            <p>Spanish - Native</p>
            <p>Japanese - Beginner</p>
          </div>
        </div>
      </section>

      <section id="footer" className="content">
        <h3 className="footers">built, managed and owned by Lisset C. Rico</h3>
      </section>
    </div>
  );
}