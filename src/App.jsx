import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import MainContent from './components/MainContent';
import Header from './components/Header';
import Sponsors from './components/Sponsors';
import UniversityImages from './components/UniversityImages';
import LiveSection from './components/LiveSection'; // Import the new component
import './App.css'; // Ensure Tailwind CSS is imported
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e0f7fa] to-[#81d4fa] text-white w-full max-w-[56rem] mx-auto">
      <Header />
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
