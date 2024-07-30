import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import MainContent from './components/MainContent';
import Sponsors from './components/Sponsors';
import UniversityImages from './components/UniversityImages';
import LiveSection from './components/LiveSection'; // Import the new component
import './App.css'; // Ensure Tailwind CSS is imported

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

        <LiveSection /> {/* Add the new LiveSection component */}
      {/* Main Content */}
      <main className="w-full max-w-full px-4 py-8">
        <MainContent />
        
        {/* Additional Sections */}
        <Sponsors /> {/* Use the new Sponsors component */}
        <UniversityImages />
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4">
        <p>&copy; 2017 - CICN 2024 - All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default App;
