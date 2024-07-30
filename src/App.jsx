// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import MainContent from './components/MainContent';
import Sponsors from './components/Sponsors';
import UniversityImages from './components/UniversityImages';
import LiveSection from './components/LiveSection'; // Import the new component
import './App.css'; // Ensure Tailwind CSS is imported
// src/index.js or src/App.js
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white w-full max-w-7xl mx-auto">
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Live Section */}
      <LiveSection />

      {/* Main Content */}
      <main className="px-4 py-8">
        <MainContent />

        {/* Additional Sections */}
        {/* <div className="w-full">
          <Sponsors />
          <UniversityImages />
        </div> */}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4">
        <p>&copy; 2017 - CICN 2024 - All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default App;
