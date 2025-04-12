import React, { useEffect, useState } from "react";
import "./HomePage.css";


function HomePage() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    
    // Animation for service cards
    const serviceCards = document.querySelectorAll('.service-card');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.animation = 'slideUp 1s forwards';
          }
        });
      },
      { threshold: 0.1 }
    );
    
    serviceCards.forEach(card => {
      observer.observe(card);
    });

    return () => {
      document.removeEventListener('scroll', handleScroll);
      serviceCards.forEach(card => {
        observer.unobserve(card);
      });
    };
  }, [scrolled]);

  return (
    <div className="homepage">
      {/* Navigation Bar */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <a href="/" className="logo">Dhanu<span>Events</span></a>
        
        <div 
          className="mobile-menu-btn" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path 
              fill="currentColor" 
              d={mobileMenuOpen 
                ? "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                : "M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
              }
            />
          </svg>
        </div>
        
        <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          <li><a href="/about">About Us</a></li>
          <li><a href="/ProfilePage">Profile</a></li>
          <li><a href="/packages">Packages</a></li>
          <li><a href="/book">Book Us</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <div className="hero">
        <img
          src="https://images.pexels.com/photos/57542/pexels-photo-57542.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Hero"
          className="hero-img"
        />
        <div className="hero-text">
          <h1>Turning Special Moments into Timeless Memories</h1>
          <button className="whatsapp-button">WhatsApp</button>
        </div>
      </div>

      {/* Journey Stats */}
      <div className="stats">
        <h2>Our Journey So Far</h2>
        <p>At Stunning Events, we specialize in making memories unforgettable through captivating photography and videography services tailored to your special moments.</p>
        <div className="stats-box">
          <div><strong>1,000+</strong><br />Events Covered</div>
          <div><strong>500+</strong><br />Happy Clients</div>
          <div><strong>10+</strong><br />Years of Excellence</div>
          <div><strong>40+</strong><br />Professionals</div>
        </div>
      </div>

      {/* Services */}
      <div className="services">
        <h2>Our Services</h2>

        <div className="service-card">
          <img
            src="https://images.pexels.com/photos/2179205/pexels-photo-2179205.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Wedding"
            className="service-img"
          />
          <div className="service-text">
            <h3>Wedding Photography & Videography</h3>
            <p>We capture every beautiful moment of your wedding with cinematic precision. Our expert team ensures that all the emotions, details, and special moments are preserved forever.</p>
            <button>Know More</button>
            <button>Book Now</button>
          </div>
        </div>

        <div className="service-card">
          <img
            src="https://images.pexels.com/photos/6849422/pexels-photo-6849422.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Baby Shoot"
            className="service-img"
          />
          <div className="service-text">
            <h3>Newborn & Baby Photoshoots</h3>
            <p>Adorable clicks that capture the cuteness and joy of your little ones. We create a comfortable environment where babies can be themselves while we capture their precious moments.</p>
            <button>Know More</button>
            <button>Book Now</button>
          </div>
        </div>

        <div className="service-card">
          <img
            src="https://images.pexels.com/photos/3363204/pexels-photo-3363204.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Ceremony"
            className="service-img"
          />
          <div className="service-text">
            <h3>Traditional Ceremonies</h3>
            <p>We preserve your cultural heritage in stunning visuals and storytelling. From traditional rituals to cultural celebrations, we understand the significance of every moment.</p>
            <button>Know More</button>
            <button>Book Now</button>
          </div>
        </div>
      </div>
      {/* Contact Details Section */}
      <div className="contact-section">
        <h2>Contact Us</h2>
        <p>We’d love to hear from you. Get in touch for bookings, inquiries, or collaborations!</p>
        <div className="contact-box">
          <div><strong>Phone:</strong> +91 98765 43210</div>
          <div><strong>Email:</strong> contact@dhanuevents.com</div>
          <div><strong>Location:</strong> Coimbatore, India</div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;