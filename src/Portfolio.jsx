import React, { useEffect, useState } from 'react';
import './portfolio.css'; 
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Portfolio() {
const lines = [
  "MCA Student",
  "Aspiring Java Developer",
  "Tech Enthusiast"
];

const [currentIndex, setCurrentIndex] = useState(0);

useEffect(() => {
  const leftRightElements = document.querySelectorAll(".slide-left, .slide-right");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");   // animate in
        } else {
          entry.target.classList.remove("active"); // reset when out
        }
      });
    },
    { threshold: 0.3 }
  );

  leftRightElements.forEach((el) => observer.observe(el));

  return () => {
    leftRightElements.forEach((el) => observer.unobserve(el));
  };
}, []);



useEffect(() => {
  const interval = setInterval(() => {
    setCurrentIndex((prev) => (prev + 1) % lines.length);
  }, 2500); // each line stays for 2.5s

  return () => clearInterval(interval);
}, []);


  useEffect(() => {
  const intro = document.getElementById('intro');
  if (intro) {
    intro.style.opacity = 0;
    setTimeout(() => {
      intro.style.opacity = 1;
    }, 500);
  }
}, []);


  return (
    <div className="container">
      <header className="header">
        <h1>Nupur's Portfolio</h1>
        <nav>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-left">
        <h1 id="intro" className="name-gradient"><strong>NUPUR ROY</strong></h1>
        <h3 key={currentIndex} className="fade-loop">
         {lines[currentIndex]}
        </h3>  
        <p>I'm a final-year MCA student at BIT Mesra with a passion for software development and problem-solving. I enjoy building real-world applications using Java and the MERN stack, and I constantly explore new technologies to enhance my skills. I aim to create efficient, user-friendly software while learning and growing as a developer</p>
        <a href="https://docs.google.com/document/d/1T3N3o2H4zgiTrQcv25u9geoaJ4qfQmedD__-O4zydBU/edit?usp=sharing" className="resume-btn" target="_blank" rel="noopener noreferrer" >view resume</a>
        </div>
  <div className="hero-right">
    <img 
      src="/nupurimg1.jpg" 
      alt="Nupur" 
      className="hero-photo"
    />
  </div>
</section>
 
 <hr className="section-divider" />

      <section id="about" className="about">
        <h2>ABOUT <span>ME</span></h2>
       <div className= "about-container">
          <div className="about-left slide-left">
          <img 
            src="/nupurimg2.jpg" alt="Nupur" 
             className="about-photo"/>
        </div>
        <div className="about-right slide-right">
          <p>As I advance in my career, my focus remains on expanding my technical expertise while staying up-to-date with the latest trends in software engineering. I actively pursue opportunities that challenge me to apply my problem-solving abilities and technical knowledge to real-world scenarios, ensuring that I continue to grow as a developer. My leadership roles have further developed my communication, adaptability, and decision-making skills, which help me effectively collaborate with teams on complex projects. Looking ahead, I am eager to explore new frontiers in technology, contribute to cutting-edge advancements, and make a meaningful impact through innovative solutions. My commitment to continuous learning and passion for software development drives me to seek out challenging opportunities where I can apply my skills and contribute to meaningful, long-lasting improvements. Ultimately, I aim to create solutions that not only address current needs but also push the boundaries of what technology can achieve in the future.</p>
          </div>
        </div>
        </section>

<hr className="section-divider" />

      <section id="skills" className="skills">
        <h2>MY <span>SKILL</span></h2>
  <div className="skills-container">
    <div className="skill-card">
      <i className="fab fa-java"></i>
      <p>Java</p>
    </div>
    <div className="skill-card">
      <i className="fab fa-react"></i>
      <p>React</p>
    </div>
    <div className="skill-card">
      <i className="fas fa-database"></i>
      <p>MySQL</p>
    </div>
    <div className="skill-card">
    <i className="fab fa-js"></i> <p>javascript</p> 
    </div>
  
    <div className="skill-card">
  <i className="fab fa-python"></i>
  <p>Python</p>
</div>
    <div className="skill-card">
      <i className="fas fa-leaf"></i>
      <p>MongoDB</p>
    </div>
  </div>
</section>

<hr className="section-divider" />

<section id="education" className="education">
  <h2>EDUCATION</h2>

  {/* MCA */}
    <div className="education-card">
      <div className="edu-left slide-left">
        <img src="/bm.webp" alt="MCA Logo" className="edu-logo" />
        <p>2024-2026</p>
      </div>
      <div className="edu-right slide-right">
        <p>Currently pursuing a Master of Computer Applications (MCA) from BIT Mesra, with a current CGPA of 7.1. My focus is on advanced software development, data structures, algorithms, and full-stack application development. I am passionate about exploring new technologies and building real-world applications while continuing to strengthen my expertise.</p>
      </div>
    </div>


{/* BCA */}
    <div className="education-card">
      <div className="edu-left slide-left">
        <img src="/rwc.webp" alt="BCA Logo" className="edu-logo" />
        <p>2020-2023</p>
      </div>
      <div className="edu-right slide-right">
        <p>Graduated with a Bachelor of Computer Applications (BCA) degree from Ranchi Women's College in 2023, achieving a CGPA of 8.41. My coursework focused on programming, database management, web development, and software engineering, allowing me to work on several academic projects that enhanced my technical skills and practical problem-solving capabilities.</p>
      </div>
    </div>



{/* 12th */}
    <div className="education-card">
      <div className="edu-left slide-left">
        <img src="/vvm.png" alt="12th Logo" className="edu-logo" />
        <p>2019-2020</p>
      </div>
      <div className="edu-right slide-right">
        <p>Completed 12th grade in the academic year 2019-2020 with 80% marks from Vivekananda Vidya Mandir. This period deepened my understanding of subjects like computer science and mathematics, strengthening my analytical skills and fueling my ambition to pursue a career in software development.</p>
      </div>
    </div>


  <div className="education-container">
    {/* 10th */}
    <div className="education-card">
      <div className="edu-left slide-left">
        <img src="/bwgs.jpg" alt="10th Logo" className="edu-logo" />
        <p>2017-2018</p>
      </div>
      <div className="edu-right slide-right">
        <p>Completed 10th grade in the academic year 2017-2018 with 80% marks from Bishop Westcott Girl's School. During this time, I developed a strong foundation in mathematics, science, and computer basics, which sparked my early interest in technology and problem-solving.</p>
      </div>
    </div>
  </div>

    
   </section>
    

  <hr className="section-divider" />
 

      
  <section id="contact" className="contact">
  <h2>Contact Me</h2>
  <p className="contact-item slide-left">
    <FaEnvelope style={{ marginRight: "8px" }} />
    <a href="mailto:rnupur27@gmail.com">rnupur27@gmail.com</a>
  </p>
  <p className="contact-item slide-right">
    <FaGithub style={{ marginRight: "8px" }} />
    <a href="https://github.com/nupurroy12" target="_blank" rel="noopener noreferrer">
      nupurroy12
    </a>
  </p>
  <p className="contact-item slide-left">
    <FaLinkedin style={{ marginRight: "8px" }} />
    <a href="https://linkedin.com/in/nupurroy12" target="_blank" rel="noopener noreferrer">
    nupurroy12</a>
  </p>
</section>


 </div>
  );     

}
