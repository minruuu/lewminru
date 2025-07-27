import React, { useEffect } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { Link as ScrollLink, Element } from 'react-scroll';
import { InstagramLogoIcon, FacebookLogoIcon, TiktokLogoIcon, PinterestLogoIcon, YoutubeLogoIcon, ArrowLeftIcon } from "@phosphor-icons/react";
import './ProjectDetails.css'
import Navbar from '.././components/Navbar.jsx';
import retrofCover from '../images/retrofhousing/retrofhousing-cover.png';
import retrofH1 from '../images/retrofhousing/retrofhousing-h1.jpg';
import retrofH2 from '../images/retrofhousing/retrofhousing-h2.jpg';
import retrofH3 from '../images/retrofhousing/retrofhousing-h3.jpg';
import retrofH4 from '../images/retrofhousing/retrofhousing-h4.jpg';
import retrofH5 from '../images/retrofhousing/retrofhousing-h5.jpg';
import retrofH6 from '../images/retrofhousing/retrofhousing-h6.jpg';

function RetrofHousing() {
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
                        <h4>RetroF Housing</h4>
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
                        <img src={retrofCover} alt='retrofhousingcover'></img>
                        <p>
                            RetroF Housing is a business website I conceptualized, designed,
                            and developed to sell retro-futuristic furniture and home decor.
                            Launched on 24th October 2022, it began as my individual project
                            for the Web Content Management module. I built the website using
                            WordPress, leveraging its open-source capabilities to create a
                            fully functional and visually engaging online store.
                        </p>
                        <p>
                            To enable e-commerce features, I integrated the WooCommerce plugin
                            and connected the site with Facebook to enhance its social media reach.
                            The site was initially hosted on a local web server using XAMPP, where I
                            configured and managed all core components.
                        </p>
                        <p>
                            As part of the Website Optimization Fundamentals module, I led the migration
                            of the site to a live environment using the free hosting service pantheon.io.
                            I continued to expand and refine the website by adding essential pages such as
                            a blog and contact page, and I revised the About Us section to better represent
                            the brand's voice and mission.
                        </p>
                        <p>
                            My focus during this phase was on implementing effective Search Engine Optimization (SEO)
                            strategies and conducting Web Analytics to track site performance and user behavior.
                            I also utilized social media tools to boost search rankings and optimize page visibility.
                            To ensure quality, I carried out comprehensive web testing using various online tools to
                            assess performance, responsiveness, and user experience.
                        </p>
                        <p>
                            This project showcases my end-to-end involvement—from ideation and design to deployment,
                            optimization, and performance analysis.
                        </p>
                        <div className='more-details'>
                            <div>
                                <h5>Modules:</h5>
                                <ul>
                                    <li>Web Content Management</li>
                                    <li>Website Optimization Fundamentals</li>
                                </ul>
                            </div>
                            <div>
                                <h5>Tools:</h5>
                                <ul>
                                    <li>WordPress</li>
                                    <li>XAMPP</li>
                                    <li>Pantheon.io</li>
                                    <li>Google Analytics</li>
                                    <li>Google Search Console</li>
                                </ul>
                            </div>
                            <div>
                                <h5>Social media platforms:</h5>
                                <div className='project-socials'>
                                    <a href="https://www.facebook.com/retrofhousing/" target='_blank'><FacebookLogoIcon size={36} color="#0866ff" weight="fill" /></a>
                                    <a href="https://www.tiktok.com/@retrofhousing?lang=en" target='_blank'><TiktokLogoIcon size={36} color="#000000" weight="fill" /></a>
                                    <a href="https://www.pinterest.com/retrofhousing/retrof-housing/" target='_blank'><PinterestLogoIcon size={36} color="#BD081C" weight="fill" /></a>
                                    <a href="https://www.youtube.com/@retrofhousing-sz1kc" target='_blank'><YoutubeLogoIcon size={36} color="#E62117" weight="fill" /></a>
                                    <a href="https://www.instagram.com/retrofhousing/" target='_blank'><InstagramLogoIcon size={36} color="#d62976" weight="fill" /></a>
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

export default RetrofHousing