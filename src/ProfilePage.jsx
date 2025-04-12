import React, { useState } from "react";
import "./ProfilePage.css";

function ProfilePage() {
  const [openToWork, setOpenToWork] = useState(true);

  return (
    
    <div className="profile-page">
      
      {/* Profile Header with Background */}
      <div className="profile-header">
        {/*profile bg*/}
        <div className="profile-background"></div>
        
        {/* Profile Image with "Open to Work" Banner */}
        <div className="profile-image-container">
          <div className="profile-image-wrapper">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTMlWJ1QcxORoYK60R3PsojNvF2jDymSDsQPGnvYQWWE5QdjBxJmArN-8BlMPqjmY3XR4&usqp=CAU" 
              alt="Dhanusuya R" 
              className="profile-image" 
            />
            {openToWork && (
              <div className="open-to-work-badge">
                <span>#OPENTOWORK</span>
              </div>
            )}
          </div>
          
          {/* Camera icon for photo update */}
          <button className="camera-button">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 3L7.17 5H4C2.9 5 2 5.9 2 7V19C2 20.1 2.9 21 4 21H20C21.1 21 22 20.1 22 19V7C22 5.9 21.1 5 20 5H16.83L15 3H9ZM12 18C9.24 18 7 15.76 7 13C7 10.24 9.24 8 12 8C14.76 8 17 10.24 17 13C17 15.76 14.76 18 12 18Z" fill="currentColor"/>
              <circle cx="12" cy="13" r="3.5" fill="currentColor"/>
            </svg>
          </button>
        </div>
        
        {/* Edit profile button */}
        <button className="edit-profile-button">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 17.25V21H6.75L17.81 9.94L14.06 6.19L3 17.25ZM20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29C17.98 2.9 17.35 2.9 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04Z" fill="currentColor"/>
          </svg>
        </button>
      </div>
      
      {/* Profile Information */}
      <div className="profile-info">
        <div className="profile-name-section">
          <h1>Dhanusuya R</h1>
          <button className="verification-badge">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM8 15L3 10L4.41 8.59L8 12.17L15.59 4.58L17 6L8 15Z" fill="#0077B5"/>
            </svg>
            
          </button>
        </div>
        
        <h2 className="profile-title">Student at Coimbatore Institute of Technology</h2>
        
        <div className="profile-location">
          <span>Coimbatore, Tamil Nadu, India</span>
          <span className="contact-info">·</span>
          <a href="#" className="contact-info">Contact info</a>
        </div>
        
        <div className="profile-connections">
          <span>327 connections</span>
        </div>
        
        {/* Action buttons */}
        <div className="profile-actions">
          <button className="primary-button">Open to</button>
          <button className="secondary-button">Add profile section</button>
          <button className="secondary-button">Enhance profile</button>
          <button className="tertiary-button">More</button>
        </div>
        
        {/* Open to work section */}
        <div className="open-to-work-section">
          <div className="section-content">
            <h3>Open to work</h3>
            <p>Software Engineer, Software Developer and Full Stack Developer roles</p>
            <a href="#" className="show-details">Show details</a>
          </div>
          <button className="edit-section-button">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 17.25V21H6.75L17.81 9.94L14.06 6.19L3 17.25ZM20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29C17.98 2.9 17.35 2.9 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04Z" fill="currentColor"/>
            </svg>
          </button>
        </div>
        
        {/* Education section */}
        <div className="education-section">
          <h3>Education</h3>
          <div className="education-item">
            <img 
              src="https://upload.wikimedia.org/wikipedia/en/1/17/Coimbatore_Institute_of_Technology_logo.png" 
              alt="Coimbatore Institute of Technology" 
              className="institution-logo"
            />
            <div className="education-details">
              <h4>Coimbatore Institute of Technology</h4>
              <p>Bachelor of Technology - BTech, Information Technology</p>
              <p className="education-date">2021 - 2025</p>
            </div>
          </div>
          
          <div className="education-item">
            <img 
              src="data:image/jpeg;base64,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" 
              alt="Dalalytics CIT" 
              className="institution-logo"
            />
            <div className="education-details">
              <h4>Dalalytics CIT</h4>
              <p>Data Analysis & Data Science Club</p>
              <p className="education-date">2022 - Present</p>
            </div>
          </div>
        </div>
        
        {/* Skills section */}
        <div className="skills-section">
          <h3>Skills</h3>
          <div className="skill-items">
            <div className="skill-item">
              <h4>Web Development</h4>
              <p>Endorsed by 12 colleagues</p>
            </div>
            <div className="skill-item">
              <h4>JavaScript</h4>
              <p>Endorsed by 8 colleagues</p>
            </div>
            <div className="skill-item">
              <h4>React.js</h4>
              <p>Endorsed by 15 colleagues</p>
            </div>
            <div className="skill-item">
              <h4>NodeJS</h4>
              <p>Endorsed by 13 colleagues</p>
            </div>
            <div className="skill-item">
              <h4>NextJS</h4>
              <p>Endorsed by 12 colleagues</p>
            </div>
            <div className="skill-item">
              <h4>Python</h4>
              <p>Endorsed by 5 colleagues</p>
            </div>
            <div className="skill-item">
              <h4>Data Analysis</h4>
              <p>Endorsed by 7 colleagues</p>
            </div>
          </div>
          <button className="show-more-button">Show all skills</button>
        </div>
      </div>
      
      
    </div>
  );
}

export default ProfilePage;