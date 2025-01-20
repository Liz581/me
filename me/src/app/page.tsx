import Image from "next/image";
import Link from 'next/link';
import './globals.css';

export default function Home() {
  return (
    <div>
      <nav>
        <ul>
          <li><Link href="#home">home</Link></li>
          <li><Link href="#about-me">about me</Link></li>
          <li><Link href="#experiences">experiences</Link></li>
          <li><Link href="#projects">projects</Link></li>
          <li><Link href="#leadership">leadership</Link></li>
          <li><Link href="#awards">awards</Link></li>
          <li><Link href="#skills">skills</Link></li>
        </ul>
      </nav>
      
      <section id="home" className="content">
        <div className="front-page">
          <Image
            src="/japan_self_portrait.jpg" // Make sure to place your image in the 'public' folder
            alt="Your Name"
            width={300} // Adjust size of the image
            height={300} // Adjust size of the image
            className="image"
          />
          <div>
            <h1 className="name">Lisset C. Rico</h1>
            <p className="profession">Software Engineer</p>
            
          </div>
        </div>
      </section>

      <section id="about-me">
        <h1 className="title">about me</h1>
        <p>
          Hello! I&apos;m Lisset, a Software Engineer from Chicago, IL. 
          I&apos;m a recent graduate from the <b>University of Illinois at Chicago</b>. I completed a <b>Bachelor&apos;s in Science of Computer Science</b> in Fall 2024.
          I first learned about CS in the AP Computer Science A course offered at my school my sophomore year. From then on, I couldn&apos;t get coding out of my head.
        </p>
      </section>

      <section id="experiences" className="sections">
        <h1 className="title">experiences</h1>
        <h3>Chicago Tech Circle</h3>
        <p></p>

        <h3>UI Health</h3>
        <p></p>

        <h3>UI</h3>

        <h3>UIC Wearable Technology and Sensory Laboratory</h3>
      </section>

      <section id="projects" className="sections">
        <h1 className="title">projects</h1>
      </section>

      <section id="leadership" className="sections">
        <h1 className="title">leadership</h1>
      </section>

      <section id="awards" className="sections">
        <h1 className="title">awards</h1>
      </section>

      <section id="skills" className="sections">
        <h1 className="title">skills</h1>
      </section>

      <section id="footer" className="sections">
        <p>built and owned by Lisset C. Rico</p>
      </section>
    </div>
  );
}