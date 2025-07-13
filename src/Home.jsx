import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';
//import { Link as ScrollLink, Element } from 'react-scroll';
import './Home.css'
import { HandWavingIcon, InstagramLogoIcon, LinkedinLogoIcon, GithubLogoIcon } from "@phosphor-icons/react";
import introImage from './images/favicon.png';

function Home() {
    return (
        <div>
            <header className="app-header">
                <div className="logo-container">
                    <a href="#" className="logo">Lew Min Ru</a>
                </div>
                <nav className="navbar">
                    <a href="#home" className="nav-link">Intro</a>
                    <a href="#about" className="nav-link"></a>
                    <a href="#skills" className="nav-link">Skills</a>
                    <a href="#projects" className="nav-link">Projects</a>
                    <a href="#contact" className="nav-link">Contact</a>
                </nav>
            </header>

            <main>
                <section id="home" className="intro-header">
                    <div className="socials-icons">
                        <a href="#"><InstagramLogoIcon size={36} weight="bold" /></a>
                        <a href="#"><LinkedinLogoIcon size={36} weight="bold" /></a>
                        <a href="#"><GithubLogoIcon size={36} weight="bold" /></a>
                    </div>
                    <div className="intro-text">
                        <h2>Hello I'm Min Ru <HandWavingIcon size={36} padding={5} weight="bold" /></h2>
                        <h3>Information Technology Student & Aspiring Web Developer</h3>
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

                <section id="about" className="section">
                    
                    <h2>About</h2>
                </section>

                <section id="contact" className="section">
                    <h2>Contact</h2>
                </section>
            </main>
        </div>
    );
}

export default Home;