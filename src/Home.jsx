import React from 'react'
import { HashRouter as Router, Routes, Route, Link }
    from 'react-router-dom';
import './Home.css'

function Home() {
    return (
        <div>
            <header className="app-header">
                <div className="logo-container">
                    <a href="#" class="logo">Lew Min Ru</a>
                </div>
                <nav className="navbar">
                    <a href="#home" className="nav-link">About</a>
                    <a href="#about" className="nav-link">About Me</a>
                    <a href="#projects" className="nav-link">Projects</a>
                    <a href="#skills" className="nav-link">Skills</a>
                    <a href="#contact" className="nav-link">Contact</a>
                </nav>
            </header>

            <main>
                <section id="home" className="intro-header">
                    <div className="intro-text">
                        <h2>Hello I'm Min Ru<i className="ph-bold ph-hand-waving"></i></h2>
                        <h3>I'm a Web Developer</h3>
                        <p>Lorem ipsum dolor sit amet,consectetur adipiscing elit. Pellentesque id condimentum tortor.</p>
                        <div className="intro-btns">
                            <a href="a" className="btn">Contact Info</a>
                            <a href="a" className="btn">Download Resume</a>
                        </div>
                    </div>
                    <div className="intro-image">
                        <img src=""></img>
                    </div>
                    <h4>About Me</h4>
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