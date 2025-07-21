// components/Navbar.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import './Navbar.css'; // Create this or move relevant styles here

function Navbar() {
    const location = useLocation();
    const isHome = location.pathname === '/';

    return (
        <header className="app-header">
            <div className="logo-container">
                <a href="/" className="logo">Lew Min Ru</a>
            </div>
            <nav className="navbar">
                {isHome ? (
                    <>
                        <a href="#" className="nav-link"><ScrollLink to="home" smooth={true} duration={500}>Intro</ScrollLink></a>
                        <a href="#" className="nav-link"><ScrollLink to="about" smooth={true} duration={500}>About</ScrollLink></a>
                        <a href="#" className="nav-link"><ScrollLink to="skills" smooth={true} duration={500}>Skills</ScrollLink></a>
                        <a href="#" className="nav-link"><ScrollLink to="projects" smooth={true} duration={500}>Projects</ScrollLink></a>
                        <a href="#" className="nav-link"><ScrollLink to="contact" smooth={true} duration={500}>Contact</ScrollLink></a>
                    </>
                ) : (
                    <>
                        <Link to="/" state={{ scrollTo: 'home' }} className="nav-link">Intro</Link>
                        <Link to="/" state={{ scrollTo: 'about' }} className="nav-link">About</Link>
                        <Link to="/" state={{ scrollTo: 'skills' }} className="nav-link">Skills</Link>
                        <Link to="/" state={{ scrollTo: 'projects' }} className="nav-link">Projects</Link>
                        <Link to="/" state={{ scrollTo: 'contact' }} className="nav-link">Contact</Link>
                    </>
                )}
            </nav>
        </header>
    );
}

export default Navbar;
