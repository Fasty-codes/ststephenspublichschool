import React, { useState, useEffect } from 'react';
import './HomePage.css';
import Hero from '../components/Hero';

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import logo from '../assets/images/logo.png';
// import logoJpeg from '../assets/images/logo.jpeg';
// import menuIcon from '../assets/images/menu-icon.png';
// import closeIcon from '../assets/images/close.png';
import adImage from '../assets/images/slide21.jpg';
// import schoolImage from '../assets/images/slide2.jpg';
import schoolBandImage from '../assets/images/slide14.png';
import exhibitionImage from '../assets/images/slide31.png';
import extraCurricularImage from '../assets/images/extra.jpg';
import labFacilitiesImage from '../assets/images/slide41.jpg';
import galleryImg1 from '../assets/images/slide4.jpg';
import galleryImg2 from '../assets/images/slide7.jpg';
import galleryImg3 from '../assets/images/slide17.png';
import locImg from '../assets/images/location.png';
import phone from '../assets/images/phone.png';
import email from '../assets/images/email.png';
import classImage from '../assets/images/classimage.png';
import children from '../assets/images/children.png';
import calender from '../assets/images/calendar.png';
import teacher from '../assets/images/teacher.png';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

function HomePage() {
    const [showAdPopup, setShowAdPopup] = useState(true);
    // const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Close popup after 5 seconds
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowAdPopup(false);
        }, 5000);
        return () => clearTimeout(timer);
    }, []);

    return (
        
        <div className="App">
            <Header />

            {/* Admission Popup */}
            {showAdPopup && (
                <div className="ad-popup" id="adPopup">
                    <div className="ad-content">
                        <span className="close-btn" onClick={() => setShowAdPopup(false)}>&times;</span>
                        <h2>Admissions Open!</h2>
                        <p>Join our Vibrant learning community.</p>
                        <img src={adImage} alt="SchoolAd" className="ad-Image" />
                        <a href="/admission" className="ad-btn">Apply Now</a>
                    </div>
                </div>
            )}

            {/* Main Content */}
            <main>
                {/* School Image */}
                {/* <img className="school" src={schoolImage} alt="School" style={{ width: '100%' }} /> */}
                <Hero />

                {/* About Section */}
                <section id="about">
                    <div className="box">
                        <img src={adImage} width="450" height="450" alt="School Building" />
                        <div className="inner">
                            <h2>About us</h2>
                            <p>
                                St:Stephen's Public school was established in 1980 and opened in 2005.
                                This institution is run by the St Stephen's Charitable Society of St Stephen's orthodox cathedral.
                                The school is situated in a lovely place, adjacent to St Stephen's Orthodox Cathedral and Piligrim Centre.
                                St Stephens Public School is a Co-Ed school affiliated to CBSE.
                                St Stephen's Public School started its journey in 1980 and later on affiliated to CBSE in 1992.
                            </p>
                            <a href="/about" className="button">For More Details</a>
                        </div>
                    </div>

                    {/* Vision & Mission */}
                    <section id="vi-mi">
                        <div>
                            <h2>Vision</h2>
                            <p>
                                Aims to be an institution of excellence and fosters intellectually competent,
                                spiritually mature morally upright, psychologically integrated, Physically healthy
                                and socially acceptable champions of justice, love, truth & peace.
                            </p>
                        </div>
                        <div>
                            <h2>Mission</h2>
                            <p>
                                We empower students with high quality and future learning, under the aegis of
                                vocationally committed, professionally competent, morally upright, just and humane educators.
                            </p>
                        </div>
                    </section>

                    {/* Academics */}
                    <div className="academics">
                        <div className="academics-content">
                            <h2 className="heading">Academics</h2>

                            <div className="academics-grid">
                                {/* CBSE Card */}
                                <div className="academics-card">
                                    <div className="academics-icon">
                                        <img src="https://cnextassets.careers360.com/frontend-school/_react_school/assets/streams_offered.png" alt="CBSE" />
                                    </div>
                                    <h3>CBSE</h3>
                                    <h4>Curriculum</h4>
                                    <h3>English Medium</h3>
                                </div>

                                {/* Classes Card */}
                                <div className="academics-card">
                                    <div className="class-icon">
                                        <img src={classImage} alt="Classes" />
                                    </div>
                                    <h4>Classes</h4>
                                    <h3>Pre-nursery - 12th</h3>
                                </div>

                                {/* Co-ed */}
                                <div className="academics-card">
                                    <div className="ed-icon">
                                        <img src={children} alt="Co-Ed" />
                                    </div>
                                    <div>
                                        <h4>Gender</h4>
                                        <h3 className="diff">Co-Ed</h3>
                                    </div>
                                </div>

                                {/* Year Card */}
                                <div className="academics-card">
                                    <div className="calender-icon">
                                        <img src={calender} alt="Year of Opening" />
                                    </div>
                                    <h4>Year of Opening</h4>
                                    <h1>2005</h1>
                                </div>

                                {/* Teachers Card */}
                                <div className="academics-card">
                                    <div className="teacher-icon">
                                        <img src={teacher} alt="Teachers Count" />
                                    </div>
                                    <h4>Teachers Count</h4>
                                    <h2>22</h2>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Features */}
                    <section className="cards">
                        <section className="wrapper">
                            <div className="top">
                                <h2 className="heading">Features</h2>
                                <a href="/about" className="button rspv-btn">More&rarr;</a>
                            </div>
                            <div className="card-container">
                                <div className="card">
                                    <img src={schoolBandImage} alt="School Band" />
                                    <h3>School Band</h3>
                                    <p>This is a short description for the first card.</p>
                                </div>
                                <div className="card">
                                    <img src={extraCurricularImage} alt="Activities" />
                                    <h3>Extra Curricular Activities</h3>
                                    <p>This is a short description for the second card.</p>
                                </div>
                                <div className="card">
                                    <img src={labFacilitiesImage} alt="Lab" />
                                    <h3>Lab Facilities</h3>
                                    <p>There are spacious and well equipped Lab</p>
                                </div>
                                <div className="card rspv-crd">
                                    <img src={exhibitionImage} alt="Exhibition" />
                                    <h3>School Exhibition</h3>
                                    <p>This is a short description for the second card.</p>
                                </div>
                            </div>
                        </section>
                    </section>

                    {/* Gallery */}
                    <section id="gallery">
                        <div className="gallery-content">
                            <div className="gallery-header">
                                <h1>Our Gallery</h1>
                                <a href="/gallery" className="gallery-btn">View More Images</a>
                            </div>

                            <div className="gallery-grid">
                                <div className="gallery-item">
                                    <img src={galleryImg1} alt="School Activity" />
                                </div>
                                <div className="gallery-item">
                                    <img src={galleryImg2} alt="Classroom" />
                                </div>
                                <div className="gallery-item">
                                    <img src={galleryImg3} alt="School Event" />
                                </div>
                            </div>
                        </div>
                    </section>
                </section>

                {/* Contact Section */}
                <section id="contact">
                    <h2 className="heading">Get In Touch</h2>
                    <div className="contact-container">
                        <div className="contact-info">
                            <div className="contact-details">
                                <div className="contact-item">
                                    <div className="contact-icon">
                                        <img src={locImg} alt="Location" />
                                    </div>
                                    <div className="contact-text">
                                        <h3>Our Address</h3>
                                        <p>St:Stephen's Public School And Junior College,<br />
                                            Kudassanadu Pathanamtitta, Kerala - 689515</p>
                                    </div>
                                </div>

                                <div className="contact-item">
                                    <div className="contact-icon">
                                        <img src={phone} alt="Phone" />
                                    </div>
                                    <div className="contact-text">
                                        <h3>Phone Number</h3>
                                        <p>04734 - 252346</p>
                                    </div>
                                </div>

                                <div className="contact-item">
                                    <div className="contact-icon">
                                        <img src={email} alt="Email" />
                                    </div>
                                    <div className="contact-text">
                                        <h3>Email Address</h3>
                                        <a href="mailto:st:stephenspublicschool@yahoo.com">st:stephenspublicschool@yahoo.com</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="map-container">
                            <iframe
                                title="School Location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3938.595108887516!2d76.67461391429478!3d9.19094589340866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0610db46595445%3A0x2e6b9c773d1c33b8!2sSt.Stephens+Public+School!5e0!3m2!1sen!2sin!4v1543990151440"
                                allowFullScreen
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>
                </section>

            </main>

            {/* Footer */}
            <Footer />

        </div>
    );
}

export default HomePage;