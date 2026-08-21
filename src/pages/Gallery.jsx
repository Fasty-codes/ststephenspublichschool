import React, { useState, useEffect } from 'react';
import './Gallery.css';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import VideoPlayer from '../components/VideoPlayer';
import Footer from '../components/Footer/Footer';
import video1 from '../assets/images/video.mp4';
import video2 from '../assets/images/video2.mp4';
import slide1 from '../assets/images/slide1.jpg';
import slide2 from '../assets/images/slide2.jpg';
import slide3 from '../assets/images/slide3.jpg';
import slide4 from '../assets/images/slide4.jpg';
import slide5 from '../assets/images/slide5.jpg';
import slide6 from '../assets/images/slide6.jpg';
import slide7 from '../assets/images/slide7.jpg';
import slide8 from '../assets/images/slide8.jpg';
import slide9 from '../assets/images/slide9.jpg';
import slide10 from '../assets/images/slide10.jpg';
import slide11 from '../assets/images/slide11.jpg';
import slide12 from '../assets/images/slide12.jpg';
import slide13 from '../assets/images/slide13.png';
import slide14 from '../assets/images/slide14.png';
import slide15 from '../assets/images/slide15.png';
import slide16 from '../assets/images/slide16.png';
import slide17 from '../assets/images/slide17.png';
import slide18 from '../assets/images/slide18.png';
import slide19 from '../assets/images/slide19.png';
import slide20 from '../assets/images/slide20.jpg';
import slide21 from '../assets/images/slide21.jpg';
import slide22 from '../assets/images/slide22.jpg';
import slide23 from '../assets/images/slide23.jpg';
import slide24 from '../assets/images/slide24.jpg';
import slide25 from '../assets/images/slide25.png';
import slide26 from '../assets/images/slide26.jpg';
import slide27 from '../assets/images/slide27.png';
import slide28 from '../assets/images/slide28.png';
import slide29 from '../assets/images/slide29.jpg';
import slide30 from '../assets/images/slide30.png';
import slide31 from '../assets/images/slide31.png';
import slide32 from '../assets/images/slide32.png';
import slide33 from '../assets/images/slide33.png';
import slide40 from '../assets/images/slide40.jpg';
import slide41 from '../assets/images/slide41.jpg';
import slide42 from '../assets/images/slide42.png';
import slide43 from '../assets/images/slide43.png';
import slide44 from '../assets/images/slide44.png';
import slide45 from '../assets/images/slide45.png';
import slide46 from '../assets/images/slide46.png';
import slide47 from '../assets/images/slide47.png';
import slide48 from '../assets/images/slide48.png';
import slide49 from '../assets/images/slide49.png';
import Header from '../components/Header/Header';


