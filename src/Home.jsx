import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import { Link as ScrollLink, Element } from 'react-scroll';
import './Home.css'
import { HandWavingIcon, InstagramLogoIcon, LinkedinLogoIcon, GithubLogoIcon } from "@phosphor-icons/react";
import { FaHtml5, FaCss3Alt, FaPython } from 'react-icons/fa';
import introImage from './images/favicon.png';
import project1 from './images/retrofhousing_project1.jpg';
import project2 from './images/pastacreation_project1.jpg';
import project3 from './images/eKnitwear_project2.jpg';
import TiltedCard from './reactbits/TiltedCard';
import html from './icons/html5.png'

function Home() {
    return (
        <div>
            <header className="app-header">
                <div className="logo-container">
                    <a href="#" className="logo">Lew Min Ru</a>
                </div>
                <nav className="navbar">
                    <a href="#" className="nav-link"><ScrollLink to="home" smooth={true} duration={500}>Intro</ScrollLink></a>
                    <a href="#" className="nav-link"><ScrollLink to="about" smooth={true} duration={500}>About</ScrollLink></a>
                    <a href="#" className="nav-link"><ScrollLink to="skills" smooth={true} duration={500}>Skills</ScrollLink></a>
                    <a href="#" className="nav-link"><ScrollLink to="projects" smooth={true} duration={500}>Projects</ScrollLink></a>
                    <a href="#" className="nav-link"><ScrollLink to="contact" smooth={true} duration={500}>Contact</ScrollLink></a>
                </nav>
            </header>

            <main>
                <Element name="home"></Element>
                <section id="home" className="intro-header">
                    <div className="socials-icons">
                        <a href="#"><InstagramLogoIcon size={36} weight="bold" /></a>
                        <a href="#"><LinkedinLogoIcon size={36} weight="bold" /></a>
                        <a href="#"><GithubLogoIcon size={36} weight="bold" /></a>
                    </div>
                    <div className="intro-text">
                        <h2>Hello I'm Min Ru <HandWavingIcon size={36} padding={5} weight="bold" /></h2>
                        <h3>Information Technology Student</h3>
                        <p>I'm an Information Technology Student & Aspiring Web Developer with hands-on experience in full stack development, UI/UX design, and digital prototyping. I’m passionate about building clean, user-friendly web solutions that solve real problems and make an impact.</p>
                        <div className="intro-btns">
                            <a href="a" className="btn">Contact Info</a>
                            <a href="a" className="btn">Download Resume</a>
                        </div>
                    </div>
                    <div className="intro-image">
                        <img src={introImage}></img>
                    </div>
                </section>

                <section id="about" className="about-me">
                    <Element name="about"></Element>
                    <h2 className="section-title">👩🏻‍💻 About Me</h2>
                    <p className='about-text'>
                        I'm an Information Technology student at Nanyang Polytechnic with a strong
                        foundation in web development, UI/UX design, and software engineering.
                        Recognized for my academic excellence with multiple Director's List Awards,
                        I thrive on challenges that require meticulous attention to detail and innovative thinking.
                    </p>
                    <p className='about-text'>
                        From designing e-commerce sites and mobile prototypes to developing full-stack applications
                        using React and Node.js, I've built solutions that are functional, user-focused, and purpose-driven.
                        I enjoy collaborating with others and continuously learning new tools and technologies to improve my craft.
                    </p>
                    <p className='about-text'>
                        Whether it's working with WordPress, coding in JavaScript or Python, or prototyping with Adobe XD and Figma,
                        I'm committed to creating digital solutions that make a real-world impact.
                    </p>
                </section>

                <section id="skills" className="skills">
                    <Element name="skills"><h2 className="section-title">🛠️ Skills</h2></Element>
                   
                </section>

                <section id="projects" className="projects">
                    <Element name="projects"><h2 className="section-title">🖥️ Projects</h2></Element>
                    <div className="projects-card">
                        <div className="card">
                            <div className="content">
                                <img src={project1} alt="retrofhousing"></img>
                                <h2>RetroF Housing</h2>
                                <p>
                                    RetroF Housing is a business website that
                                    sells retro-futuristic furniture and home decor
                                </p>
                                <a href="#">Read More</a>
                            </div>
                        </div>

                        <div className="card">
                            <div className="content">
                                <img src={project2} alt="retrofhousing"></img>
                                <h2>Pasta Creation</h2>
                                <p>
                                    Pasta Recipe app prototype made using Adobe XD
                                </p>
                                <a href="#">Read More</a>
                            </div>

                        </div>

                        <div className="card">
                            <div className="content">
                                <img src={project3} alt="retrofhousing"></img>
                                <h2>eKnitwear</h2>
                                <p>
                                    eKnitwear was made with HTML, CSS, and JavaScript / PHP
                                </p>
                                <a href="#">Read More</a>
                            </div>

                        </div>



                    </div>


                </section>
            </main>
        </div>
    );
}

export default Home;