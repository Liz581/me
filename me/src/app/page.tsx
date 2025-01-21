"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from 'next/link';
import { groupedExperiences } from "./experiences";
import { FaLinkedin, FaGithubSquare } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";
import './globals.css';

// Define the type for each experience
type Experience = {
  company: string;
  position: string;
  dates: string;
  description: string[];
};

export default function Home() {
  const [selectedCompany, setSelectedCompany] = useState<string | null>('Break Through Tech Chicago'); // Track selected company, set BTTC as default

  const handleClick = (company: string) => {
    setSelectedCompany((prev) => (prev === company ? null : company)); // Toggle the company details
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
            <h1 className="name">Hi! I&apos;m Lisset C. Rico</h1>
            <h2 className="profession">Software Engineer</h2>
            <div className="icons">
              <a href="https://github.com/Liz581" target="_blank" rel="noopener noreferrer">
                <FaGithubSquare size={40} color="#778DA9" />
              </a>
              <a href="https://www.linkedin.com/in/lisset-c-rico-85aa91210/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={40} color="#778DA9" />
              </a>
              <a href="lissetcrico@gmail.com" target="_blank" rel="noopener noreferrer">
                <MdEmail size={40} color="#778DA9" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="about-me" className="content">
        <h1 className="title">about me</h1>
        <p>
          I&apos;m Lisset, a Software Engineer from Chicago, IL. 
          I&apos;m a recent graduate from the <b>University of Illinois at Chicago</b>. I completed a <b>Bachelor&apos;s in Science of Computer Science</b> in Fall 2024.
          I first learned about CS in the AP Computer Science A course offered at my school my sophomore year. From then on, I couldn&apos;t get coding out of my head.
        </p>
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
            {/* Map through projects and display them here */}
          </div>
        </div>
      </section>


      <section id="leadership" className="content">
        <h1 className="title">leadership</h1>
      </section>

      {/* <section id="awards" className="content">
        <h1 className="title">awards</h1>
      </section> */}

      <section id="skills" className="content">
        <h1 className="title">skills</h1>

      </section>

      <section id="footer" className="content">
        <h3 className="footers">built, managed and owned by Lisset C. Rico</h3>
      </section>
    </div>
  );
}