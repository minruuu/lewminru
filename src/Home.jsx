import React, { useEffect } from 'react'
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { Link as ScrollLink, Element } from 'react-scroll';
import { scroller } from 'react-scroll';
import './Home.css'
import { HandWavingIcon, InstagramLogoIcon, LinkedinLogoIcon, GithubLogoIcon } from "@phosphor-icons/react";
import Navbar from './components/Navbar.jsx';
import introImage from './images/favicon.png';
import project1 from './images/retrofhousing/retrofhousing_project1.jpg';
import project2 from './images/pastacreation_project1.jpg';
import project3 from './images/eKnitwear_project2.jpg';
//import TiltedCard from './reactbits/TiltedCard';
import SpotlightCard from './reactbits/SpotlightCard';
import htmlIcon from './icons/html5.png';
import cssIcon from './icons/css.png';
import jsIcon from './icons/js.png';
import cSharpIcon from './icons/c-sharp.png';
import pythonIcon from './icons/python.png';
import phpIcon from './icons/php.png';
import reactIcon from './icons/react.png';
import mysqlIcon from './icons/mysql.png';
import wpIcon from './icons/wordpress-org.png';
import xdIcon from './icons/xd.png';
import RetrofHousing from './projects/RetrofHousing.jsx';

function Home() {
    const location = useLocation();

    useEffect(() => {
        const scrollTo = location.state?.scrollTo;
        if (scrollTo) {
            scroller.scrollTo(scrollTo, {
                duration: 500,
                delay: 0,
                smooth: 'easeInOutQuart',
            });
        }
    }, [location]);

    return (
        <div>
            <Navbar />

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
                            <a href="/lewminru/lewminru-resume.pdf" download className="btn">Download Resume</a>
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
                    <div className="skills-section">
                        <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(168, 115, 237, 0.45)">
                            <div className="skills-item">
                                <img src={htmlIcon} alt="htmlIcon" className='skills-icon'></img>
                                <h5>HTML5</h5>
                            </div>
                        </SpotlightCard>

                        <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(168, 115, 237, 0.45)">
                            <div className="skills-item">
                                <img src={cssIcon} alt="cssIcon" className='skills-icon'></img>
                                <h5>CSS</h5>
                            </div>
                        </SpotlightCard>

                        <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(168, 115, 237, 0.45)">
                            <div className="skills-item">
                                <img src={jsIcon} alt="jsicon" className='skills-icon'></img>
                                <h5>JavaScript</h5>
                            </div>
                        </SpotlightCard>

                        <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(168, 115, 237, 0.45)">
                            <div className="skills-item">
                                <img src={cSharpIcon} alt="csharpicon" className='skills-icon'></img>
                                <h5>C#</h5>
                            </div>
                        </SpotlightCard>

                        <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(168, 115, 237, 0.45)">
                            <div className="skills-item">
                                <img src={phpIcon} alt="phpicon" className='skills-icon'></img>
                                <h5>PHP</h5>
                            </div>
                        </SpotlightCard>

                        <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(168, 115, 237, 0.45)">
                            <div className="skills-item">
                                <img src={reactIcon} alt="reacticon" className='skills-icon'></img>
                                <h5>React</h5>
                            </div>
                        </SpotlightCard>

                        <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(168, 115, 237, 0.45)">
                            <div className="skills-item">
                                <img src={pythonIcon} alt="pythonicon" className='skills-icon'></img>
                                <h5>Python</h5>
                            </div>
                        </SpotlightCard>

                        <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(168, 115, 237, 0.45)">
                            <div className="skills-item">
                                <img src={mysqlIcon} alt="pythonicon" className='skills-icon'></img>
                                <h5>MySql</h5>
                            </div>
                        </SpotlightCard>

                        <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(168, 115, 237, 0.45)">
                            <div className="skills-item">
                                <img src={wpIcon} alt="wordpressicon" className='skills-icon'></img>
                                <h5>WordPress.org</h5>
                            </div>
                        </SpotlightCard>

                        <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(168, 115, 237, 0.45)">
                            <div className="skills-item">
                                <img src={xdIcon} alt="adobexdicon" className='skills-icon'></img>
                                <h5>AdobeXD</h5>
                            </div>
                        </SpotlightCard>
                    </div>
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
                                <Link to="/retrof-housing">Read More</Link>

                            </div>
                        </div>

                        <div className="card">
                            <div className="content">
                                <img src={project2} alt="retrofhousing"></img>
                                <h2>Pasta Creation</h2>
                                <p>
                                    Pasta Recipe app prototype made using Adobe XD
                                    lorem ipsum lorem ipsum lorem ipsum
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
                                    lorem ipsum lorem ipsum
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