const Gallery = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [zoomLevel, setZoomLevel] = useState(1);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const mediaItems = [
        { type: 'image', src: slide1, alt: 'School Event 1' },
        { type: 'image', src: slide2, alt: 'School Event 2' },
        { type: 'image', src: slide3, alt: 'School Event 3' },
        { type: 'image', src: slide4, alt: 'School Event 4' },
        { type: 'image', src: slide5, alt: 'School Event 5' },
        { type: 'image', src: slide6, alt: 'School Event 6' },
        { type: 'image', src: slide7, alt: 'School Event 7' },
        { type: 'image', src: slide8, alt: 'School Event 8' },
        { type: 'image', src: slide9, alt: 'School Event 9' },
        { type: 'image', src: slide10, alt: 'School Event 10' },
        { type: 'image', src: slide11, alt: 'School Event 11' },
        { type: 'image', src: slide12, alt: 'School Event 12' },
        { type: 'image', src: slide13, alt: 'School Event 13' },
        { type: 'image', src: slide14, alt: 'School Event 14' },
        { type: 'image', src: slide15, alt: 'School Event 15' },
        { type: 'image', src: slide16, alt: 'School Event 16' },
        { type: 'image', src: slide17, alt: 'School Event 17' },
        { type: 'image', src: slide18, alt: 'School Event 18' },
        { type: 'image', src: slide19, alt: 'School Event 19' },
        { type: 'image', src: slide20, alt: 'School Event 20' },
        { type: 'image', src: slide21, alt: 'School Event 21' },
        { type: 'image', src: slide22, alt: 'School Event 22' },
        { type: 'image', src: slide23, alt: 'School Event 23' },
        { type: 'image', src: slide24, alt: 'School Event 24' },
        { type: 'image', src: slide25, alt: 'School Event 25' },
        { type: 'image', src: slide26, alt: 'School Event 26' },
        { type: 'image', src: slide27, alt: 'School Event 27' },
        { type: 'image', src: slide28, alt: 'School Event 28' },
        { type: 'image', src: slide29, alt: 'School Event 29' },
        { type: 'image', src: slide30, alt: 'School Event 30' },
        { type: 'image', src: slide31, alt: 'School Event 31' },
        { type: 'image', src: slide32, alt: 'School Event 32' },
        { type: 'image', src: slide33, alt: 'School Event 33' },
        { type: 'image', src: slide40, alt: 'School Event 40' },
        { type: 'image', src: slide41, alt: 'School Event 41' },
        { type: 'image', src: slide42, alt: 'School Event 42' },
        { type: 'image', src: slide43, alt: 'School Event 43' },
        { type: 'image', src: slide44, alt: 'School Event 44' },
        { type: 'image', src: slide45, alt: 'School Event 45' },
        { type: 'image', src: slide46, alt: 'School Event 46' },
        { type: 'image', src: slide47, alt: 'School Event 47' },
        { type: 'image', src: slide48, alt: 'School Event 48' },
        { type: 'image', src: slide49, alt: 'School Event 49' },
    ];

    const videos = [
        { type: 'video', src: video1, alt: 'School Video 1' },
        { type: 'video', src: video2, alt: 'School Video 2' },
    ];

    const openFullscreen = (index) => {
        setCurrentIndex(index);
        setIsFullscreen(true);
        setZoomLevel(1);
        setPosition({ x: 0, y: 0 });
    };

    const closeFullscreen = () => {
        setIsFullscreen(false);
    };

    const navigate = (direction) => {
        let newIndex;
        if (direction === 'prev') {
            newIndex = (currentIndex - 1 + mediaItems.length) % mediaItems.length;
        } else {
            newIndex = (currentIndex + 1) % mediaItems.length;
        }
        setCurrentIndex(newIndex);
        setZoomLevel(1);
        setPosition({ x: 0, y: 0 });
    };

    const handleWheel = (e) => {
        e.preventDefault();
        const newZoom = zoomLevel + (e.deltaY > 0 ? -0.1 : 0.1);
        setZoomLevel(Math.max(0.5, Math.min(newZoom, 3)));
    };

    const handleMouseMove = (e) => {
        if (zoomLevel > 1) {
            setPosition({
                x: e.nativeEvent.offsetX - e.target.clientWidth / 2,
                y: e.nativeEvent.offsetY - e.target.clientHeight / 2
            });
        }
    };
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        {
            image: slide3,
            title: 'Our School Campus',
            subtitle: 'Explore our state-of-the-art facilities'
        },
        {
            image: slide2,
            title: 'Student Activities',
            subtitle: 'Capturing memorable learning moments'
        },
        {
            image: slide1,
            title: 'Kalotsav',
            subtitle: 'Celebrating our school community'
        },
        {
            image: slide4,
            title: 'Sahodaya',
            subtitle: 'Celebrating our sahodaya'
        }
    ];

    // Auto-rotate slides
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [slides.length]);


    return (
        <div>
            <Header />

            <section className="gallery-hero">
                {/* Slides */}
                <div className="slides-container">
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className={`slide ${index === currentSlide ? 'active' : ''}`}
                            style={{ backgroundImage: `url(${slide.image})` }}
                        >
                            <div className="slide-overlay"></div>
                            <div className="slide-content">
                                <h1 className="slide-title">{slide.title}</h1>
                                <p className="slide-subtitle">{slide.subtitle}</p>
                                <button className="explore-btn">Explore</button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Navigation Dots */}
                <div className="dots-container">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            className={`dot ${index === currentSlide ? 'active' : ''}`}
                            onClick={() => setCurrentSlide(index)}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>

                {/* Navigation Arrows */}
                <button
                    className="nav-arrow prev"
                    onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
                    aria-label="Previous slide"
                >
                    <FaArrowLeft />
                </button>
                <button
                    className="nav-arrow next"
                    onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
                    aria-label="Next slide"
                >
                    <FaArrowRight />
                </button>
            </section>

            <section className="school-tour-section">
                <div className="container">
                    <div className="tour-header">
                        <h2 style={{ color: '#333', textAlign: 'center', paddingTop: '20px', fontSize: '2rem' }}>Virtual School Tour</h2>
                        <p style={{ color: '#666', textAlign: 'center', padding: '10px 20px', fontSize: '1rem' }}>Explore our state-of-the-art facilities and vibrant learning environment</p>
                    </div>

                    <div className="tour-content">
                        <div className="video-container">
                            <VideoPlayer
                                src={video1}
                                width="100%"
                                height="100%"
                                poster={slide3}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <div className="gallery-container">

                <div className="gallery-title">
                    <h2 style={{ color: '#333', textAlign: 'center', paddingTop: '20px', fontSize: '2rem', borderBottom: '4px solid #3e27ebff', marginLeft: '35%', marginRight: '35%', marginBottom: '60px', paddingBottom: '10px' }}>Photos</h2>
                </div>

                <div className="media-grid">
                    {mediaItems.map((item, index) => (
                        <div
                            key={index}
                            className="media-item"
                            onClick={() => openFullscreen(index)}
                        >
                            <img src={item.src} alt={item.alt} />
                        </div>
                    ))}
                </div>

                {isFullscreen && (
                    <div className="fullscreen-overlay" onClick={closeFullscreen}>
                        <div className="fullscreen-content">
                            <button
                                className="nav-btn prev-btn"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    navigate('prev');
                                }}
                            >
                                &lt;
                            </button>

                            <div
                                className="media-display"
                                onWheel={handleWheel}
                                onMouseMove={handleMouseMove}
                                style={{
                                    transform: `scale(${zoomLevel}) translate(${position.x}px, ${position.y}px)`
                                }}
                                onClick={(e) => e.stopPropagation()}
                            >
                                <img
                                    src={mediaItems[currentIndex].src}
                                    alt={mediaItems[currentIndex].alt}
                                />
                            </div>

                            <button
                                className="nav-btn next-btn"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    navigate('next');
                                }}
                            >
                                &gt;
                            </button>

                            <div className="thumbnails-container">
                                {mediaItems.map((item, index) => (
                                    <div
                                        key={index}
                                        className={`thumbnail ${index === currentIndex ? 'active' : ''}`}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setCurrentIndex(index);
                                            setZoomLevel(1);
                                            setPosition({ x: 0, y: 0 });
                                        }}
                                    >
                                        <img src={item.src} alt={item.alt} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

            </div>
            <div className='video-container'>
                <div className='title'>
                    <h1 style={{ color: '#333', textAlign: 'center', paddingTop: '20px', fontSize: '2rem', borderBottom: '4px solid #3e27ebff', marginLeft: '35%', marginRight: '35%', marginBottom: '60px', paddingBottom: '10px' }}>Videos</h1>
                </div>
                <div className="video-grid">
                    {videos.map((item, index) => (
                        <div
                            key={index}
                            className="videos"
                        >
                            <iframe src={item.src} alt={item.alt} style={{ borderRadius: '8px', border: '2px solid #cfcfcfff', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)' }} allow='encrypted-media' width="100%" height="100%" title={item.alt} />
                        </div>
                    ))}
                </div>
            </div>
            <div className='footer'>
                <Footer />
            </div>
        </div>
    );
};

export default Gallery;
