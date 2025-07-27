import React, { useEffect } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { Link as ScrollLink, Element } from 'react-scroll';
import './ProjectDetails.css'
import Navbar from '.././components/Navbar.jsx';
import htmlIcon from '../icons/html5.png';
import cssIcon from '../icons/css.png';
import jsIcon from '../icons/js.png';
import recordsCover from '../images/vmrecords/home1.png';
import retrofH1 from '../images/vmrecords/vmrecords-h1.png';
import retrofH2 from '../images/vmrecords/vmrecords-h2.png';
import retrofH3 from '../images/vmrecords/vmrecords-h3.png';
import retrofH4 from '../images/vmrecords/vmrecords-h4.png';
import retrofH5 from '../images/vmrecords/vmrecords-h5.png';
import retrofH6 from '../images/vmrecords/vmrecords-h6.png';

function VMRecords() {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top when component loads
    }, []);

    return (
        <div>
            <Navbar />
            <main>
                <section className='project-header'>
                    <div>
                        <p>Project Name:</p>
                        <h4>VMRecords</h4>
                    </div>
                    <div>
                        <p>Project Type:</p>
                        <h4>Individual Academic Project</h4>
                    </div>
                    <div>

                    </div>
                </section>
                <section className='project-content'>
                    <div className='project-desc'>
                        <img src={recordsCover} alt='retrofhousingcover'></img>
                        <p>
                            VMRecords is a front-end web development project designed to simulate
                            an online vinyl record store. Built using HTML, CSS, and JavaScript,
                            the site includes a dynamic JavaScript-powered checkout system that
                            allows users to manage a shopping cart and simulate the purchase process.
                        </p>
                        <p>
                            This project highlights my skills in responsive web design, DOM manipulation,
                            and creating user-friendly interfaces. Development was done in Visual Studio Code,
                            applying clean code practices and modular JavaScript for scalability.
                        </p>
                        <div >
                            <p><strong>Key Features:</strong></p>
                            <ul>
                                <li>Interactive product listings</li>
                                <li>Cart and checkout functionality</li>
                                <li>Responsive layout for desktop and mobile using Bootstrap 5 grid and components</li>
                                <li>Custom styling with CSS</li>
                            </ul>
                        </div>
                        <p>
                            This project reflects my ability to design and implement functional,
                            visually appealing web applications from scratch.
                        </p>
                        <div className='more-details'>
                            <div>
                                <h5>Modules:</h5>
                                <ul>
                                    <li>Web Development</li>
                                </ul>
                            </div>
                            <div>
                                <h5>Tools:</h5>
                                <ul>
                                    <li>Visual Studio Code</li>
                                    <li>Bootstrap 5</li>
                                </ul>
                            </div>
                            <div>
                                <h5>Skills:</h5>
                                <div className='project-skills-icons'>
                                    <img src={htmlIcon} alt="htmlIcon" className='skills-icon'></img>
                                    <img src={cssIcon} alt="cssIcon" className='skills-icon'></img>
                                    <img src={jsIcon} alt="jsIcon" className='skills-icon'></img>
                                </div>
                            </div>
                        </div>
                        <div className='project-highlights'>
                            <h4>Highlights</h4>
                            <div className='project-gallery'>
                                <img src={retrofH1} alt='retrofhousing1'></img>
                                <img src={retrofH2} alt='retrofhousing2'></img>
                                <img src={retrofH3} alt='retrofhousing3'></img>
                                <img src={retrofH4} alt='retrofhousing4'></img>
                                <img src={retrofH5} alt='retrofhousing4'></img>
                                <img src={retrofH6} alt='retrofhousing4'></img>

                            </div>
                        </div>
                    </div>

                </section>

            </main>
        </div>
    )
}

export default VMRecords