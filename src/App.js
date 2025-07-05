import React from 'react';
import Navbar from './Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="main-content">
        <section className="hero-section">
          <div className="hero-content">
            <h1>Welcome to IBM-Style Navigation</h1>
            <p>This is a responsive navigation bar inspired by IBM's homepage design.</p>
            <button className="cta-button">Get Started</button>
          </div>
        </section>
        
        <section className="content-section">
          <div className="container">
            <h2>Features</h2>
            <div className="features-grid">
              <div className="feature-card">
                <h3>Responsive Design</h3>
                <p>Works perfectly on desktop, tablet, and mobile devices.</p>
              </div>
              <div className="feature-card">
                <h3>Modern UI</h3>
                <p>Clean, professional design inspired by IBM's visual identity.</p>
              </div>
              <div className="feature-card">
                <h3>Smooth Animations</h3>
                <p>Elegant transitions and hover effects for better user experience.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
